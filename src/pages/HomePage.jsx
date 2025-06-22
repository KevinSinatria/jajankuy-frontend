import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import makananImg from "../assets/makanan.png";
import minumanImg from "../assets/minuman.png";
import camilanImg from "../assets/camilan.png";
import alatTulisImg from "../assets/alat-tulis.png";
import lainnyaImg from "../assets/lainnya.png";
import leMineral from "../assets/minuman(DataDummy).png";
import Card from "../components/Card";

export default function HomePage() {
  const kategori = [
    { name: "Makanan", img: makananImg, width: 50, height: 50 },
    { name: "Minuman", img: minumanImg, width: 50, height: 50 },
    { name: "Camilan", img: camilanImg, width: 50, height: 50 },
    { name: "Alat Tulis", img: alatTulisImg, width: 50, height: 50 },
    { name: "Lainnya", img: lainnyaImg, width: 50, height: 50 },
  ];

  const produk = [
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
    { namaProduk: "Le mineral", img: leMineral, harga: 3000, deks: "Minum ini dijamin ngga bakal kehausan.", stok: 4, beranda: true },
  ];

  // filter produk untuk yang ditampilkan di beranda
  const produkBeranda = produk.filter((p) => p.beranda === true);

  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;
  const totalPages = Math.ceil(produkBeranda.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProduk = produkBeranda.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <main className="w-full min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white text-neutral-600">
        <Navbar />

        {/* iklan */}
        <section className="w-full mx-auto px-10 mt-40">
          <div className="relative w-full h-80 bg-lime-300 rounded-lg flex items-center justify-center text-3xl font-bold text-black">
            <button className="absolute left-4">
              <ChevronLeft size={32} />
            </button>
            IKLAN
            <button className="absolute right-4">
              <ChevronRight size={32} />
            </button>
          </div>
        </section>

        {/* kategori */}
        <section className="w-full max-w-6xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {kategori.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-md flex items-center justify-center bg-[#708A58]">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    style={{ width: `${cat.width}px`, height: `${cat.height}px` }}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 font-medium">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* card produk */}
        <section className="w-full mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
            {currentProduk.map((p, i) => (
              <Card
                key={i}
                namaProduk={p.namaProduk}
                img={p.img}
                harga={p.harga}
                deks={p.deks}
                stok={p.stok}
              />
            ))}
          </div>
        </section>

        {/* pagination */}
        <section className="flex justify-center mt-10 mb-8 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
