const express = require("express");
const router = express.Router();

const {getStaffs, addStaff, getStaff, updateStaff, deleteStaff} = require("../../controllers/staff");
const {checkAuthorization, checkAuthorizationAdmin} = require("../../middlewares")


router.get("/", checkAuthorization, getStaffs);
router.get("/staff-id/:id", checkAuthorization, getStaff);
router.post("/", checkAuthorization, addStaff);
router.put("/staff-id/:id", checkAuthorization, updateStaff);      // TODO: confirm with team about permission to delete and update staff
router.delete("/staff-id/:id", checkAuthorization, deleteStaff);

module.exports = router;

