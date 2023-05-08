import { Navigate, Route, Routes } from "react-router-dom";
import { ChangePasswordForm } from "../auth/components/ChangePasswordForm";
import { LoginPage } from "../auth/pages/LoginPage";
import { RecoveryPage } from "../auth/pages/RecoveryPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { LandingView } from "../views/LandingView";

export default () => {
  return (
    <div className="flex place-items-center justify-center h-full">
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/reset_password" element={<ChangePasswordForm />} />"
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};
