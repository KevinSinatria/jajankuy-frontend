import React from "react";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";

function CheckoutPage() {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col" style={{ backgroundImage: 'linear-gradient(to top, #83A24A, #AEC77D, #D7EAAE)', }}>
        <Navbar />
        <Checkout/>
      </div>
    </div>
  );
}

export default CheckoutPage;
