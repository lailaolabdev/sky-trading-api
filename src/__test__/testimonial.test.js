const request = require("supertest");
const app = require("../routes");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { generateToken } = require("../utils/generateTokens");

describe("Test Testimonial Routes", () => {
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

    const testimonialData = {
        "userName": "testimonial 01",
        "userNameEN": "testimonial 01",
        "image": "testimonial_image.png",
        "brokerID": "6761fe309990cd3dc0ba47c3",
        "ratings": 4,
        "reviews": "good",
        "reviewsEN": "GOOD",
        "createdBy": "676068f305ed8477634bb0a0"
    };

    let testimonials = [];

    it("should return 401 if request is Unauthorized", async () => {
        const response = await request(app)
            .post("/api/v1/testimonial")
            .send(testimonialData)
            .expect(401);

    });
    it("should return 200 if create testimonial success", async () => {
        const token = generateToken("67606218a6670170743c4614", "USER", "user_01");

        const response = await request(app)
            .post("/api/v1/testimonial")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(testimonialData)
            .expect(200);

        testimonials.push(response.body.data);
    });

    it("should return 400 if missing field", async () => {
        const invalidTestimonialData = { ...testimonialData, userName: "" }; // Invalid userName
        const token = generateToken("67606218a6670170743c4614", "USER", "user_01");

        await request(app)
            .post("/api/v1/testimonial")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(invalidTestimonialData)
            .expect(400);
    });

    it("should return 200 if get testimonials successful", async () => {
        await request(app)
            .get(`/api/v1/testimonial`)
            .expect(200);
    });

    it("should return 200 if get testimonial by id successful", async () => {
        await request(app)
            .get(`/api/v1/testimonial/testimonial-id/${testimonials[0]}`)
            .expect(200);
    });
});
