import React, { useRef, useState } from "react";
import pp from "../assets/wonyoung.png";
import tong from "../assets/tongsampah.png";
import pensil from "../assets/Pencil.png";

function ProfileUserInAdmin({ username, email, role, id, onEdit, onDelete }) {
  const [hoverUp, setHoverUp] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = cardRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.bottom + 180 > viewportHeight) {
      setHoverUp(true); // terlalu bawah, munculkan popup ke atas
    } else {
      setHoverUp(false); // cukup ruang, munculkan popup ke bawah
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className="relative group max-w-45 h-60 cursor-pointer"
    >
      {/* Status Bulat */}
      <div className="absolute w-7 h-7 rounded-full border-8 border-gray-900 bg-gray-400 right-0 m-5 bottom-17"></div>

      {/* Foto */}
      <img src={pp} alt="" className="w-45" />

      {/* Nama & Role */}
      <div className="text-center">
        <h1 className="font-bold text-3xl">{username}</h1>
        <h1 className="text-xl">{role}</h1>
      </div>

      {/* Hover Box */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-72 p-4 rounded-xl shadow-lg border bg-white z-10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
          hoverUp
            ? "bottom-full mb-4 origin-bottom"
            : "top-full mt-4 origin-top"
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <img
            src={pp}
            alt={username}
            className="w-16 h-16 rounded-full border border-black"
          />
          <div className="text-sm font-bold flex justify-between w-200">
            <div className="">
              Id
              <br />
              {id}
            </div>
            <div className="">
              <button className="mx-1 cursor-pointer" onClick={onEdit} >
                <img src={pensil} alt="" />
              </button>
              <button className="mx-1" onClick={onDelete}>
                <img src={tong} alt="" />
              </button>
            </div>
          </div>
        </div>
        <p>
          <span className="font-semibold">Nama:</span> {username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {role}
        </p>

        {/* Tail Segitiga */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border border-l border-t rotate-45 z-0 ${
            hoverUp ? "-bottom-2" : "-top-2"
          }`}
        />
      </div>
    </div>
  );
}

export default ProfileUserInAdmin;
