import React, { useState } from "react";
import Navbar from "../components/Navbar";
import panahKembali from "../assets/PanahKembali.png";
import lemineral from "../assets/minuman(DataDummy).png";

function HistoryPage() {
  const [pesanan, setPesanan] = useState([
    {
      tanggal: "26/06/2008",
      produk: [
        {
          namaProduk: "Le Mineral",
          deks: "Lorem ipsum dolor sit amet consectetur...",
          harga: 9000,
          total: 2,
        },
      ],
    },
    {
      tanggal: "27/06/2008",
      produk: [
        {
          namaProduk: "Le Mineral",
          deks: "Lorem ipsum dolor sit amet consectetur...",
          harga: 9000,
          total: 2,
        },
        {
          namaProduk: "Aqua",
          deks: "Minuman segar dan sehat...",
          harga: 8000,
          total: 1,
        },
      ],
    },
    {
      tanggal: "27/06/2008",
      produk: [
        {
          namaProduk: "Le Mineral",
          deks: "Lorem ipsum dolor sit amet consectetur...",
          harga: 9000,
          total: 2,
        },
        {
          namaProduk: "Aqua",
          deks: "Minuman segar dan sehat...",
          harga: 8000,
          total: 1,
        },
        {
          namaProduk: "Aqua",
          deks: "Minuman segar dan sehat...",
          harga: 8000,
          total: 1,
        },
        {
          namaProduk: "Aqua",
          deks: "Minuman segar dan sehat...",
          harga: 8000,
          total: 1,
        },
      ],
    },
    {
      tanggal : "24/04/2008",
      produk:[
        {
          namaProduk: "yuhu",
          deks: "ahahahaha",
          harga: 8000,
          total: 1,
        }
      ]
    }
  ]);

  return (
    <div className="w-full min-h-screen flex flex-col" style={{ backgroundImage: 'linear-gradient(to top, #83A24A, #AEC77D, #D7EAAE)', }}>
      <Navbar />

      <div className="mt-30 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center">
            <img
              src={panahKembali}
              alt="Kembali"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <h1 className="ml-2 font-bold text-black text-2xl md:text-3xl">
              Kembali
            </h1>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-black text-center">
            Riwayat Pesanan
          </h1>
          <div className="hidden md:block w-10" />
        </div>

        {pesanan.map((order, index) => {
          const isSatuan = order.produk.length === 1;
          const totalHarga = order.produk.reduce(
            (sum, p) => sum + p.harga * p.total,
            0
          );

          return isSatuan ? (
            // Card Satuan
            <div key={index} className="flex justify-center items-center py-2">
              <div className="w-full max-w-7xl bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.01] duration-300 ease-in-out">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
                  {/* Gambar Produk */}
                  <img
                    src={lemineral}
                    alt="Gambar Produk"
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-xl"
                  />

                  {/* Detail Produk */}
                  <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-6">
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row justify-between w-full px-3 py-1 rounded-md">
                        <h1 className="text-xl sm:text-2xl text-black font-semibold">
                          {order.produk[0].namaProduk}
                        </h1>
                        <h1 className="text-xl sm:text-2xl text-black">
                          Rp.{" "}
                          {(
                            order.produk[0].harga * order.produk[0].total
                          ).toLocaleString("id-ID")}
                        </h1>
                      </div>
                      <p className="text-base sm:text-lg font-medium text-gray-700 px-3 mt-2 text-justify">
                        {order.produk[0].deks}
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-700 px-3 mt-4">
                        Total : {order.produk[0].total}
                      </p>
                      <div className="flex justify-between w-full px-3 py-1 rounded-md">
                        <span />
                        <h1 className="text-sm text-black font-bold">
                          Date : {order.tanggal}
                        </h1>
                      </div>
                    </div>

                    {/* Tombol */}
                    <div className="flex flex-col gap-2 w-full sm:w-auto md:w-auto sm:min-w-[150px] justify-center items-center p-4 sm:p-6 rounded-2xl">
                      <a
                        href="/keranjang"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition duration-300 w-full text-center"
                      >
                        Pesan Lagi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Card Banyak Produk
            <div key={index} className="flex justify-center items-center py-5">
              <div className="w-full max-w-7xl bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.01] duration-300 ease-in-out p-5">
                <div className="flex md:flex-col flex-col-reverse">
                  <h1 className="text-xl md:text-2xl font-semibold flex justify-end px-5">
                    Rp. {totalHarga.toLocaleString("id-ID")}
                  </h1>
                  <div className="flex flex-col max-w-30 md:mx-20 mx-auto my-5">
                    <h1 className="text-3xl font-semibold flex justify-center items-center">
                      {order.produk.length}
                    </h1>
                    <h1 className="text-2xl font-semibold flex justify-center items-center">
                      Pesanan
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end px-5 font-semibold ">
                  <h1 className="text-sm text-black font-bold my-5">
                    Date : {order.tanggal}
                  </h1>
                  <div className="text-center m-auto w-full">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition duration-300 w-full max-w-100">
                      Check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default HistoryPage;
