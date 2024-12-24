const comparisonModel = require("../../models/comparisonModel");

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
module.exports = { createComparisonService, updateComparisonService, brokerComparinsonExits }