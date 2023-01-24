import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { Home } from "../views/Home";

export const PublicRouter = () => {
  return (
    <div className="flex place-items-center justify-center h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<></>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};
