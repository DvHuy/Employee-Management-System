import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Add Department</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="dep_name"
              className="text-sm font-medium text-gray-700"
            >
              Department Name
            </label>
            <input
              type="text"
              name="dep_name"
              placeholder="Enter Department Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="description"
              placeholder="Description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id=""
              placeholder="Description"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded text-white"
          >
            Add Department
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
