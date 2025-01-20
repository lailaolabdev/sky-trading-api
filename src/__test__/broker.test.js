const request = require("supertest");
const app = require("../routes");
const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const {generateToken} = require("../utils/generateTokens");

describe("Test Broker Routes", () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    })

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    })
    
    const brokerData = {
        "name": "broker 1",
        "nameEN": "BROKER1",
        "subtitle": "i am broker",
        "subtitleEN": "I AM BROKER",
        "foundedYear": "2023-2024",
        "brokerLink": "https://sample.org",
        "logo": "logo_image.jpg",
        "createdBy": "676060f30d23521002502ac9"
    };
    
    const id = '676a0c6cddb19a69b5e27868';

    it("should return 401 if Unauthorized", async () => {
        await request(app).delete(`/api/v1/broker/${id}`).expect(401);
    })

    it("should return 200 if create broker success",async () => {
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        await request(app).post("/api/v1/broker").set("authorization", `Bearer ${token.accessToken}`).send(brokerData).expect(200);
    });

     it("should return 400 if missing field",async () => {
        expect(true).toBe(true);
        brokerData["name"] = "";
        
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        await request(app).post("/api/v1/broker").set("authorization", `Bearer ${token.accessToken}`).send(brokerData).expect(400);
    });

    it("should return 400 if broker not found", async () => {
        await request(app).get(`/api/v1/broker/broker-id/${id}`).expect(400);
    })
    
});