const request = require("supertest");
const app = require("../routes");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { generateToken } = require("../utils/generateTokens");

describe("Test Staff Routes", () => {
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

    const staffData = {
        "userName": "JohnDoe",
        "profileImage": "profile.jpg",
        "email": "Xp0lH@example.com",
        "password": "password123",
        "createdBy": "676060f30d23521002502ac9"
    };

    let staffs = [];

    it("should return 401 if question is Unauthorized", async () => {
        const response = await request(app)
            .post("/api/v1/staff")
            .send(staffData)
            .expect(401);
    });
    it("should return 200 if create staff success", async () => {
        const token = generateToken("67606218a6670170743c4614", "ADMIN", "admin_01");

        const response = await request(app)
            .post("/api/v1/staff")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(staffData)
            .expect(201);

        
        staffs.push(response.body.data);
    });

    it("should return 400 if missing field", async () => {
        const invalidStaffData = { ...staffData, email: "" }; // Invalid email
        const token = generateToken("67606218a6670170743c4614", "ADMIN", "admin_01");

        await request(app)
            .post("/api/v1/staff")
            .set("authorization", `Bearer ${token.accessToken}`)
            .send(invalidStaffData)
            .expect(400);
    });

    it("should return 200 if get staffs successful", async () => {
        const token = generateToken("67606218a6670170743c4614", "ADMIN", "admin_01");
        await request(app)
            .get(`/api/v1/staff`)
            .set("authorization", `Bearer ${token.accessToken}`)
            .expect(200);
    });
    

    it("should return 200 if get staff by id successful", async () => {
        const token = generateToken("67606218a6670170743c4614", "ADMIN", "admin_01");
        await request(app)
            .get(`/api/v1/staff/staff-id/${staffs[0]}`)
            .set("authorization", `Bearer ${token.accessToken}`)
            .expect(200);
    });
});
