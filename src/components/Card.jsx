import React from "react";

const Card = (props) => {
  return (
    <div
      className="h-[380px] w-[253px] rounded-2xl m-4 border shadow-md 
             p-4 flex flex-col justify-between transition-all duration-300 
             hover:shadow-lg"
      style={{
        backgroundImage: 'linear-gradient(to top, #CCF971, #E2FFA6, #FFFFFF)'
      }}
    >
      {/* gambar produk */}
      <div className="flex justify-center mt-2">
        <img src={props.img} alt="Gambar Produk" className="h-28 object-contain" />
      </div>

      {/* nama produk */}
      <div className="mt-3 flex justify-between items-center">
        <p className="font-semibold text-black text-lg">{props.namaProduk}</p>
        <p className="text-sm font-medium text-black">600 ml</p>
      </div>

      {/* harga produk */}
      <p className="text-md font-semibold text-black -mt-6">
        Rp. {props.harga.toLocaleString("id-ID")},00
      </p>

      {/* deskripsi */}
      <p className="text-sm text-gray-700 -mt-4 line-clamp-3 leading-relaxed">
        {props.deks}
      </p>

      {/* stok dan button */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm font-medium text-gray-800">Stok : {props.stok}</p>
        <a href="/detail">
          <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-full text-white text-sm font-semibold cursor-pointer shadow">
            Lihat
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
