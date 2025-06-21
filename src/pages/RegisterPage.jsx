import RegisterForm from "../components/RegisterForm";
import Logo from "../assets/Logo_2.png";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row-reverse overflow-hidden">

      {/* Mobile: Logo di atas */}
      <div className="md:hidden flex justify-center py-8">
        <img
          src={Logo}
          alt="Logo"
          className="w-40 h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Desktop: Gambar + background hijau */}
      <div className="hidden md:flex relative w-1/2 h-auto items-center justify-center overflow-hidden">
        {/* Background hijau miring */}
        <div className="absolute inset-0 bg-[#B4DC62] transform skew-x-20 origin-top-right shadow-2xl z-0" />

        {/* Logo di tengah */}
        <div className="relative z-10 flex items-center justify-center w-full h-full ml-20">
          <img
            src={Logo}
            alt="Logo"
            className="max-w-lg drop-shadow-lg object-contain"
          />
        </div>
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 py-6 md:py-0 z-10">
        <RegisterForm />
      </div>
    </div>
  );
}
