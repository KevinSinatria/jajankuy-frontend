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
      // Reset form saat initialData = null (tambah user)
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
    onSubmit({ ...initialData, ...formData }); // sertakan id jika edit
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8">
        {initialData ? "Edit User" : "Tambah User Baru"}
      </h1>

      <div className="bg-white w-[873px] shadow-lg rounded-3xl border p-10">
        {/* Bagian atas: Upload Foto */}
        <div className="flex gap-6 items-center mb-10">
          <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden">
            <img
              src={add}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-xl font-medium">Upload Foto Profile</p>
            <input type="file" className="mt-2 border px-2 py-1 rounded-md" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-1">
          <h1>Nama</h1>
          <input
            name="username"
            type="text"
            placeholder="Nama"
            className="w-full p-3 border rounded-md"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <h1>Email</h1>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <h1>Password</h1>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md"
            value={formData.password}
            onChange={handleChange}
            required={!initialData} // required hanya saat tambah user
          />

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              {initialData ? "Update" : "Kirim"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
