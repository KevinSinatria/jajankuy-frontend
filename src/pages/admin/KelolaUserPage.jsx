import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import user from "../../assets/Users.png";
import ProfileUserInAdmin from "../../components/ProfileUserInAdmin";
import AddUser from "../../components/AddUser";
import UserForm from "../../components/UserForm";

const KelolaUserPage = () => {
  const initialUsers = [
    { id: 1, username: "waqqir", email: "waqqir@gmail.com", role: "siswa" },
    { id: 2, username: "syifa", email: "syifa@gmail.com", role: "siswa" },
    { id: 3, username: "azzam", email: "azzam@gmail.com", role: "siswa" },
    { id: 4, username: "daffa", email: "daffa@gmail.com", role: "siswa" },
    { id: 5, username: "rendy", email: "rendy@gmail.com", role: "siswa" },
    { id: 6, username: "agung", email: "agung@gmail.com", role: "siswa" },
    { id: 7, username: "kevin", email: "kevin@gmail.com", role: "siswa" },
    { id: 8, username: "yassir", email: "yassir@gmail.com", role: "siswa" },
    { id: 9, username: "nazmi", email: "nazmi@gmail.com", role: "siswa" },
    { id: 10, username: "shafa", email: "shafa@gmail.com", role: "siswa" },
    {
      id: 11,
      username: "ghaisani",
      email: "ghaisani@gmail.com",
      role: "siswa",
    },
    { id: 12, username: "luthfi", email: "luthfi@gmail.com", role: "siswa" },
    { id: 13, username: "rian", email: "rian@gmail.com", role: "siswa" },
    { id: 14, username: "alif", email: "alif@gmail.com", role: "siswa" },
    { id: 15, username: "rizal", email: "rizal@gmail.com", role: "siswa" },
    { id: 16, username: "niko", email: "niko@gmail.com", role: "siswa" },
    { id: 17, username: "waqqir", email: "waqqir2@gmail.com", role: "siswa" },
    { id: 18, username: "syifa", email: "syifa2@gmail.com", role: "siswa" },
    { id: 19, username: "azzam", email: "azzam2@gmail.com", role: "siswa" },
    { id: 20, username: "daffa", email: "daffa2@gmail.com", role: "siswa" },
    { id: 21, username: "rendy", email: "rendy2@gmail.com", role: "siswa" },
    { id: 22, username: "agung", email: "agung2@gmail.com", role: "siswa" },
    { id: 23, username: "kevin", email: "kevin2@gmail.com", role: "siswa" },
    { id: 24, username: "yassir", email: "yassir2@gmail.com", role: "siswa" },
    { id: 25, username: "nazmi", email: "nazmi2@gmail.com", role: "siswa" },
    { id: 26, username: "shafa", email: "shafa2@gmail.com", role: "siswa" },
    {
      id: 27,
      username: "ghaisani",
      email: "ghaisani2@gmail.com",
      role: "siswa",
    },
    { id: 28, username: "luthfi", email: "luthfi2@gmail.com", role: "siswa" },
    { id: 29, username: "rian", email: "rian2@gmail.com", role: "siswa" },
    { id: 30, username: "alif", email: "alif2@gmail.com", role: "siswa" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleSubmitUser = (userData) => {
    if (editingUser) {
      // Edit mode
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === editingUser.id ? { ...u, ...userData } : u
        )
      );
    } else {
      // Add mode
      const newId = users.length + 1;
      setUsers([...users, { id: newId, ...userData }]);
    }

    setShowForm(false);
    setEditingUser(null); // reset edit mode
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddUser = (newUser) => {
    const newId = users.length + 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setShowForm(false);
  };

  // ini bisa di ganti sama sweatalert 
  const handleDeleteUser = (id) => {
    const confirmed = window.confirm("Yakin ingin menghapus user ini?");
    if (confirmed) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex justify-center items-center">
        <div className="w-300 p-10 flex flex-col justify-center items-center">
          {/* Konten kamu di sini */}

          {showForm ? (
            <UserForm
              onSubmit={handleSubmitUser}
              onCancel={() => {
                setShowForm(false);
                setEditingUser(null);
              }}
              initialData={editingUser}
            />
          ) : (
            <>
              <div className="text-4xl font-bold text-center mb-9">
                Lihat Siapa Saja User Jajankuy!
              </div>

              <div className="rounded-2xl shadow-2xl mb-5 p-15 border">
                <div className="flex gap-5 items-center">
                  <h1 className="text-4xl font-bold">Users</h1>
                  <img src={user} alt="" />
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="grid grid-cols-5 gap-15">
                    <AddUser
                      onClick={() => {
                        setEditingUser(null); // reset mode edit
                        setShowForm(true); // tampilkan form
                      }}
                    />

                    {currentUsers.map((user) => (
                      <ProfileUserInAdmin
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        email={user.email}
                        role={user.role}
                        onEdit={() => handleEditUser(user)}
                        onDelete={() => handleDeleteUser(user.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`px-3 py-2 rounded ${
                      currentPage === i + 1
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KelolaUserPage;
