import React, { useState } from 'react';
import leMinerale from '../assets/lemineral.png';
import { PlusCircle, MinusCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const FavoritePage = () => {
    const [favorites, setFavorites] = useState([
        { id: 1, nama: 'Le Minerale 600ml', harga: 7000, qty: 1 },
        { id: 2, nama: 'Le Minerale 600ml', harga: 7000, qty: 1 },
        { id: 3, nama: 'Le Minerale 600ml', harga: 7000, qty: 1 },
        { id: 4, nama: 'Le Minerale 600ml', harga: 7000, qty: 1 },
    ]);

    const handleQtyChange = (id, delta) => {
        setFavorites(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, qty: Math.max(1, item.qty + delta) }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setFavorites(prev => prev.filter(item => item.id !== id));
    };

    const handlePesan = (item) => {
        alert(`Memesan: ${item.nama} x${item.qty}`);
    };

    const handleKeranjang = (item) => {
        alert(`Menambahkan ke keranjang: ${item.nama} x${item.qty}`);
    };

    return (
        <div className="bg-gradient-to-br from-white to-lime-50 min-h-screen">
            <Navbar />
            <div className="px-6 pt-24 pb-10">
                <h1 className="text-3xl font-semibold text-center mt-14">Favorite</h1>

                <div className="space-y-6 mt-14">
                    {favorites.map((item) => (
                        <div key={item.id} className="max-w-5xl mx-auto">
                            <div className="flex gap-4">
                                {/* Kiri: Produk */}
                                <div className="flex flex-1 items-center bg-white shadow-md rounded-xl p-4 border border-gray-200 gap-4">
                                    <img src={leMinerale} alt={item.nama} className="w-14 h-14 object-contain" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.nama}</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button onClick={() => handleQtyChange(item.id, -1)}>
                                                <MinusCircle className="text-yellow-500 hover:text-yellow-600 w-5 h-5" />
                                            </button>
                                            <span className="text-gray-700 font-medium">{item.qty}</span>
                                            <button onClick={() => handleQtyChange(item.id, 1)}>
                                                <PlusCircle className="text-yellow-500 hover:text-yellow-600 w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="mt-2 font-bold">Rp. {(item.harga * item.qty).toLocaleString("id-ID")},00</p>
                                    </div>
                                </div>

                                {/* Kanan: Tombol */}
                                <div className="flex flex-col justify-center bg-white shadow-md rounded-xl p-4 border border-gray-200 space-y-2">
                                    <button
                                        onClick={() => handlePesan(item)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-md w-28"
                                    >
                                        Pesan
                                    </button>
                                    <button
                                        onClick={() => handleKeranjang(item)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-md w-28"
                                    >
                                        Keranjang
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-md w-28"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoritePage;
