import React, { useState, useEffect } from "react";
import add from "../assets/add.png";

function UserForm({ onSubmit, onCancel, initialData }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "siswa",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        username: initialData.username || "",
        email: initialData.email || "",
        password: "",
        role: initialData.role || "siswa",
      });
    } else {
      setFormData({
        username: "",
        email: "",
        password: "",
        role: "siswa",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...initialData, ...formData });
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        {initialData ? "Edit User" : "Tambah User Baru"}
      </h1>

      <div className="bg-white w-full max-w-full sm:w-full md:w-[700px] lg:w-[873px] shadow-lg rounded-3xl border p-6 sm:p-8 md:p-10">
        {/* upload */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mb-8 sm:mb-10">
          <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden">
            <img
              src={add}
              alt="avatar"
              className="w-full h-full object-cover" />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg md:text-xl font-medium">
              Upload Foto Profile
            </p>
            <input
              type="file"
              className="mt-2 border px-2 py-1 rounded-md text-sm"
            />
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm sm:text-base">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Nama
            </label>
            <input
              name="username"
              type="text"
              placeholder="Nama"
              className="w-full p-3 border rounded-md"
              value={formData.username}
              onChange={handleChange}
              required />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required={!initialData} />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800" >
              {initialData ? "Update" : "Kirim"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400" >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
