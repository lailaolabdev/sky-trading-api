const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json({ limit: "50mb" })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// Routes
const staffRoutes = require("./staff");
const loginRoutes = require("./auth");
const fileRoutes = require("./file");
const comparisonComponentRoutes = require("./comparisonComponent");
const brokerRoutes = require("./broker");
const comparisonRoutes = require("./brokerComparison");
const articleRoutes = require("./article");
const faqRoutes = require("./faq");
const testimonialRoutes = require("./testimonial");

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

const swaggerOptions = require("../docs");
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Export the app without starting the server
module.exports = app;
