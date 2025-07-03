import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

function TabelPesananRiwayat() {
  const { confirmedOrders } = useContext(OrderContext);

  return (
    <div>
      {confirmedOrders.map((item, i) => (
        <div key={i}>{item.nama} - {item.tanggal}</div>
      ))}
    </div>
  );
}

export default TabelPesananRiwayat;
