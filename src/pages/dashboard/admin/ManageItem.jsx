import React, { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  // Search & Pagination States
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle Delete Item
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res) {
          refetch();
          Swal.fire("Deleted!", "Your item has been removed.", "success");
        }
      }
    });
  };

  // Filter Menu Items
  const filteredMenu = menu.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price?.toString().includes(searchQuery)
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMenu.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);

  // Change Page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-green">Menu Items</span>
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or price..."
        className="input input-bordered w-full mb-4 p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Menu Items Table */}
      <div className="overflow-x-auto mb-8">
        <table className="table w-full border border-gray-300">
          {/* Table Head */}
          <thead className="bg-green text-white rounded-lg">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Item Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item._id} className="border-b border-gray-300">
                <th className="p-3">{indexOfFirstItem + index + 1}</th>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">${item.price}</td>
                <td className="p-3">
                  <Link to={`/dashboard/update-menu/${item._id}`}>
                    <button className="btn btn-xs bg-orange-500 text-white">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-xs text-red"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-5 mb-10 gap-2">
        <button
          className={`btn btn-sm px-4 ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-green text-white"
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${
              currentPage === i + 1 ? "bg-green text-white" : "bg-gray-300"
            }`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`btn btn-sm px-4 ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-green text-white"
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageItems;
