import { lazy, Suspense, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const RouterApp = () => {
  const PrivateRouter = lazy(() => import("./PrivateRouter"));
  const PublicRouter = lazy(() => import("./PublicRoute"));

  const [status, setStatus] = useState("unauthenticated");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};
