const request = require("supertest");
const app = require("../routes");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { generateToken } = require("../utils/generateTokens");

describe("Test FAQ Routes", () => {
    let mongoServer;
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    const faqData = {
        "type": "News",
        "typeEN": "NEWS",
        "questionAnswer": [
          {
            "question": "What is your favorite color?",
            "answer": "answer the question"
          }
        ],
        "questionAnswerEN": [
          {
            "question": "What is your favorite color?",
            "answer": "answer updating"
          }
        ],
        "createdBy": "676068f305ed8477634bb0a0"
    };

    const id = "676a0c6cddb19a69b5e27868";
    let faqs = [];

    it("should return 200 if create faq success", async () => {
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        const response = await request(app)
            .post("/api/v1/faq")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(faqData)
            .expect(200);
        
            
        faqs.push(response.body.data);
    });

    it("should return 400 if missing field", async () => {
        faqData.type = ""; // Make a field invalid
        const token = generateToken("67606218a6670170743c4614", "STAFF", "staff_01");

        await request(app)
            .post("/api/v1/faq")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(faqData)
            .expect(400);
    });

    it("should return 200 if get faqs successful", async () => {


        await request(app)
            .get(`/api/v1/faq`)
            .expect(200);
    });
        
    it("should return 200 if get faq by id successful", async () => {
        
        await request(app)
            .get(`/api/v1/faq/faq-id/${faqs[0]}`)
            .expect(200);
    });

});
