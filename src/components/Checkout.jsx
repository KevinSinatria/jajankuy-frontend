import React from "react";
import lemineral from "../assets/minuman(DataDummy).png";
import CheckoutProses from "./CheckoutProses";

function Checkout(props) {
  return (
    <div>
      <CheckoutProses/>
      <div className="flex items-center justify-center mt-30">
        <div className="shadow-[1px_4px_6px_12px_rgba(0,_0,_0,_0.1)] w-[917px] rounded-2xl">
          <div className="flex m-10">
            <img src={lemineral} alt="gambar produk" className="h-[198px]" />
            <div className="">
              <h1 className="text-3xl">Le Mineral</h1>
              <h1 className="text-md">600 ml</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
