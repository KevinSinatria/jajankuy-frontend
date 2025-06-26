import React from 'react';
import Sidebar from '../../components/Sidebar';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import {
  FileText,
  XCircle,
  ShoppingBag,
  PieChart
} from 'lucide-react';
import bg from '../../assets/PotoProfile.jpg';
import banner from '../../assets/PotoProfile.jpg';

const dataPenjualan = [
  { name: 'Week 1', total: 200 },
  { name: 'Week 2', total: 300 },
  { name: 'Week 3', total: 500 },
  { name: 'Week 4', total: 400 },
];

const DashboardAdminPage = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f4f4]">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        {/* profile section */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          {/* banner */}
          <div
            className="h-24 bg-cover bg-center rounded-t-2xl rounded-b-2xl"
            style={{ backgroundImage: `url(${banner})` }}>
          </div>

          {/* profile */}
          <div className="flex items-center justify-between px-8 -mt-20 pb-4">
            <div className="w-38 h-38 rounded-full border-4 border-white overflow-hidden">
              <img
                src={bg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* role & lihat profile */}
            <div className="flex-1 ml-4 flex flex-col justify-center mt-23">
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
              <div className="flex justify-end mt-4">
                <a href="profile-admin" className="text-sm text-gray-700 hover:underline">
                  Lihat Profil ↗
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* container 2 */}
        <div className="flex flex-col xl:flex-row gap-6">

          {/* container penjualan */}
          <div className="bg-white rounded-2xl shadow p-4 flex-1">
            <h3 className="text-lg font-bold mb-2">Penjualan</h3>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={dataPenjualan}>
                <Line type="monotone" dataKey="total" stroke="#4ade80" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* stats */}
          <div className="flex flex-col gap-4 w-full xl:w-[900px]">
            <div className="flex flex-row gap-4 h-40">
              {/* row 1 */}
              <div className="bg-white flex-1 rounded-2xl shadow p-4 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FileText className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Pesanan</p>
                  <p className="text-lg font-bold">75</p>
                  <p className="text-xs text-green-500">+4% (30 hari)</p>
                </div>
              </div>

              {/* row 2 */}
              <div className="bg-white flex-1 rounded-2xl shadow p-4 flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <XCircle className="text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Dibatalkan</p>
                  <p className="text-lg font-bold">5</p>
                </div>
              </div>
            </div>

            {/* row 3 */}
            <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-4 h-40">
              <div className="bg-green-100 p-3 rounded-full">
                <ShoppingBag className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Pemasukan</p>
                <p className="text-xl font-bold">Rp 123.008.500,-</p>
                <p className="text-xs text-red-500">-12% (30 hari)</p>
              </div>
            </div>
          </div>
        </div>

        {/* container 3 */}
        <div className="flex flex-col md:flex-row gap-6 min-h-[300px]">

          {/* pesanan */}
          <div className="bg-white rounded-2xl shadow p-4 flex-1">
            <h3 className="text-lg font-bold mb-2">Pesanan</h3>
            <div className="h-67 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Pesanan
            </div>
          </div>

          {/* data jajanan */}
          <div className="bg-white rounded-2xl shadow p-4 flex-1 flex flex-col items-center ">
            <h3 className="text-lg font-bold mb-4 self-start">Data Jajanan</h3>
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-50 lg:h-50 bg-green-200 rounded-full flex items-center justify-center lg:mt-5 text-white">
              <PieChart className="w-10 h-10" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
