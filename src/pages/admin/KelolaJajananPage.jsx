import React from 'react';
import { CirclePlus, Camera } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import img from '../../assets/minuman(DataDummy).png';

const kategori = [
  {
    nama: 'Makanan Berat',
    img: img,
  },
  {
    nama: 'Minuman Dingin & Hangat',
    img: img,
  },
  {
    nama: 'Makanan Ringan',
    img: img,
  },
  {
    nama: 'Minuman Kemasan',
    img: img,
  },
  {
    nama: 'Sembako',
    img: img,
  },
  {
    nama: 'ATK',
    img: img,
  },
];

const KelolaLaporanPage = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f4f4]">
      <Sidebar />

      {/* kategori */}
      <div className="flex-1 p-10">
        <h2 className="text-xl font-bold text-center mb-4">Tambah Kategori</h2>
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

        {/* daftar kategori */}
        <h2 className="text-xl font-bold text-center mb-6">Kelola Produk Jajankuy</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {kategori.map((item, index) => (
            <div key={index} className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={item.img}
                alt={item.nama}
                className="w-35 h-35 object-cover rounded-lg" />
              <div className="flex flex-col justify-between h-35 flex-1">
                <p className="font-semibold text-[20px]">{item.nama}</p>
                <button className="text-sm bg-gray-900 text-white px-4 py-1 rounded-full shadow cursor-pointer self-start w-full h-9">
                  Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KelolaLaporanPage;
