const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

/// database connection
const { connectMongoDB } = require("./config/database");
connectMongoDB();

/// routes importing
const staffRoutes = require("./routes/staff");

/// routes endpoints
app.get("/", (req, res) => {
    res.send("Server is running...");
});
app.use("/staff", staffRoutes);



const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})