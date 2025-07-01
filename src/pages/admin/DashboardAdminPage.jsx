import React from 'react';
import Sidebar from '../../components/Sidebar';
import {
  FileText,
  XCircle,
  ShoppingBag,
  PieChart,
  ArrowUpRight,
} from 'lucide-react';
import bg from '../../assets/PotoProfile.jpg';
import banner from '../../assets/PotoProfile.jpg';
import imgOrder from '../../assets/iconOrder.png';
import imgOrder2 from '../../assets/iconOrder2.png';
import imgIklan from '../../assets/adds.png';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Pie, PieChart as RPieChart, Cell } from 'recharts';

const dataPenjualan = [
  { name: 'Minggu 1', total: 150000 },
  { name: 'Minggu 2', total: 220000 },
  { name: 'Minggu 3', total: 280000 },
  { name: 'Minggu 4', total: 260000 },
];

const dataPie = [
  { name: 'Makanan Berat', value: 60 },
  { name: 'Minuman', value: 40 },
  { name: 'Cemilan', value: 20 },
  { name: 'Kue', value: 10 },
  { name: 'Dessert', value: 5 },
];

const COLORS = ['#4ade80', '#facc15', '#60a5fa', '#f87171', '#a78bfa'];

const renderLabel = ({ name, percent, value }) => {
  return `${Math.round(percent * 100)}% (${value} item)`;
};

const DashboardAdminPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        {/* profile */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <div
            className="h-24 bg-cover bg-center rounded-t-2xl rounded-b-2xl"
            style={{ backgroundImage: `url(${banner})` }}>
          </div>
          <div className="flex items-center justify-between px-8 -mt-12 pb-4">
            <div className="w-38 h-38 rounded-full border-4 border-white overflow-hidden">
              <img
                src={bg}
                alt="profile"
                className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1 ml-4 flex flex-col justify-center mt-15">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">
                    Hi, <span className="font-bold">Wonyoung</span>. Welcome back to Jajankuy Admin!
                  </h2>
                </div>
                <p className="text-sm text-gray-500 whitespace-nowrap">
                  Role <span className="font-bold">(Admin 1)</span>
                </p>
              </div>
              <div className="flex justify-end mt-8">
                <a href="profile-admin" className="text-sm text-gray-700 hover:underline">
                  Lihat Profil ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* statistik pemasukan & pengeluaran */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4">
            <h3 className="text-lg font-semibold mb-4 flex justify-between">Pemasukan dan Pengeluaran <a href="statistik"><ArrowUpRight className='cursor-pointer' /></a></h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={dataPenjualan}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#4ade80" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* statistik jumlah penlanggan & pesanan */}
          <div className="space-y-4">
            <div className="bg-[#DEEDC05C] rounded-3xl p-4 flex items-center gap-4 h-[154px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src={imgOrder} alt="" />
              <div>
                <p className="text-sm">Jumlah Pesanan</p>
                <p className="font-bold text-lg">48 pesanan</p>
              </div>
            </div>
            <div className="bg-[#DEEDC05C] rounded-3xl p-4 flex items-center gap-4 h-[154px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img src={imgOrder2} alt="" />
              <div>
                <p className="text-sm">Jumlah Pelanggan</p>
                <p className="font-bold text-lg">30 pelanggan</p>
              </div>
            </div>
          </div>

          {/* iklan */}
          <div className="bg-white rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4">
            <div className="mb-4">
              <img src={imgIklan} alt="iklan" className="rounded-lg w-full h-24 object-cover" />
              <a href="kelola-iklan"><button className="mt-2 w-full bg-[#000000] cursor-pointer text-white py-1 rounded-lg">Edit Iklan</button></a>
            </div>
            <div>
              <img src={imgIklan} alt="jajanan" className="rounded-lg w-full h-24 object-cover" />
              <a href="kelola-iklan"><button className="mt-2 w-full bg-[#000000] cursor-pointer text-white py-1 rounded-lg">Edit Iklan</button></a>
            </div>
          </div>
        </div>

        {/* pesanan & pie chart */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-[#708A58] rounded-3xl shadow p-4 text-white">
            <h3 className="text-lg font-bold mb-4">Pesanan</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-white/70 border-b border-white/20">
                  <th className="py-2">Order</th>
                  <th>Klien</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#647A50] rounded-lg">
                  <td className="py-4 px-2"><input type="checkbox" name="" id="" /> #1123</td>
                  <td>Wonyoung</td>
                  <td>Jan 27, 2025</td>
                  <td className="text-green-300 font-semibold">Dikirimkan</td>
                </tr>
                <tr className="bg-[#647A50] mt-2 rounded-lg">
                  <td className="py-4 px-2"><input type="checkbox" name="" id="" /> #1123</td>
                  <td>Emily</td>
                  <td>Jan 28, 2025</td>
                  <td className="text-red-300 font-semibold">Dibatalkan</td>
                </tr>
                <tr className="bg-[#647A50] mt-2 rounded-lg">
                  <td className="py-4 px-2"><input type="checkbox" name="" id="" /> #1123</td>
                  <td>Emily</td>
                  <td>Feb 13, 2025</td>
                  <td className="text-white font-semibold">Selesai</td>
                </tr>
              </tbody>
            </table>
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-white underline hover:text-white/90">Selengkapnya ↗</a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4 h-76">
            <h3 className="text-lg font-bold flex justify-between">Penjualan <a href="statistik"><ArrowUpRight className='cursor-pointer' /></a></h3>
            <ResponsiveContainer width="100%" height={230}>
              <RPieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={renderLabel}
                  labelLine={false}
                >
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </RPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
