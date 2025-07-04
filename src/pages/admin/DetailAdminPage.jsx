import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

function DetailAdminPage() {
  const { state: order } = useLocation();
  const { addToConfirmed, removeOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    const updatedOrder = {
    ...order,
    status: "dikirimkan", // <-- status default saat dikonfirmasi
  };
    addToConfirmed(updatedOrder);   // Simpan ke riwayat
    removeOrder(order);      // Hapus dari daftar utama
    navigate("/pesanan-admin");    // Balik ke halaman utama
  };

  return (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Detail Pesanan</h2>
    <p><strong>Nama:</strong> {order.nama}</p>
    <p><strong>Email:</strong> {order.email}</p>
    <p><strong>Tanggal:</strong> {order.tanggal}</p>
    <p><strong>Total:</strong> {order.total}</p>
    <p><strong>Status:</strong> {order.status || "Belum dikonfirmasi"}</p>

    <div className="mt-4 flex gap-4">
      <button
        onClick={handleConfirm}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Confirm
      </button>
      <button
        onClick={() => navigate("/pesanan-admin")}
        className="bg-red-600 text-whEmilyite px-4 py-2 rounded"
      >
        Batal
      </button>
    </div>
  </div>
);

}

export default DetailAdminPage;