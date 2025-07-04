import React from 'react'
import Navbar from '../components/Navbar'
import Bg from '../assets/bgAbout2.png'
import foralgo from '../assets/foralgo.png'
import jajankuy from '../assets/jajankuysilver.png'
import foralgotext from '../assets/foralgotext.png'
import CardProfile from '../components/CardProfile'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundImage: 'linear-gradient(to top, #83A24A, #AEC77D, #D7EAAE)' }}>
      <Navbar />

      {/* hero section */}
      <div className="relative h-250 bg-[#4E5939B2] overflow-hidden">
        <img src={Bg} alt="background" className="w-full h-full object-cover" />

        <div
          className="absolute lg:left-47 px-15 top-100 text-center text-white z-50" style={{ textShadow: '0px 0px 6px rgba(0,0,0,0.9)' }} >
          <p className="font-bold text-[9vw] sm:text-[85px] leading-tight">Tentang Kami</p>
          <p className="font-medium text-[6vw] sm:text-[40px]">Yuk kenalan sama Jajankuy!</p>
        </div>
      </div>


      {/* about section */}
      <div className="w-full flex flex-col items-center py-20 px-4 sm:px-6 md:px-10 space-y-12 relative z-10">

        {/* jajankuy */}
        <div className="w-full max-w-screen-xl bg-[#9FB671] bg-opacity-20 backdrop-blur-md rounded-xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between shadow-md space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h2 className="text-white text-[10vw] sm:text-[48px] lg:text-[64px] font-bold mb-4">Mengenal Jajankuy</h2>
            <p className="text-white text-[4.5vw] sm:text-[22px] lg:text-[30px] font-normal">
              Jajankuy adalah platform pemesanan jajanan sekolah yang memudahkan siswa membeli makanan favorit tanpa antre.
              <br /><br />
              Berdiri sejak 2025, dimulai dari ide sederhana saat istirahat di sekolah.
            </p>
          </div>
          <img src={jajankuy} alt="icon" className="w-[60vw] sm:w-[300px] lg:w-[413px] h-auto" />
        </div>

        {/* foralgo */}
        <div className="w-full max-w-screen-xl bg-[#889E5D] rounded-xl p-6 flex flex-col lg:flex-row items-center justify-between shadow-md space-y-6 lg:space-y-0">
          <img src={foralgo} alt="icon" className="w-[50vw] sm:w-[200px] lg:w-[296px] h-auto" />
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <img src={foralgotext} alt="foralgotext" className="w-[70vw] sm:w-[250px] lg:w-[334px] h-auto mb-4" />
            <p className="text-white text-[4.5vw] sm:text-[22px] lg:text-[30px] font-normal ml-0 lg:ml-5">
              Foralgo adalah tim penggerak Jajankuy terdiri dari project manager, UI/UX Designer, Frontend Dev, Backend Dev, QA + Dev, dan CTO.
            </p>
          </div>
        </div>

        <div className="w-full max-w-screen-xl bg-[#748650] text-white font-bold text-[6vw] sm:text-[28px] lg:text-[35px] rounded-xl p-6 flex items-center justify-center shadow-md text-center">
          <p>Tim Dibalik Jajankuy</p>
        </div>

        {/* card profile */}
        <div className="w-full max-w-screen-xl">
          <CardProfile />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
