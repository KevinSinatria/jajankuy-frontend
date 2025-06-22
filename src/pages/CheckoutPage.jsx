import React from "react";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";

function CheckoutPage() {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white text-neutral-600">
        <Navbar />
        <Checkout/>
      </div>
    </div>
  );
}

export default CheckoutPage;
