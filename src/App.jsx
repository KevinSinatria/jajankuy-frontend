import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import KeranjangPage from "./pages/KeranjangPage";
import LoginAdminPage from "./pages/admin/LoginAdminPage";
import DashboardAdminPage from "./pages/admin/DashboardAdminPage";
import ProfileAdminPage from "./pages/admin/ProfileAdminPage";
import KelolaJajananPage from "./pages/admin/KelolaJajananPage";
import KelolaUserPage from "./pages/admin/KelolaUserPage";
import StatistikPage from "./pages/admin/StatistikPage";
import PesananPage from "./pages/admin/PesananPage";
import ProfilePage from "./pages/ProfilePage";
import HistoryPage from "./pages/HistoryPage";
import FavoritePage from "./pages/FavoritePage";
import KelolaIklanPage from "./pages/admin/KelolaIklanPage";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import DetailAdminPage from "./pages/admin/DetailAdminPage";
import SkPage from "./pages/SkPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detail" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/keranjang" element={<KeranjangPage />} />
        <Route path="/adminlogin" element={<LoginAdminPage />} />
        <Route path="/dashboard" element={<DashboardAdminPage />} />
        <Route path="/profile-admin" element={<ProfileAdminPage />} />
        <Route path="/kelola-jajanan" element={<KelolaJajananPage />} />
        <Route path="/kelola-user" element={<KelolaUserPage />} />
        <Route path="/statistik" element={<StatistikPage />} />
        <Route path="/pesanan-admin" element={<PesananPage />} />
        <Route path="/detail-pesanan-admin" element={<DetailAdminPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/kelola-iklan" element={<KelolaIklanPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sk" element={<SkPage />} />
      </Routes>
    </>
  );
}

export default App;