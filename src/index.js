const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(cors());
app.use(express.json());

/// database connection
const { connectMongoDB } = require("./config/database");
connectMongoDB();


/// routes importing
const staffRoutes = require("./routes/staff");
const loginRoutes = require("./routes/auth");
const fileRoutes = require("./routes/file");
const comparisonComponentRoutes = require("./routes/comparisonComponent");
const brokerRoutes = require("./routes/broker");
const comparisonRoutes = require("./routes/brokerComparison");
const articleRoutes = require("./routes/article");
const faqRoutes = require("./routes/faq");
const testimonialRoutes = require("./routes/testimonial");

/// routes endpoints
app.get("/", (req, res) => {
    res.send("Sky-Trading-API Server is running...");
});
app.use("/api/v1/staff", staffRoutes);
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/file", fileRoutes);
app.use("/api/v1/comparison-component", comparisonComponentRoutes);
app.use("/api/v1/broker", brokerRoutes);
app.use("/api/v1/broker-comparison", comparisonRoutes);
app.use("/api/v1/article", articleRoutes);
app.use("/api/v1/faq", faqRoutes);
app.use("/api/v1/testimonial", testimonialRoutes);

const swaggerOptions = require("./docs")

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})