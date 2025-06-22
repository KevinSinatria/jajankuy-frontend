import React from "react";
import ceklis from "../assets/yesLogo.png";
import chart from "../assets/cartLogo.png";
import order from "../assets/orderLogo.png";

function CheckoutProses() {
  return (
    <div className="px-4 py-10">
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-nowrap">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-lime-400 border-2 sm:border-4 border-black flex items-center justify-center">
            <img src={ceklis} alt="Ceklis Logo" className="w-6 sm:w-8 md:w-10" />
          </div>
          <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-center">Sukses</p>
        </div>

        {/* Line */}
        <div className="h-1 w-8 sm:w-10 md:w-14 bg-black" />

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 sm:border-4 border-black flex items-center justify-center">
            <img src={chart} alt="Cart Logo" className="w-6 sm:w-8 md:w-10" />
          </div>
          <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-center">Keranjang</p>
        </div>

        {/* Line */}
        <div className="h-1 w-8 sm:w-10 md:w-14 bg-black" />

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 sm:border-4 border-black flex items-center justify-center">
            <img src={order} alt="Order Logo" className="w-6 sm:w-8 md:w-10" />
          </div>
          <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-center">Pesanan</p>
        </div>

      </div>
    </div>
  );
}

export default CheckoutProses;
