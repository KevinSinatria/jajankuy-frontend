import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailsPage from "./pages/DetailsPage";
import KeranjangPage from "./pages/KeranjangPage";
import LoginAdminPage from "./pages/admin/LoginAdminPage";
import DashboardAdminPage from "./pages/admin/DashboardAdminPage";
import ProfileAdminPage from "./pages/admin/ProfileAdminPage";
import KelolaJajananPage from "./pages/admin/KelolaJajananPage";
import KelolaUserPage from "./pages/admin/KelolaUserPage";
import StatistikPage from "./pages/admin/StatistikPage";
import PesananPage from "./pages/admin/PesananPage";

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
        <Route path="/dashboard" element={<DashboardAdminPage />} />
        <Route path="/profile" element={<ProfileAdminPage />} />
        <Route path="/kelola-jajanan" element={<KelolaJajananPage />} />
        <Route path="/kelola-user" element={<KelolaUserPage />} />
        <Route path="/statistik" element={<StatistikPage />} />
        <Route path="/pesanan" element={<PesananPage />} />
      </Routes>
    </>
  );
}

export default App;