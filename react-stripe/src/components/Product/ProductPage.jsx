import React from "react";

const ProductPage = ({ setShow }) => {
  return (
    <div className="flex justify-center align-center gap-7">
      <div className="border border-red-400">
        <h3>Towel</h3>
        <button
          onClick={() => setShow(true)}
          className="w-14 h-9 bg-slate-500 text-white"
        >
          Purchase
        </button>
      </div>
      <div className="border border-red-400">
        <h3>Cell Phone</h3>
        <button className="w-16 h-9 bg-slate-500 text-white">Purchase</button>
      </div>
      <div className="border border-red-400">
        <h3>Laptop</h3>
        <button className="w-16 h-9 bg-slate-500 text-white">Purchase</button>
      </div>
    </div>
  );
};

export default ProductPage;
