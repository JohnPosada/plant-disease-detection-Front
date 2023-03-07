import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { RecoveryPage } from "../auth/pages/RecoveryPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { Home } from "../views/Home";

export default () => {
  return (
    <div className="flex place-items-center justify-center h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};
