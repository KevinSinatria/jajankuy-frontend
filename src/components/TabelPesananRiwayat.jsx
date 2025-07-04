import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";
import user from "../assets/userLogoInAdmin.png";
import calender from "../assets/Calendar.png";
import PaginationV2 from "./PaginationV2";

function TabelPesananRiwayat() {
  const { confirmedOrders, updateOrderStatus } = useContext(OrderContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = confirmedOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(confirmedOrders.length / itemsPerPage);

  const statusOptions = ["dikirimkan", "selesai", "dibatalkan"];

  const handleRowClick = (id) => {
    setSelectedOrderId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-4xl font-bold text-center mb-9">
        Riwayat Pesanan
      </div>

      <div className="rounded-3xl overflow-hidden shadow-md bg-[#6D8E4E]">
        {/* Header */}
        <div className="grid grid-cols-5 font-bold text-white px-6 py-4 border-b border-white/30">
          <div>Order</div>
          <div className="flex gap-2">
            <img src={user} alt="" /> Klien
          </div>
          <div className="flex gap-2">
            <img src={calender} alt="" /> Tanggal
          </div>
          <div>Status</div>
          <div>Total</div>
        </div>

        {/* Rows */}
        {currentItems.map((item, i) => (
          <div
            key={i}
            onClick={() => handleRowClick(item.id)}
            className={`grid grid-cols-5 items-center text-white px-6 py-4 border-b border-white/50 transition cursor-pointer ${
              selectedOrderId === item.id ? "bg-[#4f6939]" : "hover:bg-[#5e7b43]"
            }`}
          >
            <div>{item.id}</div>
            <div>
              <div className="font-semibold">{item.nama}</div>
              <div className="text-sm text-white/80">{item.email}</div>
            </div>
            <div className="font-semibold">{item.tanggal}</div>
            <div>
              {selectedOrderId === item.id ? (
                <select
                  value={item.status}
                  onChange={(e) => updateOrderStatus(item.id, e.target.value)}
                  className="bg-[#5e7b43] text-white font-semibold border border-white/30 rounded px-2 py-1"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="capitalize font-medium">{item.status || "tidak diketahui"}</span>
              )}
            </div>
            <div className="font-semibold">{item.total}</div>
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
