import React from 'react'
import user from "../assets/userLogoInAdmin.png"
import calender from "../assets/Calendar.png"

function TabelPesanan() {
   const data = [
    { id: "#1123", nama: "Wonyoung", email: "herewony@gmail.com", tanggal: "Jan 20, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Emily", email: "emilysie12@gmail.com", tanggal: "Jan 23, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Emily", email: "emilysie12@gmail.com", tanggal: "Jan 27, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Emily", email: "emilysie12@gmail.com", tanggal: "Feb 03, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Wonyoung", email: "herewony@gmail.com", tanggal: "Feb 07, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Emily", email: "emilysie12@gmail.com", tanggal: "Mar 12, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Wonyoung", email: "herewony@gmail.com", tanggal: "Mar 14, 2025", total: "Rp 130.000.00" },
    { id: "#1123", nama: "Emily", email: "emilysie12@gmail.com", tanggal: "Apr 22, 2025", total: "Rp 130.000.00" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="rounded-3xl overflow-hidden shadow-md bg-[#6D8E4E]">
        <div className="grid grid-cols-5 font-bold text-white px-6 py-4 border-b border-white/30">
          <div className=" flex items-center gap-2 ">
            
            Order
          </div>
          <div className="flex gap-2" >
            <img src={user} alt="" />
            Klien</div>
          <div className='flex gap-2' >
            <img src={calender} alt="" />
            Tanggal</div>
          <div >Total</div>
        </div>

        {data.map((item, i) => (
          <div key={i} className="grid grid-cols-5 items-center text-white px-6 py-4 border-b border-white/10 hover:bg-[#5e7b43] transition">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-lime-400" />
              {item.id}
            </div>
            <div>
              <div className="font-semibold">{item.nama}</div>
              <div className="text-sm text-white/80">{item.email}</div>
            </div>
            <div className="font-semibold">{item.tanggal}</div>
            <div  className="font-semibold">{item.total}</div>
            <div className="flex justify-center gap-3">
              <button title="Lihat"><span className="text-xl">👁️</span></button>
              <button title="Edit"><span className="text-xl">✏️</span></button>
              <button title="Hapus"><span className="text-xl">🗑️</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabelPesanan