import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountPage } from "../pages/AccountPage";
import { HistorialPage } from "../pages/HistorialPage";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/history" element={<HistorialPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
