const {createBrokersService, brokerExists, updateBrokerService, getBrokerService, getBrokersService, deleteBrokerService, getRecommendedBrokersService, updateBrokerTopService} = require('../../services/broker');
const validateBrokerData = require('../../validators/brokerValidator');
const updateBrokerValidator = require('../../validators/updateBrokerValidator');
const {searchQuery} = require('./helper');
const validateTopBrokersData = require('../../validators/updateTopBrokerValidator');

const createBroker = async (req, res) => {
    try {
        const checkBroker = validateBrokerData(req);
        if(!checkBroker.isValid) {
            return res.status(400).json({message: checkBroker.message});
        }

        const isBrokerExisted = await brokerExists(req);
        if(!isBrokerExisted.isValid) {
            return res.status(400).json({message: isBrokerExisted.message});
        }

        const broker = await createBrokersService(req);
        if(!broker.data) {
            return res.status(400).json({message: broker.message});
        }
        return res.status(200).json(broker);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
}

const updateBroker = async (req, res) => {
    try {
        const {isValid, message} = updateBrokerValidator(req);
        if(!isValid) {
            return res.status(400).json({message});
        }
        const broker = await updateBrokerService(req);
        if(!broker.data) {
            return res.status(400).json({message: broker.message});
        }
        return res.status(200).json(broker);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// Get broker by id
const getBroker = async (req, res) => {
    try{
        const broker = await getBrokerService(req);
        if(!broker.data) {
            return res.status(400).json({message: broker.message});
        }
        return res.status(200).json(broker);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

/// get all brokers
const getBrokers = async (req, res) => {
    try{
        const query = searchQuery(req);
        const broker = await getBrokersService(req, query);
        if(!broker.data) {
            return res.status(400).json({message: broker.message});
        }
        return res.status(200).json(broker);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getRecommendedBrokers = async (req, res) => {
    try{
        const recommendedBroker = await getRecommendedBrokersService(req);
        if(!recommendedBroker.data) {
            return res.status(400).json({message: recommendedBroker.message});
        }
        return res.status(200).json(recommendedBroker);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

/// delete broker by id
const deleteBroker = async (req, res) => {
    try {
        const deletedBroker = await deleteBrokerService(req);
        if(!deletedBroker.data) {
            return res.status(400).json({message: deletedBroker.message});
        }
        return res.status(200).json(deletedBroker);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


/// update top 10 brokers
const updateBrokerTop = async (req, res) => {
    try {
        const {isValid, message} = validateTopBrokersData(req);
        if(!isValid) {
            return res.status(400).json({message});
        }
        const brokers = await updateBrokerTopService(req);
        if(!brokers.data) {
            return res.status(400).json({message: brokers.message});
        }
        return res.status(200).json(brokers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
}
module.exports = {createBroker, updateBroker, getBroker, getBrokers, deleteBroker, getRecommendedBrokers, updateBrokerTop}; 