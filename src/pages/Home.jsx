import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Logout from "../components/Logout";
import { useNavigate } from "react-router";

export default function Home() {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();
  
  function handleLoginButton(){
    Navigate("/login")
  }

  return (
    <>
      {user ? 
        <div>
            Selamat Datang {user.nama}
            <button>
                <Logout/>
            </button>
        </div>
       : (
        <div>
          Selamat datang di jajankuy   
          <button className="ml-2" onClick={handleLoginButton}>
            Login
          </button>
          
          
        </div>
      )}
    </>
  );
}
