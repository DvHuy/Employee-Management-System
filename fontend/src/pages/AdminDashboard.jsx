import React from "react";
import { useAuth } from "../context/authContext";
import AdminSidebar from "../components/dashboard/AdminSidebar";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <AdminSidebar/>
    </div>
  )
};

export default AdminDashboard;
