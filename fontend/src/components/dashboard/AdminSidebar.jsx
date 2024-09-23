import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacific">Employee MS</h3>
      </div>
      <div className="px-4">
        {/* isActive là 1 thuộc tính của NavLink kiểm tra xem đường dẫn của route có khớp với đường dẫn hiện tại không */}
        <NavLink
          to="/admin-dashboard"
          className= {({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
          end
        >
          <FaTachometerAlt />
          <span>Dasboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaUsers />
          <span>Employee</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/departments"
          className= {({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaCalendarAlt />
          <span>Leaves</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
