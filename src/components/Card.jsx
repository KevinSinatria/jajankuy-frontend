import React from "react";
import lemineral from "../assets/minuman(DataDummy).png";

const Card = (props) => {
  return (
    <div
      className="h-[350px] w-[253px] rounded-2xl m-5 border shadow-[5px_0px_31px_2px_rgba(0,_0,_0,_0.1)] 
                transition-all duration-300 ease-in-out transform 
                hover:-translate-y-2 hover:shadow-[5px_0px_31px_8px_rgba(0,_0,_0,_0.1)] p-3">
      <img src={lemineral} alt="Gambar Produk" className="mx-auto mt-5" />
      <p className="font-bold text-xl">{props.namaProduk}</p>
      <p className="font-bold text-md">Rp. {props.harga.toLocaleString("id-ID")}.00</p>
      <p className="text-black">{props.deks}</p>
      <div className="mt-4 flex justify-between">
        <p>Stok : {props.stok} </p>
        <button className="bg-[#6CBB66] w-[80px] h-[30px] text-white rounded-2xl font-bold">lihat</button>
      </div>
    </div>
  );
};

export default Card;
