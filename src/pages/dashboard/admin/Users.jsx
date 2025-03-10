import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // State for search query and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    (user.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
     user.email?.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then(() => {
      alert(`${user.name} is now an admin`);
      refetch();
    });
  };

  const handleDeleteUser = (user) => {
    axiosSecure.delete(`/users/${user._id}`).then(() => {
      alert(`${user.name} is removed from the database`);
      refetch();
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between m-4">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-green">Users</span>
      </h2>
        <h5>Total Users: {filteredUsers.length}</h5>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page when searching
          }}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          {/* Table Head */}
          <thead className="bg-green text-white rounded-lg">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <tr key={user._id}>
                  <th>{startIndex + index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-xs bg-indigo-500 text-white"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUser(user)} className="btn btn-xs bg-orange-500 text-white">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredUsers.length > 0 && (
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-green text-white"}`}
          >
            Previous
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-green text-white"}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;
