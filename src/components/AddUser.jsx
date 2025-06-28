// components/AddUser.jsx
import React from "react";
import add from "../assets/add.png";

function AddUser({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="relative group max-w-55 h-60 cursor-pointer"
    >
      {/* Status Bulat */}
      <div className="absolute w-10 h-10 text-2xl rounded-full border-8 border-gray-900 bg-gray-400 right-0 m-5 bottom-17">+</div>

      {/* Foto */}
      <img src={add} alt="" className="w-55" />

      {/* Nama & Role */}
      <div className="text-center">
        <h1 className="font-bold text-3xl">Add User</h1>
        <h1 className="text-xl"></h1>
      </div>
    </button>
  );
}

export default AddUser;
