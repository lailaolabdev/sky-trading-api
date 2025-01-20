const request = require("supertest");
const app = require("../routes");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { generateToken } = require("../utils/generateTokens");
 
describe("Test Comparison Routes", () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    const comparisonData ={
        "brokerID": "676a0c6cddb19a69b5e27868",
        "regulations": [
          "AB",
          "DD"
        ],
        "educationResources": "high",
        "educationResourcesEN": "higher",
        "tradingPlatforms": [
          "web"
        ],
        "tradableInstruments": [
          "None profit"
        ],
        "minimumDeposit": 200000,
        "depositAndWithdrawFee": "1/2",
        "leverage": "1C",
        "leverageEN": "1C",
        "spread": 1232,
        "orderExecution": "abcdef",
        "orderExecutionEN": "ladfheo",
        "customerSupport": "dfkljfd",
        "introduceBrokerFee": "dlfj",
        "introduceBrokerFeeEN": "ldfjde",
        "depositMethods": "valet",
        "tradingAfterDeposit": "kafhddl",
        "tradingAfterDepositEN": "dlkfjad",
        "rating": 3,
        "description": "dafjladfe",
        "descriptionEN": "dlakfjeio",
        "createdBy": "67606218a6670170743c4614"
    }

    const broker1ComparisonData ={
        "brokerID": "676a0c6cddb19a69b5e27867",
        "regulations": [
          "AB",
          "DD"
        ],
        "educationResources": "high",
        "educationResourcesEN": "higher",
        "tradingPlatforms": [
          "web"
        ],
        "tradableInstruments": [
          "None profit"
        ],
        "minimumDeposit": 200000,
        "depositAndWithdrawFee": "1/2",
        "leverage": "1C",
        "leverageEN": "1C",
        "spread": 1232,
        "orderExecution": "abcdef",
        "orderExecutionEN": "ladfheo",
        "customerSupport": "dfkljfd",
        "introduceBrokerFee": "dlfj",
        "introduceBrokerFeeEN": "ldfjde",
        "depositMethods": "valet",
        "tradingAfterDeposit": "kafhddl",
        "tradingAfterDepositEN": "dlkfjad",
        "rating": 3,
        "description": "dafjladfe",
        "descriptionEN": "dlakfjeio",
        "createdBy": "67606218a6670170743c4614"
    } 

    const broker2ComparisonData = {
        "brokerID": "676a0c6cddb19a69b5e27866",
        "regulations": [
          "AB",
          "DD"
        ],
        "educationResources": "high",
        "educationResourcesEN": "higher",
        "tradingPlatforms": [
          "web"
        ],
        "tradableInstruments": [
          "None profit"
        ],
        "minimumDeposit": 200000,
        "depositAndWithdrawFee": "1/2",
        "leverage": "1C",
        "leverageEN": "1C",
        "spread": 1232,
        "orderExecution": "abcdef",
        "orderExecutionEN": "ladfheo",
        "customerSupport": "dfkljfd",
        "introduceBrokerFee": "dlfj",
        "introduceBrokerFeeEN": "ldfjde",
        "depositMethods": "valet",
        "tradingAfterDeposit": "kafhddl",
        "tradingAfterDepositEN": "dlkfjad",
        "rating": 3,
        "description": "dafjladfe",
        "descriptionEN": "dlakfjeio",
        "createdBy": "67606218a6670170743c4614"
    }

    const id = "676a0c6cddb19a69b5e27868";
    let brokers = [];

    it("should return 200 if create comparison success", async () => {
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        const response = await request(app)
            .post("/api/v1/broker-comparison")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(comparisonData)
            .expect(200);
        
        // First create a comparison
        const firstbroker = await request(app)
            .post("/api/v1/broker-comparison")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(broker1ComparisonData);

            // second create a comparison
        const secondbroker = await request(app)
            .post("/api/v1/broker-comparison")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(broker2ComparisonData);
            
        brokers.push(response.body.data, firstbroker.body.data, secondbroker.body.data);
    });

    it("should return 400 if missing field", async () => {
        comparisonData.educationResources = ""; // Make a field invalid
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        await request(app)
            .post("/api/v1/broker-comparison")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(comparisonData)
            .expect(400);
    });

    it("should return 200 if get comparison of two brokers successful", async () => {
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        await request(app)
            .get(`/api/v1/broker-comparison/broker1/${brokers[0]}/broker2/${brokers[1]}`)
            .set("authorization", `Bearer ${token.accessToken}`)
            .expect(200);
    });

    it("should return 200 if get comparison of three brokers successful", async () => {
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        // Then retrieve the created comparison
        await request(app)
            .get(`/api/v1/broker-comparison/broker1/${brokers[0]}/broker2/${brokers[1]}/broker3/${brokers[2]}`)
            .set("authorization", `Bearer ${token.accessToken}`)
            .expect(200);
    });

});
