import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart as RPieChart, Pie, Cell, } from 'recharts';
import imgOrder from '../../assets/iconOrder.png';
import imgOrder2 from '../../assets/iconOrder2.png';
import imgOrder3 from '../../assets/iconOrder3.png';

const dataLine = [
  { name: 'Minggu 1', pemasukan: 150000, pengeluaran: 120000 },
  { name: 'Minggu 2', pemasukan: 180000, pengeluaran: 140000 },
  { name: 'Minggu 3', pemasukan: 250000, pengeluaran: 190000 },
  { name: 'Minggu 4', pemasukan: 270000, pengeluaran: 200000 },
];

const dataPie = [
  { name: 'Makanan Berat', value: 134 },
  { name: 'Makanan Ringan', value: 210 },
  { name: 'Minuman P&D', value: 50 },
  { name: 'Minuman Kemasan', value: 600 },
  { name: 'ATK', value: 98 },
  { name: 'Sembako', value: 20 },
];

const COLORS = ['#EF4444', '#FACC15', '#22D3EE', '#4ADE80', '#A3A3A3', '#E879F9'];

const renderLabel = ({ percent, value }) => {
  return `${Math.round(percent * 100)}% (${value} item)`;
};

const StatistikPage = () => {
  const [selectedBulan, setSelectedBulan] = useState('Januari - Februari');

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-7 space-y-6">
        <h2 className="text-xl text-center font-bold">Yuk Lihat Statistik Keseluruhan Elemen Jajankuy!</h2>

        {/* statistik */}
        <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Pengeluaran dan Pemasukan</h3>
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={selectedBulan}
              onChange={(e) => setSelectedBulan(e.target.value)}>
              <option>Januari - Februari</option>
              <option>Maret - April</option>
              <option>Mei - Juni</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataLine}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pengeluaran" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="pemasukan" stroke="#A3E635" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* penjualan */}
        <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Penjualan</h3>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>Januari</option>
                <option>Februari</option>
                <option>Maret</option>
              </select>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between bg-red-100 px-3 py-2 rounded">
                <span className="text-red-500 font-semibold">Makanan Berat (20%)</span>
                <span className="font-medium text-gray-700">134 item</span>
              </li>
              <li className="flex items-center justify-between bg-yellow-100 px-3 py-2 rounded">
                <span className="text-yellow-600 font-semibold">Makanan Ringan (10%)</span>
                <span className="font-medium text-gray-700">210 item</span>
              </li>
              <li className="flex items-center justify-between bg-cyan-100 px-3 py-2 rounded">
                <span className="text-cyan-600 font-semibold">Minuman P&D (10%)</span>
                <span className="font-medium text-gray-700">50 item</span>
              </li>
              <li className="flex items-center justify-between bg-green-100 px-3 py-2 rounded">
                <span className="text-green-600 font-semibold">Minuman Kemasan (40%)</span>
                <span className="font-medium text-gray-700">600 item</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 px-3 py-2 rounded">
                <span className="text-gray-700 font-semibold">ATK (25%)</span>
                <span className="font-medium text-gray-700">98 item</span>
              </li>
              <li className="flex items-center justify-between bg-pink-100 px-3 py-2 rounded">
                <span className="text-pink-500 font-semibold">Sembako (5%)</span>
                <span className="font-medium text-gray-700">20 item</span>
              </li>
            </ul>
          </div>

          {/* pie chart */}
          <div>
            <ResponsiveContainer width="100%" height={250}>
              <RPieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="62%"
                  outerRadius={80}
                  dataKey="value"
                  label={renderLabel}
                  labelLine={false}>
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </RPieChart>
            </ResponsiveContainer>
          </div>
        </div>


        {/* jumlah produk, pesanan & pelanggan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#DEEDC05C] rounded-3xl p-4 flex items-center gap-4 h-[180px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <img src={imgOrder3} alt="" />
            <div>
              <p className="text-sm">Jumlah Produk</p>
              <p className="font-bold text-lg">48 Item</p>
            </div>
          </div>
          <div className="bg-[#DEEDC05C] rounded-3xl p-4 flex items-center gap-4 h-[180px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <img src={imgOrder2} alt="" />
            <div>
              <p className="text-sm">Jumlah Pelanggan</p>
              <p className="font-bold text-lg">30 Pelanggan</p>
            </div>
          </div>
          <div className="bg-[#DEEDC05C] rounded-3xl p-4 flex items-center gap-4 h-[180px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <img src={imgOrder} alt="" />
            <div>
              <p className="text-sm">Jumlah Pesanan</p>
              <p className="font-bold text-lg">48 Pesanan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikPage;
