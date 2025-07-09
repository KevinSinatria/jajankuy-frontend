import React, { useState } from 'react';
import { CirclePlus, Camera, ArrowLeft, Upload } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import img from '../../assets/minuman(DataDummy).png';
import PaginationV2 from '../../components/PaginationV2';

const kategori = [
  { nama: 'Makanan Berat', img },
  { nama: 'Minuman Dingin & Hangat', img },
  { nama: 'Makanan Ringan', img },
  { nama: 'Minuman Kemasan', img },
  { nama: 'Sembako', img },
  { nama: 'ATK', img },
];

const menu = [
  { nama: 'Cireng', img },
  { nama: 'Batagor', img },
  { nama: 'Seblak', img },
  { nama: 'Mie Ayam', img },
  { nama: 'Nasi Goreng', img },
  { nama: 'Sate', img },
  { nama: 'Es Teh Manis', img },
  { nama: 'Es Jeruk', img },
  { nama: 'Kopi Susu', img },
  { nama: 'Air Mineral', img },
  { nama: 'Susu Coklat', img },
  { nama: 'Susu Putih', img },
  { nama: 'Snack', img },
  { nama: 'Biskuit', img },
  { nama: 'Keripik', img },
  { nama: 'Kacang', img },
  { nama: 'Sereal', img },
  { nama: 'Mie Instan', img },
  { nama: 'Beras', img },
]

const KelolaJajananPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFormMenu, setShowFormMenu] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenu = menu.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(menu.length / itemsPerPage);

  return (
    <div>
      <div className="flex min-h-screen bg-">
        <Sidebar />

        {/* kategori */}
        {!showMenu && (
          <div className="flex-1 px-4 md:px-10 py-8">
            {/* tambah kategori */}
            <h2 className="text-xl font-bold text-center mb-6 md:mb-9">Tambah Kategori</h2>
            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-3xl p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">
                    <Camera />
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-2xl sm:text-[30px]">Kategori Baru</p>
                  <button className="text-sm bg-gray-900 text-white px-4 py-1 mt-2 h-9 w-40 sm:w-50 rounded-full shadow cursor-pointer">
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="self-end md:self-center">
                <CirclePlus className="h-10 w-10 sm:w-14" />
              </div>
            </div>

            {/* kelola produk */}
            <h2 className="text-xl font-bold text-center mb-6">Kelola Produk Jajankuy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {kategori.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 h-auto" >
                  <img
                    src={item.img}
                    alt={item.nama}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between lg:h-28 flex-1 w-full sm:w-auto">
                    <p className="font-semibold text-lg sm:text-xl">{item.nama}</p>
                    <button onClick={() => setShowMenu(true)} className="text-sm bg-gray-900 text-white px-4 py-1 rounded-full shadow cursor-pointer mt-2 w-full sm:w-auto" >
                      Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        )}

        {/* menu */}
        {showMenu && !showFormMenu && !showFormEdit && (
          <div className="flex-1 px-4 md:px-10 py-8">
            <div className='flex items-center mb-6 mt-10 lg:mt-0'>
              <button onClick={() => setShowMenu(false)} className='cursor-pointer'>
                <ArrowLeft className='w-10 h-10' />
              </button>
              <div className='flex-1 text-center justify-center'>
                <h2 className="text-xl font-bold text-center">Tambah Menu</h2>
              </div>
            </div>

            {/* tambah menu */}
            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-3xl p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="w-24 h-24 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">
                    <Camera />
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-2xl sm:text-[30px]">Menu Baru</p>
                  <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
                    <div className="bg-[#67EC94A3] text-[14px] rounded-[9px] h-6 w-8 text-center leading-6">
                      Rp
                    </div>
                    <p className="font-semibold text-xl sm:text-[30px]">0.000,-</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowFormMenu(true)}
                className="cursor-pointer self-end md:self-center" >
                <CirclePlus className="h-10 w-10 sm:w-14" />
              </button>
            </div>

            {/* daftar produk */}
            <h2 className="text-xl font-bold text-center mb-6">Kelola Produk Jajankuy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMenu.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4" >
                  <img
                    src={item.img}
                    alt={item.nama}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between flex-1 w-full sm:w-auto">
                    <p className="font-semibold text-lg sm:text-xl">{item.nama}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="bg-[#67EC94A3] text-[14px] rounded-[9px] h-6 w-8 text-center leading-6">
                        Rp
                      </div>
                      <p className="font-semibold text-xl sm:text-[30px]">0.000,-</p>
                    </div>
                    <button
                      onClick={() => setShowFormEdit(true)}
                      className="text-sm bg-gray-900 text-white px-4 mt-4 py-1 rounded-full shadow cursor-pointer w-full sm:w-36 h-10" >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination */}
            <div className="mt-8">
              <PaginationV2
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)} />
            </div>
          </div>
        )}

        {/* form tambah menu */}
        {showFormMenu && !showFormEdit && (
          <div className='flex-1 justify-center items-center'>
            <div className='p-4 sm:p-10'>
              <div className='flex items-center mb-6 mt-10 lg:mt-0'>
                <button onClick={() => setShowFormMenu(false)} className='cursor-pointer'>
                  <ArrowLeft className='w-10 h-10' />
                </button>
                <div className='flex-1 text-center justify-center'>
                  <h2 className="text-md lg:text-xl font-bold text-center">Tambah Menu Jajanan Yuk!</h2>
                </div>
              </div>

              <div className="w-full mx-auto bg-white p-6 sm:p-10 lg:p-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                {/* gambar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 border rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Upload Gambar Jajanan</p>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 mt-1">
                      <input type="file" className="hidden" />
                      <span className="px-3 py-1 border rounded bg-gray-100">Choose File</span>
                      <Upload className="w-4 h-4" />
                    </label>
                  </div>
                </div>

                {/* nama jajanan */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Nama Jajanan</label>
                  <input
                    type="text"
                    placeholder="Cireng Misalkan"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200" />
                </div>

                {/* harga jajanan */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Harga Jajanan</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-2 bg-green-200 text-sm bottom-6 w-6 h-4.5 text-center rounded text-[12px]">
                      Rp
                    </div>
                    <input
                      type="number"
                      placeholder="0,-"
                      className="w-full pl-10 border rounded-lg px-3 py-2 text-xl font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black transition duration-200" />
                  </div>
                </div>

                {/* varian jajanan */}
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

        {/* form edit menu */}
        {showFormEdit && (
          <div className='flex-1 justify-center items-center'>
            <div className='p-4 sm:p-10'>
              <div className='flex items-center mb-6 mt-10 lg:mt-0'>
                <button onClick={() => setShowFormEdit(false)} className='cursor-pointer'>
                  <ArrowLeft className='w-10 h-10' />
                </button>
                <div className='flex-1 text-center justify-center'>
                  <h2 className="text-md lg:text-xl font-bold text-center">Edit Menu Jajanan Yuk!</h2>
                </div>
              </div>

              <div className="w-full mx-auto bg-white p-6 sm:p-10 lg:p-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                {/* upload*/}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 border rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={img} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Upload Gambar Jajanan</p>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 mt-1">
                      <input type="file" className="hidden" />
                      <span className="px-3 py-1 border rounded bg-gray-100">Choose File</span>
                      <Upload className="w-4 h-4" />
                    </label>
                  </div>
                </div>

                {/* kategori */}
                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium">Kategori Jajanan</label>
                  <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200 cursor-pointer">
                    <option value="">Pilih Kategori</option>
                    <option value="sembako">Sembako</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
                  </select>
                </div>

                {/* nama jajanan */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Nama Jajanan</label>
                  <input
                    type="text"
                    placeholder='Nama Jajanan'
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200" />
                </div>

                {/* harga */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Harga Jajanan</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-2 bg-green-200 text-sm bottom-6 w-6 h-4.5 text-center rounded text-[12px]">
                      Rp
                    </div>
                    <input
                      type="number"
                      placeholder="0,-"
                      className="w-full pl-10 border rounded-lg px-3 py-2 text-lg sm:text-xl font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black transition duration-200" />
                  </div>
                </div>

                {/* varian */}
                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium">Varian Jajanan</label>
                  <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200 cursor-pointer">
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

export default KelolaJajananPage;
