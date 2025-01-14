const {createComparisonComponentService, deleteComparisonComponentService, updateComparisonComponentService, comparisonComponentExists, getComparisonComponentService} = require('../../services/comparisonComponent');
const validateComparisonComponent = require('../../validators/comparisonComponentValidator');
const { searchQuery } = require('./helper');

const createComparisonComponent = async (req, res) => {
    try {
        const { isValid, message } = validateComparisonComponent(req);
        
        if (!isValid) {
            return res.status(400).json({ message: message });
        }
        // check if the component is exists in the database
        const isExists = await comparisonComponentExists(req);
        if(!isExists.isValid) {
            return res.status(400).json({ message: isExists.message });
        }
        const comparisonComponent = await createComparisonComponentService(req);
        if(!comparisonComponent.data) {
            return res.status(400).json({ message: comparisonComponent.message });
        }
        return res.status(200).json(comparisonComponent);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const deleteComparisonComponent = async (req, res) => {
    try {
        const comparisonComponent = await deleteComparisonComponentService(req);
        if(!comparisonComponent.data) {
            return res.status(400).json({ message: comparisonComponent.message });
        }
        return res.status(200).json(comparisonComponent);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const updateComparisonComponent = async (req, res) => {
    try {
        const comparisonComponent = await updateComparisonComponentService(req);
        if(!comparisonComponent.data) {
            return res.status(400).json({ message: comparisonComponent.message });
        }
        return res.status(200).json(comparisonComponent);
    } catch (error) {
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }  
};

const getComparisonComponent = async (req, res) => {
    try {
        const query = searchQuery(req);
        const comparisonComponent = await getComparisonComponentService(req, query);
        if(!comparisonComponent.data) {
            return res.status(400).json({ message: comparisonComponent.message });
        }
        return res.status(200).json(comparisonComponent);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
module.exports = {createComparisonComponent, deleteComparisonComponent, updateComparisonComponent, getComparisonComponent};