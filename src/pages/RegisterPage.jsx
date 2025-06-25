import RegisterForm from "../components/RegisterForm";
import Logo from "../assets/logoBaru.png";
import Navbar from "../components/Navbar";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full bg-[#B4DC62] flex flex-col md:flex-row-reverse overflow-hidden relative">
      <Navbar />
      <div className="w-full flex justify-between items-center relative">
        
        {/* Form dengan blur - aktif sampai tablet */}
        <div className="absolute inset-0 z-10 flex items-center justify-center lg:hidden">
          <div className="backdrop-blur-xl bg-white/60 rounded-xl p-6 m-4 w-[90%] shadow-lg">
            <RegisterForm />
          </div>
        </div>

        {/* Gambar tetap di tempat, tidak berubah */}
        <img src={Logo} alt="" className="mt-20 w-200 z-0" />

        {/* Versi form biasa - hanya muncul di desktop */}
        <div className="hidden lg:block">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="md:hidden flex justify-center py-8">
  <img
    src={Logo}
    alt="Logo"
    className="w-40 h-auto object-contain drop-shadow-md"
  />
</div>


<div className="hidden md:flex relative w-1/2 h-auto items-center justify-center overflow-hidden">

  <div className="absolute inset-0 bg-[#B4DC62] transform skew-x-20 origin-top-right shadow-2xl z-0" />


  <div className="relative z-10 flex items-center justify-center w-full h-full ml-20">
    <img
      src={Logo}
      alt="Logo"
      className="max-w-lg drop-shadow-lg object-contain"
    />
  </div>
</div> */
}
