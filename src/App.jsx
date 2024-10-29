import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import EmailVerification from "./pages/email-verification";
import { UserProvider } from "./providers/UserProvider";
import Dashboard from "./pages/dashboard";
import AdminDashboard from "./pages/admin/dashboard";
import AttendancePage from "./pages/admin/attendance";
import MainPanel from "./pages/dashboard/components/main-panel";
import OrgDetail from "./pages/dashboard/components/org-detail-page";
import PasswordRecoveryPage from "./pages/password-recovery";
import NewPasswordPage from "./pages/password-recovery/new-password";
import ProtectAuth from "./pages/protect-auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/dashboard/:userId" element={<Dashboard />}>
        <Route index element={<MainPanel />} />
        <Route path=":org" element={<OrgDetail />} />
      </Route>

      <Route path="/admin/dashboard/:userId" element={<AdminDashboard />} />
      <Route
        path="/admin/dashboard/:userId/mark-attendance"
        element={<AttendancePage />}
      />

      <Route path="/recover-password" element={<PasswordRecoveryPage />} />
      <Route
        path="/new-password"
        element={
          <ProtectAuth>
            <NewPasswordPage />
          </ProtectAuth>
        }
      />
    </>
  )
);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
