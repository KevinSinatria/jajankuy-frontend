import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import leMinerale from '../assets/lemineral.png';
import { PlusCircle, MinusCircle } from 'lucide-react';
import Footer from '../components/Footer';

const KeranjangPage = () => {
    const [keranjang, setKeranjang] = useState([
        { id: 1, nama: 'Le Minerale 600ml', harga: 7000, qty: 1, checked: true },
        { id: 2, nama: 'Le Minerale 600ml', harga: 7000, qty: 1, checked: true },
        { id: 3, nama: 'Le Minerale 600ml', harga: 7000, qty: 1, checked: true },
        { id: 4, nama: 'Le Minerale 600ml', harga: 7000, qty: 1, checked: true },
    ]);

    const toggleCheck = (id) => {
        setKeranjang(prev =>
            prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
        );
    };

    const handleDelete = (id) => {
        setKeranjang(prev => prev.filter(item => item.id !== id));
    };

    const handleQtyChange = (id, delta) => {
        setKeranjang(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, qty: Math.max(1, item.qty + delta) }
                    : item
            )
        );
    };

    const totalItem = keranjang.filter(item => item.checked).length;
    const totalHarga = keranjang
        .filter(item => item.checked)
        .reduce((acc, item) => acc + item.harga * item.qty, 0);

    return (
        <div className="flex flex-col min-h-screen text-gray-800" style={{ backgroundImage: 'linear-gradient(to top, #83A24A, #AEC77D, #D7EAAE)', }}>
            <Navbar />
            <main className='flex-1'>
                <div className="container mx-auto px-6 py-10">
                    <div className='mt-24'>
                        <h1 className="text-3xl font-semibold text-center mb-8">Keranjang</h1>

                        <div className="flex flex-col md:flex-row gap-8">
                            
                            {/* daftar produk */}
                            <div className="flex-1 space-y-4 mb-6">
                                {keranjang.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center bg-white shadow-md rounded-xl p-4 gap-4 border border-gray-200"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={item.checked}
                                            onChange={() => toggleCheck(item.id)}
                                            className="accent-blue-500 w-5 h-5"
                                        />
                                        <img src={leMinerale} alt={item.nama} className="w-16 h-16 object-contain" />
                                        <div className="flex-1">
                                            <h2 className="text-lg font-semibold">{item.nama}</h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                <button onClick={() => handleQtyChange(item.id, -1)}>
                                                    <MinusCircle className="text-yellow-500 hover:text-yellow-600 w-5 h-5" />
                                                </button>
                                                <span className="mx-1 text-gray-700 font-medium">Total: {item.qty}</span>
                                                <button onClick={() => handleQtyChange(item.id, 1)}>
                                                    <PlusCircle className="text-yellow-500 hover:text-yellow-600 w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg">
                                                Rp. {(item.harga * item.qty).toLocaleString("id-ID")},00
                                            </p>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="mt-2 bg-yellow-400 text-black px-4 py-1 rounded-md hover:bg-yellow-500"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ringkasan */}
                            <div className="w-full md:w-80 bg-white border border-gray-200 shadow-md rounded-xl p-6 h-fit">
                                <h3 className="text-lg font-semibold mb-4">Ringkasan</h3>
                                <p className="mb-2">
                                    <span className="font-medium">Total:</span> {totalItem} Produk
                                </p>
                                <p className="mb-4 font-bold text-xl text-gray-800">
                                    Rp. {totalHarga.toLocaleString("id-ID")},00
                                </p>
                                <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default KeranjangPage;
