import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialOrders = [
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Jan 20, 2025",
      produk: [
        { nama: "Le Minerale", jumlah: 3, harga: 7000 },
        { nama: "Baso Tahu", jumlah: 1, harga: 5000 },
        { nama: "Le Minerale", jumlah: 3, harga: 7000 },
      ],
      status: "dikirimkan",
      pesan: "Yang Baso Tahu sambelnya pisah ya kak!!"
    },
    {
      id: "#1234",
      nama: "Waqqir",
      email: "waqqirhumaid@gmail.com",
      tanggal: "Jan 20, 2025",
      produk: [
        { nama: "Le Minerale", jumlah: 3, harga: 7000 },
        { nama: "Baso Tahu", jumlah: 1, harga: 5000 },
        { nama: "Le Minerale", jumlah: 3, harga: 7000 },
        { nama: "Mie goreng", jumlah: 1, harga: 5000 },
      ],
      status: "dikirimkan",
      pesan: "mie gorengnya pake kuah ya kak"
    },
  ];

  const [allOrders, setAllOrders] = useState(initialOrders);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const addToConfirmed = (order) => {
    // Tambahkan status saat dikonfirmasi
    const orderWithStatus = { ...order, status: "dikirimkan" };

    // Tambahkan ke confirmed
    setConfirmedOrders((prev) => [...prev, orderWithStatus]);

    // Hapus dari daftar allOrders
    removeOrder(order);
  };

  const updateOrderStatus = (id, newStatus) => {
    setConfirmedOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const removeOrder = (orderToRemove) => {
    setAllOrders((prev) =>
      prev.filter((item) => {
        // Gunakan perbandingan yang tepat (misalnya ID unik, bukan nama)
        return (
          item.id !== orderToRemove.id ||
          item.nama !== orderToRemove.nama ||
          item.tanggal !== orderToRemove.tanggal
        );
      })
    );
  };

  return (
    <OrderContext.Provider
      value={{
        allOrders,
        confirmedOrders,
        addToConfirmed,
        removeOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
