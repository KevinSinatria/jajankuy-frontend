import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";
import user from "../assets/userLogoInAdmin.png";
import calender from "../assets/Calendar.png";
import PaginationV2 from "./PaginationV2";

function TabelPesananRiwayat() {
  const { confirmedOrders } = useContext(OrderContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = confirmedOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(confirmedOrders.length / itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-4xl font-bold text-center mb-9">
        Riwayat Pesanan
      </div>

      <div className="rounded-3xl overflow-hidden shadow-md bg-[#6D8E4E]">
        {/* Header */}
        <div className="grid grid-cols-6 font-bold text-white px-6 py-4 border-b border-white/30">
          <div>Order</div>
          <div className="flex gap-2">
            <img src={user} alt="" /> Klien
          </div>
          <div className="flex gap-2">
            <img src={calender} alt="" /> Tanggal
          </div>
          <div>Total</div>
          <div>Status</div>
          <div>Aksi</div>
        </div>

        {/* Rows */}
        {currentItems.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center text-white px-6 py-4 border-b border-white/50 hover:bg-[#5e7b43] transition"
          >
            <div>{item.id}</div>
            <div>
              <div className="font-semibold">{item.nama}</div>
              <div className="text-sm text-white/80">{item.email}</div>
            </div>
            <div className="font-semibold">{item.tanggal}</div>
            <div className="font-semibold">{item.total}</div>
            <div className="capitalize font-medium">{item.status || "tidak diketahui"}</div>
            <div className="text-center">-</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <PaginationV2
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default TabelPesananRiwayat;
