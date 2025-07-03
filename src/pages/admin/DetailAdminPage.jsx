import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";

function DetailAdminPage() {
  const { state: order } = useLocation();
  const navigate = useNavigate();
  const { addToConfirmed } = useContext(OrderContext);

  if (!order) {
    return (
      <div className="p-8 text-center text-red-500 font-bold text-xl">
        Data pesanan tidak ditemukan.
      </div>
    );
  }

  const handleConfirm = () => {
    addToConfirmed(order);        // Tambahkan ke riwayat
    navigate("/pesanan-admin");        // Kembali ke tabel utama
  };

  const handleCancel = () => {
    navigate("/pesanan-admin");        // Kembali tanpa menyimpan
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-3xl font-bold mb-6">Detail Pesanan</h2>
      <div className="space-y-2 text-lg">
        <p><strong>ID:</strong> {order.id}</p>
        <p><strong>Nama:</strong> {order.nama}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Tanggal:</strong> {order.tanggal}</p>
        <p><strong>Total:</strong> {order.total}</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleConfirm}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Confirm
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Batal
        </button>
      </div>
    </div>
  );
}

export default DetailAdminPage;
