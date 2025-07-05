import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SKPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#83A24A] via-[#AEC77D] to-[#83A24A] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-10">
        <h1 className="text-[32px] sm:text-[36px] md:text-3xl lg:text-[48px] font-bold mb-6 mt-20 sm:mt-24">
          Syarat dan Ketentuan – Jajankuy
        </h1>
        <p className="mb-6 leading-relaxed font-medium text-base sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify">
          Dengan mengakses dan menggunakan aplikasi Jajankuy, pengguna menyatakan telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku tanpa pengecualian. Jajankuy adalah platform digital yang menyediakan layanan pemesanan makanan, minuman, serta produk kebutuhan lainnya seperti alat tulis dan sembako yang tersedia di lingkungan sekolah. Setiap pengguna bertanggung jawab penuh atas akun pribadinya, termasuk dalam menjaga kerahasiaan data login dan aktivitas yang dilakukan melalui aplikasi. Kami tidak bertanggung jawab atas penyalahgunaan akun yang disebabkan oleh kelalaian pengguna. Setelah pesanan dikonfirmasi, pengguna tidak dapat membatalkannya kecuali terdapat kesalahan atau ketidaksesuaian dari pihak penjual. Jajankuy juga tidak mengizinkan penggunaan aplikasi untuk tujuan yang melanggar hukum, menipu, atau merugikan pihak lain.
        </p>
        <p className="leading-relaxed font-medium text-base sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 text-justify">
          Pihak Jajankuy memiliki hak untuk menolak, membatasi, atau menghentikan akses pengguna terhadap layanan jika ditemukan adanya pelanggaran terhadap ketentuan ini atau penggunaan yang tidak wajar. Setiap perubahan atau pembaruan dalam layanan dan kebijakan dapat dilakukan sewaktu-waktu tanpa pemberitahuan sebelumnya, namun akan selalu diinformasikan melalui aplikasi. Pengguna disarankan untuk rutin membaca halaman syarat dan ketentuan guna mengetahui informasi terbaru. Dengan terus menggunakan layanan Jajankuy setelah adanya perubahan tersebut, pengguna dianggap menyetujui kebijakan baru yang berlaku. Jajankuy berkomitmen untuk memberikan layanan terbaik yang aman, nyaman, dan bermanfaat bagi seluruh pengguna, baik siswa, guru, maupun pengelola kantin sekolah.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SKPage;
