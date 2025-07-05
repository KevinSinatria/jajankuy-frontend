import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import Sidebar from "../../components/Sidebar";

function DetailAdminPage() {
  const { state: order } = useLocation();
  const { addToConfirmed, removeOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    const updatedOrder = {
      ...order,
      status: "dikirimkan",
    };
    addToConfirmed(updatedOrder);
    removeOrder(order);
    navigate("/pesanan-admin");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten Utama */}
      <div className="flex-col mx-auto w-350">
        <div className="text-4xl font-semibold mt-10">Detail Pesanan</div>
        <div className="max-w-full mt-5 bg-white rounded-xl shadow-xl border p-8 flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">#{order.id}</h2>
            <div className="text-sm text-gray-500">Jan 20, 2025 · 10:30 AM</div>
            <div className="bg-yellow-200 text-yellow-800 text-sm px-3 py-1 rounded-full font-semibold">
              Perlu Dikirim
            </div>
          </div>

          {/* Info Pembeli */}
          <div className="mb-6">
            <p className="font-semibold flex items-center gap-2 text-green-700">
              <span>👤</span> {order.nama} — <span>{order.email}</span>
            </p>
          </div>

          {/* Metode Pembayaran */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-700 flex items-center gap-2">
              <span>💳</span> Metode Pembayaran
            </h3>
            <p className="ml-6 font-semibold">COD</p>
            <p className="ml-6 italic">{order.pesan}</p>
          </div>

          {/* Tabel Produk */}
          <table className="w-full text-left border border-gray-300 rounded overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 font-semibold">Product</th>
                <th className="py-2 px-4 font-semibold">Jumlah</th>
                <th className="py-2 px-4 font-semibold">Harga</th>
                <th className="py-2 px-4 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.produk.map((item, i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="py-2 px-4">{item.nama}</td>
                  <td className="py-2 px-4">{item.jumlah}</td>
                  <td className="py-2 px-4">
                    Rp {item.harga.toLocaleString()}
                  </td>
                  <td className="py-2 px-4">
                    Rp {(item.harga * item.jumlah).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-gray-300 font-bold">
                <td className="py-2 px-4" colSpan={3}>
                  Total
                </td>
                <td className="py-2 px-4">
                  Rp{" "}
                  {order.produk
                    .reduce(
                      (total, item) => total + item.harga * item.jumlah,
                      0
                    )
                    .toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Tombol Aksi */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleConfirm}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Update Status
            </button>
            <button
              onClick={() => navigate("/pesanan-admin")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Hubungi Pembeli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAdminPage;
