import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import emailGambar from "../assets/email.png";
import tutupMata from "../assets/mataTutup.png";
import bukaMata from "../assets/mataBuka.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({ email: "", pass: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [lihatPassword, setLihatPassword] = useState(false);

  function onChangeEmail(e) {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setErrors(p => ({ ...p, email: "Email tidak valid" }));
    } else {
      setErrors(p => ({ ...p, email: "" }));
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function onChangePass(e) {
    const value = e.target.value;
    setPass(value);
    if (value.length < 6) {
      setErrors(p => ({ ...p, pass: "Password minimal 6 karakter" }));
    } else {
      setErrors(p => ({ ...p, pass: "" }));
    }
  }

  function togglePassword() {
    setLihatPassword(!lihatPassword);
  }

  function handleLogin() {
    if (!email || !pass) {
      setErrors({
        email: !email ? "Email wajib diisi" : errors.email,
        pass: !pass ? "Password wajib diisi" : errors.pass,
      });
      return;
    }

    if (errors.email || errors.pass) {
      return;
    }

    const userData = { nama: "waqqir", email, pass };
    login(userData);
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center items-center px-4 py-10 min-h-screen">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-6 py-8 bg-white/30 rounded-2xl border backdrop-blur-sm shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">MASUK</h2>

        {/* email */}
        <div className="mb-6">
          <label className="block text-base md:text-lg mb-2">Email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-md text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl ${errors.email ? 'border border-red-500' : ''}`}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <img src={emailGambar} alt="icon email" className="h-5 w-5" />
            </div>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* password */}
        <div className="mb-6">
          <label className="block text-base md:text-lg mb-2">Password</label>
          <div className="relative">
            <input
              type={lihatPassword ? "text" : "password"}
              onChange={onChangePass}
              value={pass}
              className={`w-full pl-4 pr-10 py-3 bg-white rounded-xl shadow-md text-gray-800 focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl ${errors.pass ? 'border border-red-500' : ''}`}
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

        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-gray-800 text-white font-semibold px-6 w-full py-3 rounded-xl hover:bg-gray-700 transition"
            onClick={handleLogin} >
            Masuk
          </button>
        </div>

        {/* dafatr */}
        <p className="text-center text-sm md:text-md">
          Belum mempunyai akun?
          <a
            href="/register"
            className="text-blue-700 font-semibold hover:underline ml-1" >
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
