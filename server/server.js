require("dotenv").config();

const express = require("express");
const stripe = require("@stripe/stripe-js")(process.env.CLIENT_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Running on", process.env.PORT);
});
