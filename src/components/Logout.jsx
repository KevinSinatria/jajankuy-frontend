import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

export default function Logout(){

    const { logout  } = useContext(AuthContext)

    function HandleLogout(){
        logout()    
    }

    return(
        <button onClick={HandleLogout}>Logout</button>
    )
}