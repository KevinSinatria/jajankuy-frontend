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
    if (!validateEmail(value)) {
      setErrors((p) => ({ ...p, email: "Email tidak valid" }));
    } else {
      setErrors((p) => ({ ...p, email: "" }));
    }
  }

  function onChangeUsername(e) {
    const value = e.target.value;
    setUsername(value);
    if (value.length < 4) {
      setErrors((p) => ({
        ...p,
        username: "Username harus minimal 6 karakter",
      }));
    } else {
      setErrors((p) => ({ ...p, username: "" }));
    }
  }

  function onChangePass(e) {
    const valuePass = e.target.value;
    setPass(valuePass);
    if (valuePass.length < 6) {
      setErrors((p) => ({ ...p, pass: "Password minimal 6 karakter" }));
    } else {
      setErrors((p) => ({ ...p, pass: "" }));
    }
  }

  function onChangeConfirmPass(e) {
    const valuerConfirmPass = e.target.value;
    setConfirmPass(valuerConfirmPass);
  }

  function togglePassword() {
    setLihatPassword(!lihatPassword);
  }

  function handleRegister() {
    if (!email || !username || !pass) {
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
      setErrors((p) => ({...p, confirmPass: "Password tidak cocok",
      }));
      return;
    }

    const userData = {
      nama: username,
      email,
      pass,
    };

    login(userData);
    navigate("/");
  }

  return (
    <div className="w-full max-w-165 p-10 px-20  mr-40 mb-30 ml-50 bg-white/30 rounded-2xl border backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-8">DAFTAR</h2>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-lg mb-2">Email</label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={onChangeEmail}
            className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-lg text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img src={emailGambar} alt="" />
          </div>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Username */}
      <div className="mb-6">
        <label className="block text-lg mb-2">Username</label>
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={onChangeUsername}
            className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-lg text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] ${
              errors.username ? "border-red-500" : ""
            }`}
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block text-lg mb-2">Password</label>
        <div className="relative">
          <input
            type={lihatPassword ? "text" : "password"}
            value={pass}
            onChange={onChangePass}
            className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-lg text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] ${
              errors.pass ? "border-red-500" : ""
            }`}
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
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

      {/* ConfirmPassword */}
      <div className="mb-6">
        <label className="block text-lg mb-2">Verifikasi Password</label>
        <div className="relative">
          <input
            type="password"
            value={confirmPass}
            onChange={onChangeConfirmPass}
            className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-lg text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] ${
              errors.confirmPass ? "border-red-500" : ""
            }`}
          />
        </div>
        {errors.confirmPass && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPass}</p>
        )}
      </div>

      {/* Tombol Register */}
      <div className="flex justify-center items-center">
        <button
          className="bg-gray-800 text-white font-semibold px-10 w-full py-3 rounded-xl hover:bg-gray-700 transition"
          onClick={handleRegister}
        >
          Masuk
        </button>
      </div>

      {/* Link ke Login */}
      <p className="mt-6 text-center text-md">
        Sudah mempunyai akun?
        <a
          href="/login"
          className="text-blue-700 font-semibold hover:underline ml-1"
        >
          Masuk
        </a>
      </p>
    </div>
  );
}
