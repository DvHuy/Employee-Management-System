import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useAuth();
  if (loading){
    return <div>Loading...</div>
  }
   return user? children : <Navigate to = "/login"/>
};

export default PrivateRoutes;

//Bảo vệ các trang cần người dùng phải đăng nhập.
// Nếu người dùng đã đăng nhập, cho phép họ truy cập vào các thành phần con. Nếu chưa, điều hướng họ đến trang đăng nhập.
