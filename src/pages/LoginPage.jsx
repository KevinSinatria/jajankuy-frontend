import LoginForm from "../components/LoginForm";
import Logo from "../assets/logoBaru.png";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    // <div className="bg-[#B4DC62] h-screen w-screen overflow-hidden ">
    //   <Navbar />
    //   <div className="lg:flex justify-between relative items-center mx-auto">
    //     <img src={Logo} alt="" className="mt-20 w-250 relative z-0 bottom-8"/>
    //       <div className="relative md:absolute left-1/3">
    //         <LoginForm />
    //       </div>
    //   </div>
    // </div>
    <div className="relative">
      {/* Konten utama paling bawah */}
      <div className="bg-[#B4DC62] h-screen absolute inset-0 z-[-20]"></div>

      {/* Background Shapes di atas layer hijau */}
      <div className="absolute inset-0 -z-10">
        <img src={Logo} alt="" className="mt-20 w-250 relative z-0 bottom-8" />
      </div>

      {/* Konten lain di atas semuanya */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex justify-center md:justify-end md:mt-0 py-40 px-4 md:px-20">
          <div className="w-full max-w-lg">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
