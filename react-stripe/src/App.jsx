import { useState } from "react";
import "./App.css";
import ProductPage from "./components/Product/ProductPage";
import Stripe from "./components/Stripe/Stripe";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {!!show && <Stripe />}
      {!show && <ProductPage setShow={setShow} />}
    </>
  );
}

export default App;
