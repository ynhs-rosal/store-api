require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./database/connect");
const productsRouter = require("./routers/products");

const app = express();
app.use(express.json());
app.use("/api/v1/products", productsRouter);

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
