import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailsPage from "./pages/DetailsPage";
import KeranjangPage from "./pages/KeranjangPage";
import LoginAdminPage from "./pages/admin/LoginAdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detail" element={<DetailsPage />} />
        <Route path="/keranjang" element={<KeranjangPage />} />
        <Route path="/adminlogin" element={<LoginAdminPage />} />
      </Routes>
    </>
  );
}

export default App;