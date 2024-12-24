const express = require("express");
const router = express.Router();

const {createBroker, updateBroker, getBroker, getBrokers, deleteBroker, getRecommendedBrokers, updateBrokerTop} = require("../../controllers/broker");
const {checkAuthorization} = require("../../middlewares");

router.post("/", checkAuthorization, createBroker);
router.put("/:id", checkAuthorization, updateBroker);
router.delete("/:id", checkAuthorization, deleteBroker);
router.get("/broker-id/:id", checkAuthorization, getBroker);
router.get("/", checkAuthorization, getBrokers);
router.get("/recommended-brokers", checkAuthorization, getRecommendedBrokers);
router.put("/broker-top/update", checkAuthorization, updateBrokerTop);

module.exports = router;