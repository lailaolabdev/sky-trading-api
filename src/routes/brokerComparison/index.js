const express = require("express");
const router = express.Router();

const {createComparison, updateComparison} = require("../../controllers/brokerComparinson");
const {checkAuthorization} = require("../../middlewares")

router.post("/", checkAuthorization, createComparison);
router.put("/:id", checkAuthorization, updateComparison);

module.exports = router;