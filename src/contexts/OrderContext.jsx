import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const addToConfirmed = (order) => {
    setConfirmedOrders((prev) => [...prev, order]);
  };

  return (
    <OrderContext.Provider value={{ confirmedOrders, addToConfirmed }}>
      {children}
    </OrderContext.Provider>
  );
};
