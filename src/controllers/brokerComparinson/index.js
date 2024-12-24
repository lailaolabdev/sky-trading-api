const {createComparisonService, updateComparisonService, brokerComparinsonExits} = require('../../services/brokerComparison');
const validateBrokerData = require('../../validators/brokerComparisonValidator');
const updateBrokerValidator = require('../../validators/updateBrokerComparinsonValidator');

const createComparison = async (req, res) => {
    try {
        const isBrokerComparisonExisted = await brokerComparinsonExits(req);
        if(!isBrokerComparisonExisted.isInvalid) {
            return res.status(400).json({message: isBrokerComparisonExisted.message});
        }
        const checkBroker = validateBrokerData(req);
        if(!checkBroker.isValid) {
            return res.status(400).json({message: checkBroker.message});
        }   
        const createComparison = await createComparisonService(req);
        if(!createComparison.data) {
            return res.status(400).json({message: createComparison.message});
        }
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

module.exports = {createComparison, updateComparison}