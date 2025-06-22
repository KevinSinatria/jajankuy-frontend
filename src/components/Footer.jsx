import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <footer className="bg-[#B4DC62] text-black">
      {/* Konten Utama */}
      <div className="max-w-screen-xl pl-20 pr-6 py-10 grid grid-cols-1 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold uppercase mb-3">JAJANKUY</h2>
          <p className="text-sm mb-5">
            Gunung adalah suatu bentuk permukaan tanah yang letaknya jauh lebih
            tinggi dari tanah-tanah di daerah sekitarnya
          </p>
          <div className="flex space-x-4">
            <img src={whatsapp} alt="whatsapp" className="w-10 h-10" />
            <img src={instagram} alt="instagram" className="w-10 h-10" />
          </div>
        </div>

        {/* Tengah */}
        <div className="flex gap-10 ml-4">
          <div>
            <h3 className="text-md font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>
          {/* Kanan */}
          <div>
            <h3 className="text-md font-bold mb-4">Site links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/keranjang" className="hover:underline">
                  Keranjang
                </a>
              </li>
              <li>
                <a href="/pesanan" className="hover:underline">
                  Pesanan
                </a>
              </li>
              <li>
                <a href="/history" className="hover:underline">
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black text-white px-20 text-sm py-4">
        Copyright © JAJANKUY
      </div>
    </footer>
  );
}

export default Footer;
