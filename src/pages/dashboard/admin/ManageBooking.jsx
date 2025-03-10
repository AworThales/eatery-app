import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageBooking = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Pagination & Search states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return res.data;
    },
  });

  const handleConfirm = async (order) => {
    await axiosSecure.patch(`/payments/${order._id}`).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Confirmed",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    });
  };

  // Filtered orders based on search input
  const filteredOrders = orders.filter((order) =>
    order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic based on filtered orders
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between m-4">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-green">Orders</span>
      </h2>
        <h5>Total Orders: {filteredOrders.length}</h5>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by email or transaction ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          <thead className="bg-green text-white rounded-lg">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>Status</th>
              <th>Confirm Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{startIndex + index + 1}</th>
                  <td>{order.email}</td>
                  <td>{order.transactionId}</td>
                  <td>${order.price}</td>
                  <td>
                    {order.status === "Order pending" ? (
                      <span className="text-orange-500">Order pending</span>
                    ) : (
                      <span className="text-green">Confirmed</span>
                    )}
                  </td>
                  <td className="text-center">
                    {order.status === "confirmed" ? (
                      "Done"
                    ) : (
                      <button
                        onClick={() => handleConfirm(order)}
                        className="btn btn-xs bg-green text-white"
                      >
                        <GiConfirmed />
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs bg-orange-500 text-white">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {filteredOrders.length > 0 && (
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

export default ManageBooking;
