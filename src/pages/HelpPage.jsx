import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Smartphone,
  PhoneCall,
  User,
  ShoppingCart,
  Search,
  ArrowLeft,
  Shield,
  Clock,
  Heart,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import login from '../assets/jajankuyloginpage.png';
import beranda from '../assets/jajankuyberanda.png';
import detail from '../assets/jajankuydetail2.png';
import proses from '../assets/jajankuyproses.png';
import gantipw from '../assets/jajankuygantipw.png';
import profile from '../assets/jajankuyprofile.png';
import history from '../assets/jajankuyhistory2.png';

const faqs = [
  {
    question: 'Apa itu Jajankuy?',
    answer:
      'Jajankuy adalah aplikasi pemesanan jajanan yang memudahkan siswa untuk pesan makanan dan minuman favorit mereka di kantin sekolah, tanpa perlu antre lama.',
  },
  {
    question: 'Apakah Jajankuy hanya untuk makanan dan minuman?',
    answer:
      'Nggak cuma itu loh! Di Jajankuy kamu juga bisa pesan kebutuhan lain seperti ATK dan sembako.',
  },
  {
    question: 'Bagaimana cara pesan jajanan lewat Jajankuy?',
    answer:
      'Cukup login ke aplikasi, pilih menu yang kamu mau, lalu klik pesan, isi form yang disediakan. Tunggu notifikasi kalau pesananmu sudah siap diambil. Gampang, kan?',
  },
  {
    question: 'Bagaimana jika pesanan saya salah atau ada kendala?',
    answer:
      'Tenang, kamu bisa langsung hubungi admin kantin lewat fitur bantuan di aplikasi. Kami siap bantu biar jajananmu tetap happy!',
  },
];

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHowToUse, setShowHowToUse] = useState(false);
  const [showAccountSecurity, setShowAccountSecurity] = useState(false);
  const [showOrderGuide, setShowOrderGuide] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #7A9744, #A0B96E, #B6C892)',
      }} >
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {!showHowToUse && !showAccountSecurity && !showOrderGuide && !showContact ? (
          <>
            <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-center mb-6 mt-10 md:mt-20">
              Butuh Bantuan?
            </h1>
            <div className="relative w-full mb-10">
              <input
                type="text"
                placeholder="Masukkan pertanyaan atau kata kunci di sini"
                className="w-full h-[56px] md:h-[70px] pl-4 pr-10 py-2 rounded-lg text-md md:text-lg text-black bg-[#D9E8BBE3] placeholder-[#4B593169] focus:outline-none" />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-16">
              {/* button pndah halaman */}
              {[
                { title: 'Cara Menggunakan Aplikasi', icon: Smartphone, action: () => setShowHowToUse(true) },
                { title: 'Akun & Keamanan', icon: User, action: () => setShowAccountSecurity(true) },
                { title: 'Pesan Jajanan', icon: ShoppingCart, action: () => setShowOrderGuide(true) },
                { title: 'Hubungi Kami', icon: PhoneCall, action: () => setShowContact(true) },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full max-w-[609px] h-[200px] md:h-[289px] bg-[#D9E8BBE3] rounded-lg shadow flex items-center px-6 md:px-14 cursor-pointer text-[#4B5931] transition duration-300" >
                  <item.icon className="w-[64px] h-[64px] md:w-[98px] md:h-[98px] mr-4 md:mr-8" />
                  <span className="text-[24px] md:text-[34px] font-bold text-left leading-snug">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-8 text-center mt-16">
              FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white text-white p-4">
                  <div
                    className="flex justify-between items-center cursor-pointer font-bold text-lg md:text-[24px]"
                    onClick={() => toggleFAQ(index)} >
                    <span>Q : {faq.question}</span>
                    {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {activeIndex === index && (
                    <p className="mt-2 text-base md:text-[24px] font-semibold">
                      A : {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : showHowToUse ? (
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 text-[#4B5931]">
            <div className="text-center mb-12">
              <div className="relative bg-[#F5FCE6E3] h-[95px] rounded-full flex items-center justify-center">
                <button
                  onClick={() => setShowHowToUse(false)}
                  className="absolute left-6 cursor-pointer" >
                  <ArrowLeft className="w-8 h-8 md:w-12 md:h-12 text-[#4B5931]" />
                </button>
                <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 text-[#4B5931]">
                  <Smartphone className="hidden md:inline w-8 h-8 md:w-12 md:h-12" />
                  Cara Menggunakan Aplikasi
                </h2>
              </div>

            </div>
            {[{
              title: '1. Registrasi / Login Akun',
              steps: [
                'Buka aplikasi Jajankuy.',
                'Pilih menu login di pojok kanan atas.',
                'Pilih menu Daftar untuk membuat akun baru, lalu isi data seperti nama, email, dan password.',
                'Jika sudah punya akun, cukup pilih Login dan masukkan email serta password kamu.',
              ],
              img: login,
              reverse: true
            }, {
              title: '2. Telusuri Menu Jajanan',
              steps: [
                'Kamu bisa langsung melihat daftar produk di halaman Beranda, login untuk melihat lebih banyak produk.',
                'Gunakan fitur Search atau filter kategori untuk menemukan produk yang kamu mau (makanan, minuman, ATK, sembako, dll).',
              ],
              img: beranda,
              reverse: false
            }, {
              title: '3. Tambah ke Keranjang',
              steps: [
                'Klik produk yang kamu inginkan untuk melihat detailnya.',
                'Tekan tombol Keranjang untuk memasukkan produk ke daftar belanja kamu.',
              ],
              img: detail,
              reverse: true
            }, {
              title: '4. Cek dan Proses Pesanan',
              steps: [
                'Buka ikon keranjang di navibasi bawah.',
                'Periksa pesanannya. Jika sudah sesuai, tekan Pesan Sekarang.',
                'Konfirmasi pesananmu.',
              ],
              img: proses,
              reverse: false
            }].map((section, index) => (
              <div
                key={index}
                className={`bg-[#D9E8BBE3] rounded-4xl p-6 md:p-10 shadow flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-12 mb-12`} >
                <img src={section.img} alt={section.title} className="w-full h-[190px] md:w-[400px] border-2 rounded-lg shadow-lg" />
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                    {section.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <p className="text-start text-sm md:text-base mt-6 font-medium">
              *Kalau kamu mengalami kendala saat menggunakan aplikasi, kamu bisa kembali ke menu bantuan dan pilih <span className="font-semibold">Hubungi Kami</span> untuk mendapatkan dukungan langsung.
            </p>
          </div>
        ) : showAccountSecurity ? (
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 text-[#4B5931]">
            <div className="text-center mb-12">
              <div className="relative bg-[#F5FCE6E3] h-[95px] rounded-full flex items-center justify-center">
                <button
                  onClick={() => setShowAccountSecurity(false)}
                  className="absolute left-4 md:left-6 cursor-pointer" >
                  <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#4B5931]" />
                </button>
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2 text-[#4B5931]">
                  <User className="hidden md:inline w-8 h-8 md:w-12 md:h-12" />
                  Akun dan Keamanan
                </h2>
              </div>
            </div>

            {[
              {
                title: '1. Bagaimana cara mengganti password?',
                steps: [
                  'Masuk ke menu Profil / Pengaturan Akun.',
                  'Pilih opsi Ubah Password.',
                  'Masukkan password lama, lalu masukkan password baru.',
                  'Simpan perubahan.',
                ],
                img: gantipw,
                reverse: true,
              },
              {
                title: '2. Bagaimana cara mengubah email atau nama?',
                steps: [
                  'Buka menu Profil.',
                  'Pilih data yang ingin diubah (email atau nama).',
                  'Masukkan data baru dan simpan.',
                ],
                img: profile,
                reverse: false,
              },
              {
                title: '3. Bagaimana cara menjaga akun tetap aman?',
                steps: [
                  'Jangan bagikan password ke siapa pun.',
                  'Logout dari perangkat umum setelah selesai.',
                ],
                icon: <Shield className="w-[100px] h-[100px] text-[#4B5931]" />,
                reverse: true,
              },
              {
                title: '4. Bagaimana jika ingin hapus akun?',
                steps: [
                  'Hubungi tim Jajankuy lewat menu Hubungi Kami.',
                  'Sertakan alasan dan data akun yang ingin dihapus.',
                  'Tim kami akan bantu proses penghapusan dalam 1x24 jam.',
                ],
                img: profile,
                reverse: false,
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`bg-[#D9E8BBE3] rounded-4xl p-6 md:p-10 shadow flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-12 mb-12`} >
                {/* img */}
                {section.img ? (
                  <img
                    src={section.img}
                    alt={section.title}
                    className="w-full h-[190px] md:w-[250px] rounded-lg" />
                ) : (
                  <div className="flex justify-center items-center w-full md:w-[250px] h-[190px]">
                    {section.icon}
                  </div>
                )}

                {/* konten */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                    {section.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <p className="text-start text-sm md:text-base mt-6 font-medium">
              *Kalau kamu mengalami kendala saat menggunakan aplikasi, kamu bisa kembali ke menu bantuan dan pilih{' '}
              <span className="font-semibold">Hubungi Kami</span> untuk mendapatkan dukungan langsung.
            </p>
          </div>

        ) : showOrderGuide ? (
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 text-[#4B5931]">
            <div className="text-center mb-12">
              <div className="relative bg-[#F5FCE6E3] h-[95px] rounded-full flex items-center justify-center">
                <button
                  onClick={() => setShowOrderGuide(false)}
                  className="absolute left-4 md:left-6 cursor-pointer" >
                  <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#4B5931]" />
                </button>
                <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-4 text-[#4B5931]">
                  <ShoppingCart className="hidden md:inline w-8 h-8 md:w-12 md:h-12" />
                  Panduan Pesan Jajanan
                </h2>
              </div>
            </div>

            {[
              {
                title: '1. Pilih Jajanan Yang Akan Dibeli',
                steps: [
                  'Masuk ke aplikasi dan cari produk lewat halaman Beranda.',
                  'Kamu bisa pakai fitur Search atau telusuri berdasarkan kategori (makanan, minuman, ATK, sembako, dll).',
                  'Klik "lihat" untuk lihat detail, harga, dan deskripsi produk.'
                ],
                img: beranda,
                reverse: false,
              },
              {
                title: '2. Masukkan ke Keranjang',
                steps: [
                  'Setelah yakin, tekan tombol Tambah ke Keranjang.',
                  'Ulangi langkah ini kalau mau beli beberapa item sekaligus.'
                ],
                img: proses,
                reverse: true,
              },
              {
                title: '3. Cek Keranjang dan Pesanan',
                steps: [
                  'Klik ikon Keranjang di atas.',
                  'Pastikan semua item, jumlah, dan total harga sudah sesuai.',
                  'Lanjutkan dengan klik tombol Pesan.'
                ],
                img: detail,
                reverse: false,
              },
              {
                title: '4. Tunggu dan jajanan siap',
                steps: [
                  'Kamu akan dapat notifikasi saat pesanan siap diambil.'
                ],
                img: history,
                reverse: true,
              }
            ].map((section, index) => (
              <div
                key={index}
                className={`bg-[#D9E8BBE3] rounded-4xl p-6 md:p-10 shadow flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-12 mb-12`} >
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full h-[190px] md:w-[250px] border-2 rounded-lg shadow-lg"
                />
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                    {section.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <p className="text-sm md:text-base mt-6 font-medium">
              *Kalau ada masalah saat pemesanan, kamu bisa langsung ke menu{' '}
              <span className="font-semibold">Hubungi Kami</span> biar bisa langsung kami bantu.
            </p>
          </div>

        ) : showContact ? (
          <div className="min-h-screen text-[#4B5931] py-16 px-4">
            <div className="text-center mb-12">
              <div className="relative bg-[#F5FCE6E3] h-[95px] rounded-full flex items-center justify-center">
                <button
                  onClick={() => setShowContact(false)}
                  className="absolute left-4 md:left-6 cursor-pointer" >
                  <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#4B5931]" />
                </button>
                <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-4 text-[#4B5931]">
                  <PhoneCall className="hidden md:inline w-8 h-8 md:w-12 md:h-12" />
                  Hubungi Kami
                </h2>
              </div>
            </div>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-60 rounded-xl p-8 md:p-16 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <PhoneCall className="w-8 h-8 md:w-10 md:h-10" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Hubungi Kami</h1>
                  <p className="text-sm md:text-base font-medium">
                    Punya pertanyaan, kendala, atau masukan? Tim Jajankuy siap bantu kamu kapan aja!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                <div>
                  <h2 className="font-bold text-lg mb-2">Ajukan Pertanyaan Langsung</h2>
                  <textarea
                    placeholder="Tulis pertanyaan kamu di sini..."
                    className="w-full h-[100px] p-4 rounded-md bg-[#F1F7DA] text-[#4B5931] placeholder-[#4B5931B2] border border-[#4B5931] focus:outline-none" />
                  <button className="mt-4 w-full bg-[#4B5931] text-white py-2 rounded-md hover:bg-[#3b4a28] transition">
                    Kirim
                  </button>

                  <div className="mt-8 space-y-4 text-sm font-medium text-[#4B5931]">
                    <div className="flex items-start gap-2">
                      <p>
                        <span className="flex items-center mb-1 gap-2 font-bold">
                          <Clock className="w-5 h-5" />
                          Jam Operasional Bantuan:
                        </span>
                        Senin – Jum’at : 08.00 - 16.00 WIB
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <p>
                        <span className="flex items-center mb-1 gap-2 font-bold">
                          <Heart className="w-5 h-5" />
                          Saran dan Masukkan
                        </span>
                        Kami selalu terbuka untuk menerima ide, kritik, maupun pujian dari kamu. Masukan kamu sangat berarti untuk meningkatkan layanan Jajankuy.
                      </p>
                    </div>
                    <p className="text-xs italic mt-2">
                      Jangan ragu untuk berbagi, karena tanpa kamu... Jajankuy cuma “kuy” doang...
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-bold text-lg mb-2">Form Kontak Lengkap</h2>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full mb-4 p-3 rounded-md bg-[#F1F7DA] text-[#4B5931] border border-[#4B5931] focus:outline-none" />
                  <input
                    type="text"
                    placeholder="Email/No HP"
                    className="w-full mb-4 p-3 rounded-md bg-[#F1F7DA] text-[#4B5931] border border-[#4B5931] focus:outline-none" />
                  <select
                    className="w-full mb-4 p-3 rounded-md bg-[#F1F7DA] text-[#4B5931] border border-[#4B5931] focus:outline-none" >
                    <option value="">Kategori Kendala</option>
                    <option value="login">Login / Daftar</option>
                    <option value="pesanan">Masalah Pesanan</option>
                    <option value="pembayaran">Pembayaran</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                  <textarea
                    placeholder="Pesan atau Keluhan"
                    className="w-full h-[100px] p-4 rounded-md bg-[#F1F7DA] text-[#4B5931] border border-[#4B5931] focus:outline-none mb-4" />
                  <button className="w-full bg-[#4B5931] text-white py-2 rounded-md hover:bg-[#3b4a28] transition">
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;