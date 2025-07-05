import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import makananImg from "../assets/kategori1.png";
import minumanImg from "../assets/kategori2.png";
import camilanImg from "../assets/kategori3.png";
import alatTulisImg from "../assets/kategori4.png";
import lainnyaImg from "../assets/kategori5.png";
import leMineral from "../assets/minuman(DataDummy).png";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { AuthProvider } from "../contexts/AuthContext";
import iklan from "../assets/iklan.png";
import NavbarProduct from "../components/NavbarProduct";

export default function HomePage() {

  // const {user} = useContext(AuthProvider);

  const kategori = [
    { name: "Makanan", img: makananImg, width: 50, height: 50 },
    { name: "Minuman", img: minumanImg, width: 50, height: 50 },
    { name: "Camilan", img: camilanImg, width: 50, height: 50 },
    { name: "Alat Tulis", img: alatTulisImg, width: 50, height: 50 },
    { name: "Lainnya", img: lainnyaImg, width: 50, height: 50 },
  ];

  const produk = Array.from({ length: 200 }, (_, i) => ({
    namaProduk: "Le mineral",
    img: leMineral,
    harga: 3000,
    deks: "Minum ini dijamin ngga bakal kehausan.",
    stok: 4,
    beranda: true,
  }));

  const produkBeranda = produk.filter((p) => p.beranda);

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
      <main className="w-full min-h-screen flex flex-col text-neutral-600" style={{ backgroundImage: 'linear-gradient(to top, #83A24A, #AEC77D, #D7EAAE)', }}>
        <NavbarProduct />

        {/* iklan */}
        <section className="w-full mx-auto px-10 mt-40">
          <div className="relative w-full h-[402px] border rounded-lg flex items-center justify-center text-3xl font-bold text-black bg-cover bg-center" style={{ backgroundImage: `url(${iklan})` }}>
            <button className="absolute left-4 cursor-pointer">
              <ChevronLeft size={32} />
            </button>
            <img src="" alt="" />
            <button className="absolute right-4 cursor-pointer">
              <ChevronRight size={32} />
            </button>
          </div>
        </section>

        {/* kategori */}
        <section className="w-full max-w-6xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {kategori.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="h-20 rounded-full overflow-hidden shadow-md cursor-pointer flex items-center justify-center bg-[#B4DC62]">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="mt-2 font-medium text-black">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* produk */}
        <section className="w-full mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 place-items-center">
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </main>

      <Footer />
    </div>
  );
}
