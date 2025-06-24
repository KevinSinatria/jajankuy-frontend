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
        <div className="min-h-screen bg-white text-neutral-800">
            <Navbar />

            {/* kontainer produk utama */}
            <section className="max-w-7xl mx-auto px-4 pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="flex justify-center">
                        <img
                            src={productImage}
                            alt="Le Minerale"
                            className="w-64 h-auto object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-semibold">Le Minerale</h2>
                            <p className="text-xl">Rp. 7.000,00</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className="text-lg font-semibold">600 ml</p>
                            <p className="text-md">Stok : 20</p>
                        </div>
                        <h4 className="mt-4 font-semibold">Deskripsi :</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Minuman segar yang cocok untuk dikonsumsi sehari-hari. Terbuat dari sumber air pegunungan alami.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.2)] p-8 w-full max-w-sm mx-auto lg:mx-0 flex flex-col gap-4">
                        <div className="flex items-center justify-between px-4 py-4 rounded-md">
                            <button onClick={decrement} className="text-gray-600 hover:text-black">
                                <CircleMinus size={30} />
                            </button>
                            <span className="text-lg font-medium">{qty}</span>
                            <button onClick={increment} className="text-gray-600 hover:text-black">
                                <CirclePlus size={30} />
                            </button>
                        </div>

                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer font-semibold py-2 rounded-lg shadow">
                            Pesan
                        </button>
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white cursor-pointer font-semibold py-2 rounded-lg shadow">
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </section>

            {/* produk serupa lainnya */}
            <section className="max-w-7xl mx-auto px-4 mt-20 mb-10">
                <h3 className="text-xl font-semibold mb-6">Produk Serupa Lainnya</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            </section>

            {/* pagination produk serupa lainnya */}
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
