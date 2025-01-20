const {createComparisonService, updateComparisonService, brokerComparinsonExits} = require('../../services/brokerComparison');
const validateBrokerData = require('../../validators/brokerComparisonValidator');
const updateBrokerValidator = require('../../validators/updateBrokerComparinsonValidator');
const {searchQuery, areBrokersUnique} = require('./helper');

const {brokerComparisonsService} = require('../../services/brokerComparison');

const createComparison = async (req, res) => {
    try {
        const isBrokerComparisonExisted = await brokerComparinsonExits(req);
        console.log("---1")
        if(!isBrokerComparisonExisted.isInvalid) {
            return res.status(400).json({message: isBrokerComparisonExisted.message});
        }
        console.log("---2") 
        const checkBroker = validateBrokerData(req);
        if(!checkBroker.isValid) {
            return res.status(400).json({message: checkBroker.message});
        }   
        console.log("---3")
        const createComparison = await createComparisonService(req);
        if(!createComparison.data) {
            return res.status(400).json({message: createComparison.message});
        }
        console.log("---4")
        return res.status(200).json(createComparison);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const updateComparison = async (req, res) => {
    try {
        const {isValid, message} = updateBrokerValidator(req);
        if(!isValid) {
            return res.status(400).json({message});
        }
        const updateComparison = await updateComparisonService(req);
        if(!updateComparison.data) {
            return res.status(400).json({message: updateComparison.message});
        }
        return res.status(200).json(updateComparison);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getBrokerComparisons = async (req, res) => {
    try {
        if(!areBrokersUnique(req)) {
            return res.status(400).json({message: "BROKERS_ARE_NOT_UNIQUE"});
        }
        
        const query = searchQuery(req);
        const brokerComparisons = await brokerComparisonsService(req, query);
        if(!brokerComparisons.data) {
            return res.status(400).json({message: brokerComparisons.message});
        }
        return res.status(200).json(brokerComparisons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
}

module.exports = {createComparison, updateComparison, getBrokerComparisons}