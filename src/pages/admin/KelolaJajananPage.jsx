import React, { useState } from 'react';
import { CirclePlus, Camera, ArrowLeft, Upload } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import img from '../../assets/minuman(DataDummy).png';

const kategori = [
  { nama: 'Makanan Berat', img },
  { nama: 'Minuman Dingin & Hangat', img },
  { nama: 'Makanan Ringan', img },
  { nama: 'Minuman Kemasan', img },
  { nama: 'Sembako', img },
  { nama: 'ATK', img },
];

const KelolaLaporanPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFormMenu, setShowFormMenu] = useState(false);

  return (
    <div>
      <div className="flex min-h-screen bg-">
        <Sidebar />

        {/* kategori */}
        {!showMenu && (
          <div className="flex-1 p-10">
            <h2 className="text-xl font-bold text-center mb-9">Tambah Kategori</h2>
            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-3xl p-4 mb-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-35 h-35 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-2xl"><Camera /></span>
                </div>
                <div>
                  <p className="font-semibold text-[30px]">Kategori Baru</p>
                  <button className="text-sm bg-gray-900 text-white px-4 py-1 mt-2 h-9 w-50 rounded-full shadow cursor-pointer">
                    Selengkapnya
                  </button>
                </div>
              </div>
              <CirclePlus className='h-10 w-20' />
            </div>

            <h2 className="text-xl font-bold text-center mb-6">Kelola Produk Jajankuy</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {kategori.map((item, index) => (
                <div key={index} className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-4 flex items-center gap-4">
                  <img src={item.img} alt={item.nama} className="w-35 h-35 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between h-35 flex-1">
                    <p className="font-semibold text-[20px]">{item.nama}</p>
                    <button onClick={() => setShowMenu(true)} className="text-sm bg-gray-900 text-white px-4 py-1 rounded-full shadow cursor-pointer self-start w-full h-9">
                      Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* menu */}
        {showMenu && !showFormMenu && (
          <div className="flex-1 p-10">
            <div className='flex items-center mb-6'>
              <button onClick={() => setShowMenu(false)} className='cursor-pointer'>
                <ArrowLeft className='w-10 h-10' />
              </button>
              <div className='flex-1 text-center justify-center'>
                <h2 className="text-xl font-bold text-center">Tambah Menu</h2>
              </div>
            </div>
            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-3xl p-4 mb-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-35 h-35 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-2xl"><Camera /></span>
                </div>
                <div>
                  <p className="font-semibold text-[30px]">Menu Baru</p>
                  <div className='flex items-center gap-1 mt-2'>
                    <div className='bg-[#67EC94A3] mb-4 text-[14px] rounded-[9px] h-6 w-7 text-center'>Rp</div>
                    <p className='font-semibold text-[30px]'>0.000,-</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowFormMenu(true)} className='cursor-pointer'>
                <CirclePlus className='h-10 w-20' />
              </button>
            </div>

            <h2 className="text-xl font-bold text-center mb-6">Kelola Produk Jajankuy</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {kategori.map((item, index) => (
                <div key={index} className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-4 flex items-center gap-4">
                  <img src={item.img} alt={item.nama} className="w-35 h-35 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between flex-1">
                    <p className="font-semibold text-[20px]">{item.nama}</p>
                    <div className='flex items-center gap-1'>
                      <div className='bg-[#67EC94A3] mb-4 text-[14px] rounded-[9px] h-6 w-7 text-center'>Rp</div>
                      <p className='font-semibold text-[30px]'>0.000,-</p>
                    </div>
                    <button className="text-sm bg-gray-900 text-white px-4 mt-4 py-1 rounded-full shadow cursor-pointer self-start w-34 h-10">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* form tambah menu */}
        {showFormMenu && (
          <div className='flex-1 justify-center items-center'>
            <div className='p-10'>
              <div className='flex items-center mb-6'>
                <button onClick={() => setShowFormMenu(false)} className='cursor-pointer'>
                  <ArrowLeft className='w-10 h-10' />
                </button>
                <div className='flex-1 text-center justify-center'>
                  <h2 className="text-xl font-bold text-center">Tambah Menu Jajanan Yuk!</h2>
                </div>
              </div>
              <div className="w-full mx-auto bg-white p-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-32 h-32 border rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Camera className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium">Upload Gambar Jajanan</p>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 mt-1">
                      <input type="file" className="hidden" />
                      <span className="px-3 py-1 border rounded bg-gray-100">Choose File</span>
                      <Upload className="w-4 h-4" />
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Nama Jajanan</label>
                  <input
                    type="text"
                    placeholder="Cireng Misalkan"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Harga Jajanan</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-2 bg-green-200 text-sm bottom-6 w-6 h-4.4 text-center rounded text-[12px]">
                      Rp
                    </div>
                    <input
                      type="number"
                      placeholder="0,-"
                      className="w-full pl-10 border rounded-lg px-3 py-2 text-xl font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium">Varian Jajanan</label>
                  <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200">
                    <option value="">Pilih Varian</option>
                    <option value="pedas">Pedas</option>
                    <option value="manis">Manis</option>
                    <option value="original">Original</option>
                  </select>
                </div>

                <button className="w-full bg-black text-white py-2 rounded-lg shadow hover:opacity-90 transition">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KelolaLaporanPage;
