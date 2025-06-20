import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {login} = useContext(AuthContext);
  const Navigate = useNavigate();

  function onChangeEmail(e){
    setEmail(e.target.value)
  }

  function onChangePass(e){
    setPass(e.target.value)
  }
  
  function handleLogin(){
    
    const userData = {
      nama : "waqqir",
      email : email,
      pass : pass
    }

    login(userData)

    Navigate("/")
  }
  
  return (
    <>
      <div className="w-full max-w-md px-6">
        <h2 className="text-3xl font-bold text-center mb-8">MASUK</h2>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Email</label>
          <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
            <input
              type="email"
              value={email}
              className="flex-1 bg-transparent focus:outline-none text-gray-800"
              onChange={onChangeEmail}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Password</label>
           <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
            <input
              type="password"
              onChange={onChangePass}
              value={pass}
              className="flex-1 bg-transparent focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Tombol Login */}
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-500 transition"
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
            className="text-blue-700 font-semibold hover:underline "
          >
            Daftar
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
