const comparisonModel = require("../../models/comparisonModel");
const brokerModel = require("../../models/brokerModel");
const {addSimilarField} = require("./helper");

const createComparisonService = async (req) => {
    try {
        const createComparison = await comparisonModel.create(req.body);
        if (!createComparison) {
            return { message: "CREATE_COMPARISON_FAIL", data: null };
        }
        return { message: "CREATE_COMPARISON_SUCCESSFUL", data: createComparison._id };
    } catch (error) {
        console.error("Error updating broker data:", error);
        return { message: "INTERNAL_SERVER_ERROR", data: null };
    }
};

const updateComparisonService = async (req) => {
    try {
        const updateComparison = await comparisonModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateComparison) {
            return { message: "COMPARISON_NOT_FOUND", data: null };
        }
        return { message: "UPDATE_COMPARISON_SUCCESSFUL", data: updateComparison._id };
    } catch (error) {
        console.error("Error updating broker data:", error);
        return { message: "INTERNAL_SERVER_ERROR", data: null };
    }
};

const brokerComparinsonExits = async (req) => {
    try {
        const brokerComparinson = await comparisonModel.findOne({brokerID: req.body.brokerID});
        if (!brokerComparinson) {
            return {isInvalid: true, message: "BROKER_NOT_FOUND"};
        }
        return { isInvalid: false, message: "BROKER_COMPARISON_EXITS"};
    } catch (error) {
        console.error("Error updating broker data:", error);
        return { isInvalid: false, message: "INTERNAL_SERVER_ERROR"};
    }
}

const brokerComparisonsService = async (req, query) => {
    try {
        const brokerComparisons = await brokerModel.find(query).sort({top: 1, createdAt: -1}).lean();
        if (!brokerComparisons) {
            return {message: "BROKER_NOT_FOUND", data: null};
        }

        const brokersWithComparisons = await Promise.all(
            brokerComparisons.map(async (broker) => {
                const comparisons = await comparisonModel.find({ brokerID: broker._id }).lean();
                const formattedComparisons = comparisons.map((comparison) => ({
                    ...comparison,
                    similar: {},
                  }));
                return {
                    ...broker, 
                    comparisons: formattedComparisons,          // Attach the related comparisons
                };
            })
        );

        if(req.query.similar == "true" || req.query.similar == true){
            const brokerSimilar = addSimilarField(brokersWithComparisons);
            
            return {message: "GET_BROKER_COMPARISONS_SUCCESSFUL", data: brokerSimilar};
        }
        return {message: "GET_BROKER_COMPARISONS_SUCCESSFUL", data: brokersWithComparisons};
    } catch (error) {
        console.error("Error updating broker data:", error);
        return {message: "INTERNAL_SERVER_ERROR"};
    }
}
const brokerSimilarityService = async (req, query) => {
    try {
        const brokerComparisons = await brokerModel.find(query).sort({top: 1, createdAt: -1});
        if (!brokerComparisons) {
            return {message: "BROKER_NOT_FOUND", data: null};
        }

        const brokersWithComparisons = await Promise.all(
            brokerComparisons.map(async (broker) => {
                const comparisons = await comparisonModel.find({ brokerID: broker._id });
                return {
                    ...broker.toObject(), // Convert the Mongoose object to plain JS object
                    comparisons,          // Attach the related comparisons
                };
            })
        );
        return {message: "GET_BROKER_COMPARISONS_SUCCESSFUL", data: brokersWithComparisons};
    } catch (error) {
        console.error("Error updating broker data:", error);
        return {message: "INTERNAL_SERVER_ERROR"};
    }
}


module.exports = { createComparisonService, updateComparisonService, brokerComparinsonExits, brokerComparisonsService, brokerSimilarityService}