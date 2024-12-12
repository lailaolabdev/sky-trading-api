const { messages } = require("../../config");

const getStaffService = async (staffID) => {
    const staffInfo = {messages: "SUCCESSFUL", data: `staff id ${staffID}`}
    return staffInfo;
};

module.exports = { getStaffService };