import { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "black" },
      "::placeholder": { color: "black" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "black",
    },
  },
};

const CheckoutForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardCvcElement,
        CardExpiryElement,
        CardNumberElement
      ),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          alert("Payment Successful");
          setSuccess(true);
        }
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <CardNumberElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <CardExpiryElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <CardCvcElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Payment successful</h2>
          <h3>Thank you for your patronage</h3>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
