import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { useAuthStore } from "../hooks/useAuthStore";
import { Spinner } from "../components/Spinner";

export const RouterApp = () => {
  const PrivateRouter = lazy(() => import("./PrivateRouter"));
  const PublicRouter = lazy(() => import("./PublicRoute"));

  const { status } = useAuthStore();
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="h-[8%]">
          <Navbar />
        </div>

        <div className="h-[92%]">
          <Routes>
            {status === "unauthenticated" ? (
              <>
                <Route path="/*" element={<PublicRouter />} />
              </>
            ) : (
              <Route path="/*" element={<PrivateRouter />} />
            )}
          </Routes>
        </div>
      </Suspense>
    </>
  );
};
