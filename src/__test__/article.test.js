const request = require("supertest");
const app = require("../routes");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { generateToken } = require("../utils/generateTokens");

describe("Test Article Routes", () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    const articleData = {
        "topic": "hello word",
        "topicEN": "HEELO",
        "description": "article dec",
        "descriptionEN": "descriptionEN",
        "image": "image.png",
        "createdBy": "67606540dfea26130fd393bc"
    };

    let articles = [];

    it("should return 401 if request is Unauthorized", async () => {
        const response = await request(app)
            .post("/api/v1/article")
            .send(articleData)
            .expect(401);
    });
    
    it("should return 200 if create article success", async () => {
        const token = generateToken("67606218a6670170743c4614", "EDITOR", "editor_01");

        const response = await request(app)
            .post("/api/v1/article")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(articleData)
            .expect(200);

        articles.push(response.body.data);
    });

    it("should return 400 if missing field", async () => {
        const invalidArticleData = { ...articleData, topic: "" }; // Invalid topic
        const token = generateToken("67606218a6670170743c4614", "EDITOR", "editor_01");

        await request(app)
            .post("/api/v1/article")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(invalidArticleData)
            .expect(400);
    });

    it("should return 200 if get articles successful", async () => {
        await request(app)
            .get(`/api/v1/article`)
            .expect(200);
    });

    it("should return 200 if get article by id successful", async () => {
        await request(app)
            .get(`/api/v1/article/article-id/${articles[0]}`)
            .expect(200);
    });
});
