const bcrypt = require("bcrypt");

const userModel = require("../../models/userModel")

const getStaffsService = async (req, searchQuery) => {
    try {
        
        const limit = parseInt(req.query.limit) || 25;
        const skip = parseInt(req.query.skip) || 0;
        // Aggregation query to fetch staff with pagination
        console.log({searchQuery, limit, skip});
        const staffs = await userModel.aggregate([
            { $match: searchQuery },
            { $skip: skip }, 
            { $limit: limit }, 
            { $project: { password: 0 } }     
        ]);

        const count = await userModel.aggregate([
            { $match: searchQuery },  
        ]);

        return { staffs, count: count.length }; 
    } catch (error) {
        console.error("Error getting staff data:", error);
        throw new Error("Unable to fetch staff data"); 
    }
};
const getStaffService = async (req) => {
    try {
        const id = req.params.id;
        const staff = await userModel.findById(id);
        return staff; 
    } catch (error) {
        console.error("Error getting staff data:", error);
        throw new Error("Unable to fetch staff data"); 
    }
};


const addStaffService = async (req) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const staffInfo = new userModel(req.body);
        const savedStaff = await staffInfo.save();
        
        return {message: "CREATE_STAFF_SUCCESSFUL", data: savedStaff._id};
    } catch (error) {
        console.log({error});
        return {message: "INTERNAL_SERVER_ERROR", data: null};
    }
};


const updateStaffService = async (req) => {
    try {
        req.body.updatedAt = new Date();
        if(req.body.password !== undefined) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const updatedStaff = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return {message: "UPDATE_STAFF_SUCCESSFUL", data: updatedStaff._id};
    } catch (error) {
        return {message: "UPDATE_STAFF_FAIL", data: null};
    }
};

const deleteStaffService = async (req) => {
    try {
        const deletedStaff = await userModel.findByIdAndDelete(req.params.id);
        if(!deletedStaff) {
            return {message: "STAFF_NOT_FOUND", data: null};
        }
        return {message: "DELETE_STAFF_SUCCESSFUL", data: deletedStaff._id};
    } catch (error) {
        console.error("Error updating staff data:", error);
        throw new Error("Unable to update staff data");
    }
};

const staffExisted = async (staff) => {  
    try {
        const existingStaff = await userModel.findOne({
            $or: [
                { email: staff.email },
                { userName: staff.userName }
            ]
        });
        return existingStaff ? true : false;  // Return true if staff exists, false otherwise
    } catch (error) {
        console.error('Error checking staff existence:', error);
        return false; 
    }

}

module.exports = { getStaffsService, addStaffService, getStaffService, updateStaffService, deleteStaffService, staffExisted};