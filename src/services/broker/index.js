const { messages } = require("../../config");
const brokerModel = require("../../models/brokerModel/index");
const comparisonModel = require("../../models/comparisonModel/index");
const findMissingNumbers = require('./helper');

const createBrokersService = async (req) => {
    try {
        /// add the top 10 to broker logics
        const topBrokers = await brokerModel.find({top: {$gt: 0}}).sort({top: -1}).limit(10).exec();
        req.body.top = 0;
        const missinTopNumber = await findMissingNumbers();

        if(topBrokers.length > 0) {
            if(topBrokers[0].top < 10){
                req.body.top = topBrokers[0].top + 1;
            }
        }

        if(missinTopNumber.length > 0) {
            req.body.top = missinTopNumber[0];
        }


        const createBroker = await brokerModel.create(req.body);
        if(!createBroker) {
            return {message: "CREATE_BROKER_FAIL", data: null};
        }
        return {massage: "CREATE_BROKER_SUCCESSFUL", data: createBroker._id};
    } catch (error) {
        throw new Error(error);
    }
}

// check broker is exsited or not in the database
const brokerExists = async (req) => {
    try {
        if(req.body.userID !== undefined) {
            const broker = await brokerModel.findOne({userID: req.body.userID});
            if(broker) {
                return {message: "BROKER_EXISTS", isValid: false};
            }
        }
        return {message: "BROKER_DOES_NOT_EXISTS", isValid: true};
    } catch (error) {
        console.error("Error :", error);
        return {message: "INTERNAL_SERVER_ERROR", isValid: false};
    }
}

// update broker by id
const updateBrokerService = async (req) => {
    try{
        req.body.updatedAt = new Date();
        const updatedBroker = await brokerModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedBroker) {
            return {message: "BROKER_NOT_FOUND", data: null};
        }
        return {message: "UPDATE_BROKER_SUCCESSFUL", data: updatedBroker._id};
    } catch (error) {
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
}

// Get broker by id
const getBrokerService = async (req) => {
    try{
        const broker = await brokerModel.findById(req.params.id);
        if(!broker) {
            return {message: "BROKER_NOT_FOUND", data: null};
        }
        
        const comparison = await comparisonModel.findOne({ brokerID: broker._id });
        return {messages: "GET_BROKER_SUCCESSFUL", data: {broker, comparison}};
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


/// get all brokers
const getBrokersService = async (req, query) => {
    try {
        const limit = parseInt(req.query.limit) || 25;
        const skip = parseInt(req.query.skip) || 0;

        // Step 1: Fetch all brokers
        const brokers = await brokerModel.find(query).sort({top: 1, createdAt: -1}).limit(limit).skip(skip);

        // Step 2: For each broker, fetch comparisons that reference the brokerID
        const brokersWithComparisons = await Promise.all(
            brokers.map(async (broker) => {
                const comparisons = await comparisonModel.find({ brokerID: broker._id });
                return {
                    ...broker.toObject(), // Convert the Mongoose object to plain JS object
                    comparisons,          // Attach the related comparisons
                };
            })
        );

        return {message: "GET_BROKERS_SUCCESSFUL", data: {totalBrokers: brokers.length, brokers: brokersWithComparisons}};

    } catch (error) {
        console.error({error});
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
};

/// delete broker by id
const deleteBrokerService = async (req) => {
    try {
        const deletedBroker = await brokerModel.findByIdAndDelete(req.params.id);
        if(deletedBroker && deletedBroker.top > 0) {
            const giveTopToOther = await brokerModel.findOne({ top: 0 }).sort({ createdAt: 1 }).exec();
            if (giveTopToOther) {
                giveTopToOther.top = deletedBroker.top; 
                await giveTopToOther.save(); 
            }
        }
        if(!deletedBroker) {
            return {message: "BROKER_NOT_FOUND", data: null};
        }
        const deleteComparisons = await comparisonModel.findOneAndDelete({ brokerID: deletedBroker._id });
        return {message: "DELETE_BROKER_SUCCESSFUL", data: deletedBroker._id};
    } catch (error) {
        console.error("Error updating broker data:", error);
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
};  

const getRecommendedBrokersService = async (req) => {
    try {
        const recommendedBrokers = await brokerModel.find({isRecommended: true});
        return {message: "GET_RECOMMENDED_BROKERS_SUCCESSFUL", data: recommendedBrokers};
    } catch (error) {
        console.error("Error updating broker data:", error);
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
}

const updateBrokerTopService = async (req) => {
    try {
        
        /// use updateOne for each document or leverage bulk operations like bulkWrite for efficiency
        const topBrokers = req.body.topBrokers;
        const operations = topBrokers.map(update => ({
            updateOne: {
              filter: { _id: update.id }, // Match by _id
              update: { $set: { top: update.top } }, // Set the new status
            },
        }));
        const update = await brokerModel.bulkWrite(operations);
        if(!update) {
            return {message: "BROKER_NOT_FOUND", data: null};
        }
        return {message: "UPDATE_BROKER_TOP_SUCCESSFUL", data: update};
    } catch (error) {
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
}

module.exports = {createBrokersService, brokerExists, updateBrokerService, getBrokerService, getBrokersService, deleteBrokerService, getRecommendedBrokersService, updateBrokerTopService}