import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import makananImg from "../assets/makanan.png";
import minumanImg from "../assets/minuman.png";
import camilanImg from "../assets/camilan.png";
import alatTulisImg from "../assets/alat-tulis.png";
import lainnyaImg from "../assets/lainnya.png";

export default function HomePage() {
  const kategori = [
    { name: "Makanan", img: makananImg, width: 50, height: 50 },
    { name: "Minuman", img: minumanImg, width: 50, height: 50 },
    { name: "Camilan", img: camilanImg, width: 50, height: 50 },
    { name: "Alat Tulis", img: alatTulisImg, width: 50, height: 50 },
    { name: "Lainnya", img: lainnyaImg, width: 900, height: 50 },
  ];

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
                    style={{
                      width: `${cat.width}px`,
                      height: `${cat.height}px`,
                    }}
                    className="object-contain"
                  />
                </div>

                <span className="mt-2 font-medium">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
