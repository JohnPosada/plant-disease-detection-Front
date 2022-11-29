import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";

export const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<></>} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
