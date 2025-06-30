import React, { useState } from 'react';
import { Camera, CirclePlus, Trash2, ArrowLeft } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import PaginationV2 from '../../components/PaginationV2';
import img from '../../assets/adds.png';

const ads = [
  { title: 'Croissant Ad', img },
  { title: 'Croissant Ad', img },
  { title: 'Croissant Ad', img },
  { title: 'Croissant Ad', img },
];

const KelolaIklanPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFormTambah, setShowFormTambah] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(ads.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAds = ads.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      {/* section iklan */}
      {!showFormTambah && !showFormEdit && (
        <div className="flex-1 p-10">
          <h2 className="text-xl font-bold text-center mb-9">Tambah Iklan Baru</h2>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-3xl p-6 mb-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-36 h-30 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center">
                <Camera className="text-gray-400 text-2xl" />
              </div>
              <div>
                <p className="font-semibold text-[30px]">Iklan Baru</p>
              </div>
            </div>
            <button onClick={() => setShowFormTambah(true)}>
              <CirclePlus className='h-10 w-10 cursor-pointer' />
            </button>
          </div>

          <h2 className="text-xl font-bold text-center mb-6">Kelola Iklan</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {currentAds.map((item, index) => (
              <div key={index} className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-4">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-2" />
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <button onClick={() => setShowFormEdit(true)} className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm shadow">Edit</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <PaginationV2
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}

      {/* form tambah iklan */}
      {showFormTambah && (
        <div className="flex-1 p-10">
          <div className='flex items-center mb-6'>
            <button onClick={() => setShowFormTambah(false)} className='cursor-pointer'>
              <ArrowLeft className='w-10 h-10' />
            </button>
            <div className='flex-1 text-center justify-center'>
              <h2 className="text-xl font-bold text-center">Tambah Iklan Baru</h2>
            </div>
          </div>
          <form className="max-w-4xl mx-auto bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-32 h-32 border border-dashed bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <Camera className="w-10 h-10 text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold mb-1">Upload Gambar Iklan</p>
                <p className="text-xs text-gray-500 mb-2">
                  *Gunakan gambar dengan rasio aspek 4:5:9 dan resolusi minimal 1500 x 300 piksel untuk hasil tampilan terbaik.
                </p>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="file" className="hidden" />
                  <span className="px-3 py-1 border rounded bg-gray-100">Choose File</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium">Nama Iklan</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Masukkan nama iklan"/>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg shadow hover:opacity-90 transition cursor-pointer">
              Kirim
            </button>
          </form>
        </div>
      )}

      {/* form edit iklan */}
      {showFormEdit && (
        <div className="flex-1 p-10">
          <div className='flex items-center mb-6'>
            <button onClick={() => setShowFormEdit(false)} className='cursor-pointer'>
              <ArrowLeft className='w-10 h-10' />
            </button>
            <div className='flex-1 text-center justify-center'>
              <h2 className="text-xl font-bold text-center">Edit Iklan</h2>
            </div>
          </div>
          <form className="max-w-5xl mx-auto bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-8">
            <div className="mb-6">
              <img src={img} alt="Iklan" className="w-full h-40 object-cover rounded-xl mb-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-end">
              <div>
                <label className="block mb-1 text-sm font-medium">Nama Iklan</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Croissant Ad"
                  defaultValue="Croissant Ad" />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Gambar Iklan</label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="file" className="hidden" />
                  <span className="px-3 py-1 border rounded bg-gray-100">Choose File</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 items-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-lg shadow hover:opacity-90 transition w-full">
                Perbarui
              </button>

              <div className="flex justify-end text-sm text-gray-600 items-center gap-2">
                <span>Hapus Iklan ini?</span>
                <Trash2 className="w-4 h-4 text-black cursor-pointer" />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default KelolaIklanPage;
