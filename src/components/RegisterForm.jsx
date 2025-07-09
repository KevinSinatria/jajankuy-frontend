import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import emailGambar from "../assets/email.png";
import bukaMata from "../assets/mataBuka.png";
import tutupMata from "../assets/mataTutup.png";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [lihatPassword, setLihatPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    pass: "",
    confirmPass: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function onChangeEmail(e) {
    const value = e.target.value;
    setEmail(value);
    setErrors((p) => ({
      ...p,
      email: validateEmail(value) ? "" : "Email tidak valid",
    }));
  }

  function onChangeUsername(e) {
    const value = e.target.value;
    setUsername(value);
    setErrors((p) => ({
      ...p,
      username: value.length < 4 ? "Username harus minimal 6 karakter" : "",
    }));
  }

  function onChangePass(e) {
    const valuePass = e.target.value;
    setPass(valuePass);
    setErrors((p) => ({
      ...p,
      pass: valuePass.length < 6 ? "Password minimal 6 karakter" : "",
    }));
  }

  function onChangeConfirmPass(e) {
    setConfirmPass(e.target.value);
  }

  function togglePassword() {
    setLihatPassword(!lihatPassword);
  }

  function handleRegister() {
    if (!email || !username || !pass || !confirmPass) {
      setErrors({
        email: !email ? "Email wajib diisi" : errors.email,
        username: !username ? "Username wajib diisi" : errors.username,
        pass: !pass ? "Password wajib diisi" : errors.pass,
        confirmPass: !confirmPass
          ? "Verifikasi Password wajib diisi"
          : errors.confirmPass,
      });
      return;
    }

    if (confirmPass !== pass) {
      setErrors((p) => ({ ...p, confirmPass: "Password tidak cocok" }));
      return;
    }

    const userData = { nama: username, email, pass };
    login(userData);
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-6 py-8 bg-white/30 rounded-2xl border backdrop-blur-sm shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-2">DAFTAR</h2>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-base md:text-lg mb-1">Email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              className={`w-full pl-4 pr-10 py-2 bg-white rounded-xl shadow-md text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <img src={emailGambar} alt="icon email" className="h-5 w-5" />
            </div>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Username */}
        <div className="mb-3">
          <label className="block text-base md:text-lg mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={onChangeUsername}
            className={`w-full pl-4 pr-4 py-3 bg-white rounded-xl shadow-md text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl ${
              errors.username ? "border border-red-500" : ""
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-base md:text-lg mb-2">Password</label>
          <div className="relative">
            <input
              type={lihatPassword ? "text" : "password"}
              value={pass}
              onChange={onChangePass}
              className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-md text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl ${
                errors.pass ? "border border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <img
                src={lihatPassword ? bukaMata : tutupMata}
                alt="toggle password"
                className="h-5 w-5"
              />
            </button>
          </div>
          {errors.pass && (
            <p className="text-red-500 text-sm mt-1">{errors.pass}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-base md:text-lg mb-2">
            Verifikasi Password
          </label>
          <input
            type="password"
            value={confirmPass}
            onChange={onChangeConfirmPass}
            className={`w-full pl-4 pr-4 py-3 bg-white rounded-xl shadow-md text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl ${
              errors.confirmPass ? "border border-red-500" : ""
            }`}
          />
          {errors.confirmPass && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPass}</p>
          )}
        </div>

        {/* Tombol Register */}
        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-gray-800 text-white font-semibold px-6 w-full py-3 rounded-xl hover:bg-gray-700 transition"
            onClick={handleRegister}
          >
            Daftar
          </button>
        </div>

        {/* Link ke Login */}
        <p className="text-center text-sm md:text-md">
          Sudah mempunyai akun?
          <a
            href="/login"
            className="text-blue-700 font-semibold hover:underline ml-1"
          >
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
}
