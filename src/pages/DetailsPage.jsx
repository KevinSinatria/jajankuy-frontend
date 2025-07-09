import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { CirclePlus, CircleMinus } from 'lucide-react';
import productImage from '../assets/lemineral.png';
import leMinerale from '../assets/minuman(DataDummy).png';
import Footer from '../components/Footer';

const produkSerupa = Array.from({ length: 17 }, () => ({
    namaProduk: "Le mineral",
    img: leMinerale,
    harga: 3000,
    deks: "Minum ini dijamin ngga bakal kehausan.",
    stok: 4,
}));

const DetailsPage = () => {
    const [qty, setQty] = useState(1);
    const increment = () => setQty(prev => prev + 1);
    const decrement = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

    // pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(produkSerupa.length / itemsPerPage);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentProdukSerupa = produkSerupa.slice(indexOfFirst, indexOfLast);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="min-h-screen text-neutral-800 bg-gradient-to-t from-[#83A24A] via-[#AEC77D] to-[#D7EAAE]">
            <Navbar />

            {/* kontainer produk utama */}
            <section className="max-w-7xl mx-auto px-4 pt-32 md:pt-40">
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-center p-6 border rounded-2xl bg-gradient-to-t from-[#CCF971] via-[#E2FFA6] to-white">

                    {/* Gambar */}
                    <div className="flex justify-center">
                        <img
                            src={productImage}
                            alt="Le Minerale"
                            className="w-52 sm:w-64 h-auto object-contain"
                        />
                    </div>

                    {/* Info Produk */}
                    <div className="flex flex-col gap-2 w-full">
                        <div className='flex justify-between items-center flex-wrap gap-2'>
                            <h2 className="text-xl sm:text-2xl font-semibold">Le Minerale</h2>
                            <p className="text-lg sm:text-xl">Rp. 7.000,00</p>
                        </div>
                        <div className='flex justify-between items-center flex-wrap gap-2'>
                            <p className="text-md sm:text-lg font-semibold">600 ml</p>
                            <p className="text-sm sm:text-md">Stok : 20</p>
                        </div>
                        <h4 className="mt-4 font-semibold text-md sm:text-lg">Deskripsi :</h4>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Minuman segar yang cocok untuk dikonsumsi sehari-hari. Terbuat dari sumber air pegunungan alami.
                        </p>
                    </div>

                    {/* Kontrol & Tombol */}
                    <div className="rounded-xl shadow-md p-6 w-full max-w-sm mx-auto lg:mx-0 flex flex-col gap-4 border bg-gradient-to-t from-[#E2FFA6] to-white">
                        <div className="flex items-center justify-between px-4 py-4 rounded-md">
                            <button onClick={decrement} className="text-gray-600 hover:text-black">
                                <CircleMinus size={28} />
                            </button>
                            <span className="text-lg font-medium">{qty}</span>
                            <button onClick={increment} className="text-gray-600 hover:text-black">
                                <CirclePlus size={28} />
                            </button>
                        </div>

                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow transition">
                            Pesan
                        </button>
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg shadow transition">
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </section>

            {/* produk serupa lainnya */}
            <section className="max-w-7xl mx-auto px-4 mt-20 mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Produk Serupa Lainnya</h3>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {currentProdukSerupa.map((p, i) => (
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
                </div>
            </section>

            {/* pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
            />

            <Footer />
        </div>
    );
};

export default DetailsPage;
