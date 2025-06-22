import React from "react";
import lemineral from "../assets/minuman(DataDummy).png";
import CheckoutProses from "./CheckoutProses";
import { useNavigate } from "react-router";
import Footer from "./Footer";

function Checkout(props) {

  const navigate = useNavigate();
  function handleBatal(){
    navigate("/");
  }
  return (
    <div className="pt-40">
      <CheckoutProses />

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

              <p className="text-lg font-medium text-gray-700 mt-6">Jumlah :</p>
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

      {/* card Dummy */}
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

              <p className="text-lg font-medium text-gray-700 mt-6">Jumlah :</p>
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

      {/* tombol tampilkan semua */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-[#B4DC62] text-white font-semibold rounded-xl shadow hover:[#B4DC62] hover:scale-[1.01] transition duration-300">
          Lihat Semua Produk
        </button>
      </div>

      <div className="px-30 py-10">
        {/* Atas Nama */}
        <div>
          <label className=" text-2xl font-light mb-2">Atas Nama</label>
          <div className="bg-white border rounded-xl shadow p-4 text-lg font-semibold">
            Foralgo_Official
          </div>
        </div>

        {/* Catatan */}
        <div>
          <label className="block text-2xl font-light mb-2">Catatan</label>
          <textarea
            className="w-full h-40 p-4 rounded-xl border shadow resize-none focus:outline-none"
            placeholder="Tulis catatan di sini... (bila ada)"
          />
        </div>

        {/* Total */}
        <div className="bg-gray-200 rounded-xl shadow p-6 text-lg mt-10">
          <div className="flex justify-between mb-2">
            <span className="font-light text-2xl">Total :</span>
            <span className="font-semibold">Rp. 7.000,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">+ Rp. 3.000,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">- Rp. 3.000,00</span>
          </div>
          <div className="flex justify-between mb-2 mt-4">
            <span className="font-light text-2xl">SubTotal :</span>
            <span className="font-semibold">Rp. 7.000,00</span>
          </div>
        </div>
      </div>

      {/* tombol pesan */}
      <div className="flex justify-center">
        <button className="w-full max-w-[700px] px-6 py-3 bg-[#FFB823] border-2 text-black font-semibold rounded-full shadow hover:bg-[#B4DC62] hover:scale-[1.01] transition duration-300">
          Pesan
        </button>
      </div>
      {/* tombol batal */}
      <div className="flex justify-center mb-50">
        <button onClick={handleBatal} className="w-full max-w-[700px] px-6 py-3 bg-[#FFB823] border-2 mt-5 text-black font-semibold rounded-full shadow hover:bg-[#B4DC62] hover:scale-[1.01] transition duration-300">
          Batal
        </button>
      </div>

      <Footer/>
    </div>
  );
}

export default Checkout;
