import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialOrders = [
    {
      id: "#1123",
      nama: "Wonyoung",
      email: "herewony@gmail.com",
      tanggal: "Jan 20, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#1124",
      nama: "Emily",
      email: "emilysie12@gmail.com",
      tanggal: "Jan 23, 2025",
      total: "Rp 130.000.00",
    },
    {
      id: "#2324",
      nama: "waqqir",
      email: "emilysie12@gmail.com",
      tanggal: "Jan 23, 2025",
      total: "Rp 130.000.00",
    },
  ];

  const [allOrders, setAllOrders] = useState(initialOrders);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const addToConfirmed = (order) => {
    setConfirmedOrders((prev) => [...prev, order]);
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
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
