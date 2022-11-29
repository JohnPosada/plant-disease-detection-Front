import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/result" element={<></>} />
      <Route path="/account" element={<></>} />
      <Route path="/history" element={<></>} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
