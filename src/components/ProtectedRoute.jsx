import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) return <Navigate to="/login" replace />;

  // Only Super Admin can access AdminPanel
  if (
    children?.type?.name === "AdminPanel" &&
    user?.email !== "pradeepnaidu147@gmail.com"
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
