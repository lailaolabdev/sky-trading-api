const app = require("./routes");

const { connectMongoDB } = require("./config/database");
connectMongoDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
