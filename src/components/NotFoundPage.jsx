import React from 'react'
import notfound from '../assets/notfound3.png'

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-[#779B55] to-[#CAD8B0]">
            <img src={notfound} />
            <div className='absolute text-white text-shadow-md mt-18 ml-94 font-semibold text-[31px]'>
                <a href="/">
                    <p>Kembali ke beranda</p>
                </a>
            </div>
        </div>
    )
}

export default NotFoundPage