import React from 'react';
import Navbar from '../components/Navbar';
import { CirclePlus, CircleMinus } from 'lucide-react';
import productImage from '../assets/lemineral.png';

const DetailsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br bg-white text-neutral-800">
            <Navbar />

            {/* kontainer produk */}
            <section className="max-w-7xl mx-auto px-4 pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* image produk */}
                    <div className="flex justify-center">
                        <img
                            src={productImage}
                            alt="Le Minerale"
                            className="w-64 h-auto object-contain"
                        />
                    </div>

                    {/* info produk */}
                    <div className="flex flex-col ">
                        <div className='flex flex-row items-center justify-between'>
                            <h2 className="text-2xl font-semibold">Le Minerale</h2>
                            <p className="text-xl">Rp. 7000,00</p>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <p className="text-lg font-semibold ">600 ml</p>
                            <p className="text-md">Stok : 20</p>
                        </div>
                        <h4 className="mt-4 font-semibold">Deskripsi :</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget
                            nullam non. Quis hendrerit dolor magna eget est.
                        </p>
                    </div>

                    {/* kontainer button minus tambah */}
                    <div className="bg-white rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.3)] p-8 w-full max-w-sm mx-auto lg:mx-0 flex flex-col gap-4">
                        {/* Jumlah */}
                        <div className="flex items-center justify-between px-4 py-5 rounded-md">
                            <button>
                                <CircleMinus size={30} />
                            </button>
                            <span className="text-lg font-medium">1</span>
                            <button>
                                <CirclePlus size={30} />
                            </button>
                        </div>

                        {/* aksi */}
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow">
                            Pesan
                        </button>
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg shadow">
                            Keranjang
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsPage;
