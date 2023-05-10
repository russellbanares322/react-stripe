import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Checkout/CheckoutForm";
const { VITE_PUBLISHABLE_KEY } = import.meta.env;

const stripePromise = loadStripe(VITE_PUBLISHABLE_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
