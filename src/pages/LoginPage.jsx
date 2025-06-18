import React, {useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function LoginPage() {

    const { login } = useContext(AuthContext)
    const Navigate = useNavigate()

    function HandleClick(e){

        e.preventDefault()
        const userData = {
            nama: "Waqqir",
            kelas : "XI - RPL 2",
            umur : 17
        }

        login(userData)
        Navigate('/')
    }

    return(
        <div className="">
            <p>Login Pane cetitanya</p>
            <button onClick={HandleClick}>Login</button>
        </div>
    )
}
