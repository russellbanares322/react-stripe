require("dotenv").config();

const express = require("express");
const stripe = require("stripe")(process.env.CLIENT_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "PHP",
      description: "Payment",
      payment_method: id,
      confirm: true,
    });

    console.log("Payment", payment);

    res.json({
      message: "Successful",
      success: true,
    });
  } catch (err) {
    console.log("Error", error);
    res.json({
      message: "Failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Running on", process.env.PORT);
});
