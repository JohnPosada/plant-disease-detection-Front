import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRoute";

export const RouterApp = () => {
  const [status, setStatus] = useState("unauthenticated");
  return (
    <>
      <Navbar />

      <Routes>
        {status === "unauthenticated" ? (
          <>
            <Route path="/*" element={<PublicRouter />} />
          </>
        ) : (
          <Route path="/*" element={<PrivateRouter />} />
        )}
      </Routes>
    </>
  );
};
