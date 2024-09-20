import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const RoleBaseRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!requiredRole.includes(user.role)) {
    <Navigate to="/unauthorized" />;
  }
  return user ? children : <Navigate to="/login" />;
};

export default RoleBaseRoutes;

// Bảo vệ các trang cần người dùng có vai trò cụ thể để truy cập.
// Nếu người dùng có vai trò phù hợp, cho phép họ truy cập vào các thành phần con. 
// Nếu không, điều hướng họ đến trang unauthorized. 
// Nếu chưa đăng nhập, điều hướng họ đến trang đăng nhập.
