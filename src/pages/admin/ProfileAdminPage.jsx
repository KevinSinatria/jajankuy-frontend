import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import BackroundProfile from "../../assets/BackroundProfile.png";
import pp from "../../assets/wonyoung.png";
import camera from "../../assets/Camera.png";

const ProfileAdminPage = () => {
  const [admin, setAdmin] = useState({
    username: "wonyoung",
    email: "wontonenak@gmail.com",
    role: "admin 1",
  });

  const namaPertama = admin.username.slice(0, 4); 
  const namaKedua = admin.username.slice(4);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="m-6 w-300 bg-white flex-1 rounded-2xl shadow-2xl overflow-hidden relative">
        <div className="relative h-70 bg-gray-200 rounded-2xl overflow-hidden">
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

        {/* pp */}
        <div className="absolute left-8  rounded-full  overflow-hidden top-25 z-20 ">
          <img
            className="font-bold justify-center items-center flex m-auto w-100"
            src={pp}
          />
        </div>

        {/* edit bg */}
        <div className="absolute right-15 rounded-full w-25 h-25 border-7 border-white overflow-hidden top-57 z-20 ">
          <img
            className="font-bold justify-center items-center flex m-auto w-40 p-4 bg-gray-500"
            src={camera}
          />
        </div>

        {/* edit pp */}
        <div className="absolute left-75 rounded-full w-20 h-20 border-7 border-white overflow-hidden top-95 z-20 ">
          <img
            className="font-bold justify-center items-center flex m-auto w-40 p-4 bg-gray-500"
            src={camera}
          />
        </div>

        {/* isi bio */}
        <div className=" w-full m-5 h-full pr-15">
          {/* nama dan role */}
          <div className="flex justify-between">
            <div className="mt-50 ml-20">
              <h1 className="text-6xl ">
                <strong>{namaPertama}</strong>{namaKedua}
              </h1>
              <h1 className="text-3xl mt-5">( Admin 1)</h1>
            </div>

            {/* biodata */}
            <div className="w-full max-w-210 p-5 pr-25 space-y-2">
              <h1 className="text-2xl">Name</h1>
              <h1 className="text-xl border-2 border-gray-400 rounded-lg p-2">
                {admin.username}
              </h1>
              <h1 className="text-2xl mt-5">Email</h1>
              <h1 className="text-xl border-2 border-gray-400 rounded-lg p-2">
                {admin.email}
              </h1>
              <h1 className="text-2xl mt-5">Role</h1>
              <h1 className="text-xl border-2 border-gray-400 rounded-lg p-2">
                {admin.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Info dan tombol Edit
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
                </div> */}
      </div>
    </div>
  );
};

export default ProfileAdminPage;
