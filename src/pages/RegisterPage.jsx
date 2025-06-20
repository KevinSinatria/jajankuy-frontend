import LoginForm from "../components/LoginForm";
import Logo from "../assets/Logo_2.png";

export default function RegisterPage() {
  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden flex flex-col md:flex-row-reverse">
      {/* Kanan (sekarang): Background hijau miring + gambar */}
      <div className="relative h-[40vh] md:h-full w-full md:w-[60vw] overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-full bg-[#B4DC62] transform skew-x-12 origin-top-right z-0" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img src={Logo} alt="Login Illustration" className="w-3/4 max-w-md" />
        </div>
      </div>

      {/* Kiri (sekarang): Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-6 md:py-0 z-20">
        <LoginForm />
      </div>
    </div>
  );
}
