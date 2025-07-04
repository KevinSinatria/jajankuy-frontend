import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { OrderProvider } from "./contexts/OrderContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/">  
      <OrderProvider>
        <App />
      </OrderProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
