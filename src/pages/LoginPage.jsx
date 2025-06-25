import LoginForm from "../components/LoginForm";
import Logo from "../assets/logoBaru.png";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
  
      <div className="bg-[#B4DC62] h-screen w-screen overflow-hidden ">
        <Navbar /> 

    
        <div className="lg:flex justify-between relative items-center mx-auto">
          <img src={Logo} alt="" className="mt-20 w-200 relative z-0"/>
          <div className="lg:relative z-10 left-1/6 lg:mx-0 flex">
            <div className="lg:relative absolute z-10 left-1/6 lg:mx-0">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
  );
}
