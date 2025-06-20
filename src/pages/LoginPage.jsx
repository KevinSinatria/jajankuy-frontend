import LoginForm from "../components/LoginForm";
import Logo from "../assets/Logo_2.png";

export default function LoginPage() {

  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden flex">
      
      <div className="relative h-full w-[60vw] overflow-hidden">
        <div className="absolute shadow-[22px_-3px_6px_0px_rgba(0,_0,_0,_0.1)] top-0 left-0 h-full w-full bg-[#B4DC62] transform -skew-x-12 origin-top-left z-0" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img src={Logo} alt="Login Illustration" className="w-3/4 max-w-md" />
        </div>
      </div>

      {/* Kanan: Login Form */}
      <div className="w-[40vw] flex flex-col justify-center items-center z-20">
        <LoginForm />                
      </div>
    </div>
  );
}
