import React from "react";
import ceklis from "../assets/yesLogo.png"
import chart from "../assets/cartLogo.png"
import order from "../assets/orderLogo.png"

function CheckoutProses() {
  return (
    <div>
      {/* buletan proses */}
      <div className="flex items-center justify-center mt-40 ">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-lime-400 border-4 border-black flex items-center justify-center relative">
            <img src={ceklis} alt="YesLogo" />
          </div>
        </div>

        <div className="h-1 w-16 bg-black mx-3"></div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center">
            <img src={chart} alt="orderLogo" />
          </div>
        </div>

        <div className="h-1 w-16 bg-black mx-3"></div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center">
            <img src={order} alt="chartLogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProses;
