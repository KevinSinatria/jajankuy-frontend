import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FotoProfile from "../assets/PotoProfile.jpg";
import BackroundProfile from "../assets/BackroundProfile.png";

function ProfilePage() {
  const [user, setUser] = useState({
    username: "Pelanggan baik hati",
    email: "blablabla@gmail.com",
    role: "siswa",
    password: "cobaa",
  });

  function handleEditUsername(e) {
    setUser((u) => ({ ...u, username: e.target.value }));
  }

  function handleEditEmail(e) {
    setUser((u) => ({ ...u, email: e.target.value }));
  }

  const hurufPertamaKapital =
    user.username.charAt(0).toUpperCase() + user.username.slice(1);
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-neutral-700">
      <Navbar />

      <div className="flex flex-col items-center">
        <div className="w-[90%] max-w-5xl mt-32 bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="relative h-36 bg-gray-200">
            <img
              src={BackroundProfile}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* {isEdit ? 
            <button className="absolute w-20 top-31 right-3 bg-white border px-4 py-1 rounded-lg shadow hover:bg-gray-100 text-black text-sm font-semibold">
              Ubah
            </button>
            :
            <span></span>
            } */}
          </div>

          <div className="absolute left-8 w-32 h-32 rounded-full border-4 border-white overflow-hidden top-20 z-20 shadow-lg">
            <img
              src={FotoProfile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info dan tombol Edit */}
          <h1 className="ml-46 text-3xl font-bold absolute mt-5">
            {user.username}
          </h1>
          <h1 className="ml-46 text-sm font-bold text-gray-400 absolute mt-15">
            {user.email}
          </h1>
          <div className="pt-5 pb-6 px-6 md:px-12 flex flex-col justify-end items-center md:items-end">
            <div className="text-xl font-semibold">SMKN 01 KATAPANG</div>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 mt-5 rounded-lg transition duration-300"
              onClick={handleEdit}
            >
              {isEdit ? "Simpan" : "Edit Profile"}
            </button>
          </div>
        </div>
        {isEdit && (
          <div className="mt-20 w-[90%] max-w-5xl bg-white p-8 rounded-2xl shadow-md space-y-6 text-lg">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                value={user.username}
                onChange={handleEditUsername}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                onChange={handleEditEmail}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Masukkan email aktif"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
