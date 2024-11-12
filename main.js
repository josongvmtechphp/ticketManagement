/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");
const path = require("path");
const swaggerDocument = require("./swagger/swagger.js");
const UserRouter = require("./routes/users.js");

const envfile = path.join(__dirname, "./.env");
dotenv.config({ path: envfile });

const app = express();

app.use(bodyParser.json());
app.use("/user", UserRouter);
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen("8001", (err) => {
  if (err) {
    console.log(err);
  }
});
