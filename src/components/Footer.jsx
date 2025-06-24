import whatsapp from "../assets/wa.png";
import instagram from "../assets/ig.png";
import logo from "../assets/logo2.png";
import typ from "../assets/typography2.png";

function Footer() {
  return (
    <footer className="bg-[#2D3228] text-white pt-10 px-6 lg:px-20">
      <hr className="my-6 border-t border-gray-600" />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* logo */}
        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="w-8 h-12" />
            <img src={typ} alt="typography" className="w-28 ml-2" />
          </div>
          <p className="text-sm font-semibold mb-1">"Biar Teman Masih Ngantri, Kamu Udah Nyemil!"</p>
          <p className="text-sm text-gray-300">
            Aplikasi pemesanan jajanan sekolah tanpa ribet. Cepat, praktis, tinggal klik.
          </p>
        </div>

        {/* support */}
        <div className="flex flex-col items-center">
          <h3 className="text-md font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

        {/* site links */}
        <div className="flex flex-col items-center">
          <h3 className="text-md font-bold mb-4">Site links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/keranjang" className="hover:underline">Keranjang</a></li>
            <li><a href="/pesanan" className="hover:underline">Pesanan</a></li>
            <li><a href="/history" className="hover:underline">History</a></li>
          </ul>
        </div>

        {/* follow us */}
        <div className="flex flex-col items-center">
          <h3 className="text-md font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-9">
            <a href="#"><img src={instagram} alt="instagram" className="w-8 h-8" /></a>
            <a href="#"><img src={whatsapp} alt="whatsapp" className="w-8 h-8" /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-t border-gray-600" />

      {/* cpr */}
      <div className="text-center text-sm text-gray-300 pb-6">
        ©2025, JAJANKUY
      </div>
    </footer>
  );
}

export default Footer;
