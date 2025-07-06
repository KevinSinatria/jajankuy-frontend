import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Smartphone,
  PhoneCall,
  User,
  ShoppingCart,
  Search,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #7A9744, #A0B96E, #B6C892)',
      }} >
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-center mb-6 mt-10 md:mt-20">
          Butuh Bantuan?
        </h1>

        {/* searchbar */}
        <div className="relative w-full mb-10">
          <input
            type="text"
            placeholder="Masukkan pertanyaan atau kata kunci di sini"
            className="w-full h-[56px] md:h-[70px] pl-4 pr-10 py-2 rounded-lg text-md md:text-lg text-black bg-[#D9E8BBE3] placeholder-[#4B593169] focus:outline-none" />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>

        {/* fitur kontainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-16">
          {[
            { title: 'Cara Menggunakan Aplikasi', icon: Smartphone },
            { title: 'Akun & Keamanan', icon: User },
            { title: 'Status Pesanan', icon: ShoppingCart },
            { title: 'Hubungi Kami', icon: PhoneCall },
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full max-w-[609px] h-[200px] md:h-[289px] bg-[#D9E8BBE3] rounded-lg shadow flex items-center px-6 md:px-14 cursor-pointer text-[#4B5931] transition duration-300">
              <item.icon className="w-[64px] h-[64px] md:w-[98px] md:h-[98px] mr-4 md:mr-8" />
              <span className="text-[24px] md:text-[34px] font-bold text-left leading-snug">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-8 text-center mt-16">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white text-white p-4">
              <div
                className="flex justify-between items-center cursor-pointer font-bold text-lg md:text-[24px]"
                onClick={() => toggleFAQ(index)}>
                <span>Q : {faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-base md:text-[24px] font-semibold">
                  A : {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
