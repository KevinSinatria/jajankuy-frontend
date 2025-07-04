import React from "react";
import Sidebar from "../../components/Sidebar";
import TabelPesanan from "../../components/TabelPesanan";

const PesananPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-7 space-y-6">
        <div className="relative">
          <TabelPesanan />

        </div>
      </div>
    </div>
  );
};

export default PesananPage;
