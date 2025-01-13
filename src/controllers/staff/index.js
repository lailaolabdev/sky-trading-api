const { messages } = require("../../config");
const { getStaffsService, addStaffService, getStaffService, updateStaffService, deleteStaffService, staffExisted } = require("../../services/staff");
const {validateStaff} = require("../../validators/staffValidator");
const validateUpdateStaff = require("../../validators/updateStaffValidator");

// from helper
const {searchQuery} = require('./helper')

const getStaffs = async (req, res) => {
    try{
        const query =  searchQuery(req);
        
        const staffInfo = await getStaffsService(req, query);
        if(!staffInfo) {
            return res.status(404).json({ message: "STAFF_NOT_FOUND" });
        }
        return res.status(200).json({ message: "GET_STAFFS_SUCCESSFUL", totalStaff: staffInfo.count, data: staffInfo.staffs});

    } catch (error) {
        console.log({error});
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
}; 
const getStaff = async (req, res) => {
    try{
        const staffInfo = await getStaffService(req);
        if(!staffInfo) {
            return res.status(404).json({ message: "STAFF_NOT_FOUND" });
        }
        return res.status(200).json({ message: "GET_STAFFS_SUCCESSFUL", data: staffInfo});

    } catch (error) {
        console.log({error});
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

const addStaff = async (req, res) => {
    try {
        const {isValid, errors} = validateStaff(req.body);
        
        if (!isValid) {
            return res.status(400).json({ message: errors[0].message });
        }
        
        const isStaffExisted = await staffExisted(req.body);
        if (isStaffExisted) {
            return res.status(400).json({ message: "STAFF_ALREADY_EXISTED" });
        }
        const addStaff = await addStaffService(req);

        console.log({addStaff});
        if (!addStaff.data) {
            return res.status(500).json({ message: addStaff.message });
        }
        
        return res.status(201).json(addStaff);
    }catch (error) {
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });    
    }
};

const updateStaff = async (req, res) => {
    try {
        const {isValid, message} = validateUpdateStaff(req.body);
        console.log("a")
        if (!isValid) {
            console.log("b")
            return res.status(400).json({ message });
        }
        console.log("c")
        // const id = req.params.id;
        const isStaffExisted = await staffExisted(req);
        if (isStaffExisted) {
            console.log("d")
            return res.status(400).json({ message: "STAFF_ALREADY_EXISTED" });
        }
        console.log("e")
        
        const updatingStaff = await updateStaffService(req);
        
        if (!updatingStaff.data) {
            console.log("f")
            return res.status(500).json({ message: updatingStaff.message });
        }

        return res.status(200).json(updatingStaff);
    }catch (error) {
        console.log({error});
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

const deleteStaff = async (req, res) => {
    try{

        const staffInfo = await deleteStaffService(req);
        if(!staffInfo.data) {
            return res.status(404).json({ message: "STAFF_NOT_FOUND" });
        }
        return res.status(200).json(staffInfo);
    }catch(error){
        console.log({error});
        return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
};

module.exports = { getStaffs, addStaff, getStaff, updateStaff, deleteStaff };