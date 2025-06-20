import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router";
import emailGambar from "../assets/email.png";
import tutupMata from "../assets/mataTutup.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate();

  const [lihatPassword, setLihatPassword] = useState(false);

  function onChangePass(e) {
    setPass(e.target.value);
  }

  function togglePassword() {
    setLihatPassword(!lihatPassword);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleLogin() {
    const userData = {
      nama: "waqqir",
      email: email,
      pass: pass,
    };

    login(userData);

    Navigate("/");
  }

  return (
    <>
      <div className="w-full max-w-md px-6">
        <h2 className="text-3xl font-bold text-center mb-8">MASUK</h2>

        <div className="mb-6">
          <label className="block text-lg mb-2">Email</label>

          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              className="w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-lg text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]"
            />

            {/* Ikon di dalam input */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <img src={emailGambar} alt="" />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Password</label>

          <div className="relative">
            <input
              type={lihatPassword ? 'text' : 'password'}
              onChange={onChangePass}
              value={pass}
              className="w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-lg text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]"
            />

            {/* Ikon di dalam input */}
            {/* Ikon tombol */}
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
            >
              <img
                // ganti tutupMata pertama jadi buka mata
                src={lihatPassword ? tutupMata : tutupMata}
                alt="toggle password"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>

        {/* Tombol Login */}
        <div className="flex justify-center">
          <button
            className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-500 transition"
            onClick={handleLogin}
          >
            Masuk
          </button>
        </div>

        {/* Link Daftar */}
        <p className="mt-6 text-center text-md">
          Belum mempunyai akun?
          <a
            href="/register"
            className="text-blue-700 font-semibold hover:underline ml-1"
          >
            Daftar
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
