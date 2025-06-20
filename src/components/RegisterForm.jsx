import React from 'react'

export default function RegisterForm() {
   return (
    <>
      <div className="w-full max-w-md px-6">
        <h2 className="text-3xl font-bold text-center mb-8">MASUK</h2>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Email</label>
          <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
            <input
              type="email"
              className="flex-1 bg-transparent focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* tombol Register */}
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-500 transition"
          >
            Masuk
          </button>
        </div>

        {/* Link Daftar */}
        <p className="mt-6 text-center text-md">
          Sudah mempunyai akun?
          <a
            href="/login"
            className="text-blue-700 font-semibold hover:underline ml-1"
          >
            Masuk
          </a>
        </p>
      </div>
    </>
  );
}
