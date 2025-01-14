const comparisonComponentModel = require("../../models/comparisonComponentModel");

const createComparisonComponentService = async (req) => {
    try {
        const createComponent = new comparisonComponentModel(req.body);
        const comparisonComponent = await createComponent.save();
        if(!comparisonComponent) {
            return {message: "CREATE_COMPARISON_COMPONENT_FAIL", data: null};
        }
        return {message: "CREATE_COMPARISON_COMPONENT_SUCCESSFUL", data: comparisonComponent._id}; 
    } catch (error) {
        console.error("Error :", error);
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
};

// delete comparison component by id
const deleteComparisonComponentService = async (req) => {
    try {
        const deletedComparisonComponent = await comparisonComponentModel.findByIdAndDelete(req.params.id);
        if(!deletedComparisonComponent) {
            return {message: "COMPARISON_COMPONENT_NOT_FOUND", data: null};
        }
        return {message: "DELETE_COMPARISON_COMPONENT_SUCCESSFUL", data: deletedComparisonComponent._id};
    } catch (error) {
        console.error("Error :", error);
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
}

// update items of comparison component by id 
const updateComparisonComponentService = async (req) => {
    try {
        req.body.updatedAt = new Date();
        const updatedComparisonComponent = await comparisonComponentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedComparisonComponent) {
            return {message: "COMPARISON_COMPONENT_NOT_FOUND", data: null};
        }
        return {message: "UPDATE_COMPARISON_COMPONENT_SUCCESSFUL", data: updatedComparisonComponent._id};
    } catch (error) {
        console.error("Error :", error);
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
}

// check if the component is exists in the database
const comparisonComponentExists = async (req) => {
    try {
        const comparisonComponent = await comparisonComponentModel.findOne({$or: [{component: req.body.component}, {componentNo: req.body.componentNo}]});
        if(comparisonComponent) {
            return {message: "COMPARISON_COMPONENT_EXISTS", isValid: false};
        }
        return {message: "COMPARISON_COMPONENT_DOEST_NOT_EXISTS", isValid: true};;
    } catch (error) {
        console.error("Error :", error);
        return {message: "INTERNAL_SERVER_ERROR", isValid: false};
    }
}

const getComparisonComponentService = async (req, query) => {
    try {
        const comparisonComponent = await comparisonComponentModel.find(query).sort({componentNo: 1});
        return {message: "GET_COMPARISON_COMPONENT_SUCCESSFUL", data: comparisonComponent};
    } catch (error) {
        console.error("Error :", error);
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
}

module.exports = {createComparisonComponentService, deleteComparisonComponentService, updateComparisonComponentService, comparisonComponentExists, getComparisonComponentService, getComparisonComponentService};