import React, { useState } from "react";
import user from "../assets/userLogoInAdmin.png";
import calender from "../assets/Calendar.png";
import mata from "../assets/Eye.png";
import pensil from "../assets/PencilKelola.png";
import check from "../assets/Check.png";
import sampah from "../assets/Bin.png";
import PaginationV2 from "./PaginationV2";
import TabelPesananRiwayat from "./TabelPesananRiwayat";
import { useNavigate } from "react-router-dom";

function TabelPesanan() {
  const data = [
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Jan 20, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Jan 23, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Jan 27, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Feb 03, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Feb 07, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Mar 12, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Mar 14, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Apr 22, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Jan 20, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Jan 23, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Jan 27, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Feb 03, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Feb 07, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Mar 12, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Mar 14, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1123",
      nama: "waqqir",
      email: "emilysie12@gmail.com",
      tanggal: "Apr 22, 2025",
      total: "Rp 130.000.00",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const itemsPerPage = 8;
  const navigate = useNavigate();
  const handleRowClick = (rowId, item) => {
    if (selectedOrderId === rowId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(rowId);
      navigate("/detail-pesanan-admin", { state: item });
    }
  };

  const [riwayatPage, setRiwayatPage] = useState(true);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {riwayatPage ? (
        <>
          <div className="text-4xl font-bold text-center mb-9">
            Lihat pesanan para Klien!
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md bg-[#6D8E4E]">
            {/* Header */}
            <div className="grid grid-cols-5 font-bold text-white px-6 py-4 border-b border-white/30 relative">
              <div className="flex items-center gap-2">Order</div>
              <div className="flex gap-2">
                <img src={user} alt="" /> Klien
              </div>
              <div className="flex gap-2">
                <img src={calender} alt="" /> Tanggal
              </div>
              <div>Total</div>
              <div className="flex gap-2 justify-center">
                {selectedOrderId && (
                  <button
                    onClick={() => {
                      const found = currentItems.find(
                        (_, i) =>
                          `${_.id}-${indexOfFirstItem + i}` === selectedOrderId
                      );
                      if (found) {
                        setConfirmedOrders([...confirmedOrders, found]);
                        setSelectedOrderId(null);
                      }
                    }}
                  >
                    <img
                      src={check}
                      alt="Konfirmasi"
                      className="w-10 h-10 absolute hover:scale-105 transition"
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Rows */}
            {currentItems.map((item, i) => {
              const rowId = `${item.id}-${indexOfFirstItem + i}`;
              const isSelected = selectedOrderId === rowId;

              return (
                <div
                  key={i}
                  onClick={() => handleRowClick(rowId, item)}
                  className={`grid grid-cols-5 items-center text-white px-6 py-4 border-b border-white/50 transition cursor-pointer ${
                    isSelected ? "bg-[#4f6939]" : "hover:bg-[#5e7b43]"
                  }`}
                >
                  <div className="flex items-center gap-2">{item.id}</div>
                  <div>
                    <div className="font-semibold">{item.nama}</div>
                    <div className="text-sm text-white/80">{item.email}</div>
                  </div>
                  <div className="font-semibold">{item.tanggal}</div>
                  <div className="font-semibold">{item.total}</div>
                  <div className="flex justify-center gap-3">
                    <button title="Lihat">
                      <img src={mata} alt="" />
                    </button>
                    <button title="Edit">
                      <img src={pensil} alt="" />
                    </button>
                    <button title="Hapus">
                      <img src={sampah} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <PaginationV2
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />

          {/* Tombol ke riwayat */}
          <button
            onClick={() => setRiwayatPage(false)}
            className="bg-black w-70 p-2 absolute right-0 bottom-[50px] rounded-full mr-[180px] text-xl text-center text-white font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:border-2 hover:scale-105 hover:shadow-lg"
          >
            Lihat Riwayat Pesanan
          </button>
        </>
      ) : (
        <TabelPesananRiwayat data={confirmedOrders} />
      )}
    </div>
  );
}

export default TabelPesanan;
