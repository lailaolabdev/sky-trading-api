const express = require("express");
const router = express.Router();

const {createComparisonComponent, deleteComparisonComponent, updateComparisonComponent} = require("../../controllers/comparisonComponent");
const {checkAuthorization} = require("../../middlewares")

router.post("/", checkAuthorization, createComparisonComponent);
router.delete("/:id", checkAuthorization, deleteComparisonComponent);
router.put("/:id", checkAuthorization, updateComparisonComponent);

module.exports = router;