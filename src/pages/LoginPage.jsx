import LoginForm from "../components/LoginForm";
import Logo from "../assets/Logo_2.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">

      
      <div className="md:hidden flex justify-center py-8">
        <img
          src={Logo}
          alt="Logo"
          className="w-40 h-auto object-contain drop-shadow-md"
        />
      </div>

      
      <div className="hidden md:flex relative w-1/2 items-center justify-center overflow-hidden">
      
        <div className="absolute inset-0 bg-[#B4DC62] transform -skew-x-12 origin-top-left shadow-xl z-0" />
        
      
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <img src={Logo} alt="Login Illustration" className="w-3/4 max-w-lg drop-shadow-lg object-contain" />
        </div>
      </div>

      
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 py-6 md:py-0 z-10">
        <LoginForm />
      </div>
    </div>
  );
}
