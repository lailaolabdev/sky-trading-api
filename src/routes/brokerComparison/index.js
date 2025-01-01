const express = require("express");
const router = express.Router();

const {createComparison, updateComparison} = require("../../controllers/brokerComparinson");
const {checkAuthorization} = require("../../middlewares")
const {getBrokerComparisons} = require("../../controllers/brokerComparinson");

router.post("/", checkAuthorization, createComparison);
router.put("/:id", checkAuthorization, updateComparison);
router.get("/broker1/:broker1/broker2/:broker2", getBrokerComparisons);
router.get("/broker1/:broker1/broker2/:broker2/broker3/:broker3", getBrokerComparisons);

module.exports = router;