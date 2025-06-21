import LoginForm from "../components/LoginForm";
import Logo from "../assets/Logo_2.png";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden flex flex-col md:flex-row-reverse">

      {/* Kanan: Gambar + background hijau */}
      <div className="relative w-full md:w-[50vw] h-[40vh] md:h-full flex items-center justify-center overflow-hidden">
        {/* Background hijau miring */}
        <div className="absolute top-0 right-0 h-full w-full bg-[#B4DC62] transform skew-x-20 origin-top-right shadow-2xl z-0" />

        {/* Logo di tengah */}
        <div className="relative z-10 flex items-center justify-center h-full w-full ml-40">
          <img src={Logo} alt="Login Illustration" className="w-3/4 max-w-lg drop-shadow-lg" />
        </div>
      </div>

      {/* Kiri: Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-6 md:py-0 z-20">
        <RegisterForm/>
      </div>
    </div>
  );
}
