import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import bg from '../../assets/material_admin.png';

const LoginAdminPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);

    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center">
            <img
                src={bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* warpper form */}
            <div className="relative z-10 w-full h-[420px] flex flex-col md:flex-row justify-center lg:justify-end items-center px-6 lg:px-70 ">
                {/* form login */}
                <div className="w-full max-w-lg h-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-12 md:p-12 px-12">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">MASUK</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="mt-1 block w-full p-2 pr-10 border bg-white border-gray-300 rounded-lg shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-[#708A58]"
                                    placeholder="Email"
                                />
                                <Mail className="absolute top-3 right-3 w-5 h-5 text-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="mt-1 block w-full p-2 pr-10 border bg-white border-gray-300 rounded-lg shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-[#708A58]"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white p-2 mt-8 rounded-md hover:bg-gray-900 transition duration-200"
                        >
                            Masuk
                        </button>
                        <p className="text-sm text-center">
                            Belum mempunyai akun?
                            <a href="/register" className='text-blue-600'> Daftar</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginAdminPage;
