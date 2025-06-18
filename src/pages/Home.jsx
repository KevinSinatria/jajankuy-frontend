import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import Logout from "../components/Logout"

export default function Home(){

    const {user} = useContext(AuthContext)

    return (
        <>  
            <h1>Home kan initeh {user ? `selamat datang ${user.nama}` : "Kamu belum login"}</h1>
            <button >{user ? <Logout/> : ''}</button>
        </>
    )
}