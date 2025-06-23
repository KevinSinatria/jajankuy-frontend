import React from "react";
import Navbar from "../components/Navbar";
import panahKembali from "../assets/PanahKembali.png";
import lemineral from "../assets/minuman(DataDummy).png"

function HistoryPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white text-neutral-600">
      <Navbar />
      <div className="mt-30 mx-10">
        <div className="flex justify-between">
          <div className="flex">
            <img src={panahKembali} alt="" />
            <h1 className="justify-center items-center flex font-bold text-black ml-1 text-3xl">
              Kembali
            </h1>
          </div>
          <h1 className="mr-50 text-4xl font-bold text-black">
            Riwayat Pesanan
          </h1>
          <span></span>
        </div>

        
        {/* card */}
        <div className="flex justify-center items-center px-4 py-5 my-5">
          <div className="w-full max-w-4xl mx-5 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.01] duration-300 ease-in-out">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
              {/* Gambar Produk */}
              <img
                src={lemineral}
                alt="Gambar Produk"
                className="w-[150px] h-[150px] object-contain rounded-xl"
              />

              {/* Detail Produk */}
              <div className="flex-1 w-full">
                <p className="text-sm text-gray-500 mt-1">600 ml</p>
                <p className="text-sm text-gray-600 mt-2">
                  Air mineral murni dari pegunungan Indonesia. Menyegarkan dan
                  menyehatkan setiap hari.
                </p>

                <p className="text-lg font-medium text-gray-700 mt-6">
                  Jumlah :
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-medium text-gray-700">
                    Harga <span className="ml-3"> :</span>
                  </p>
                  <p className="text-xl font-bold text-green-600 ml-5">
                    Rp700.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default HistoryPage;
