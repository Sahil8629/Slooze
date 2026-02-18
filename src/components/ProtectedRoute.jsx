import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const { user } = useSelector(state => state.auth);

  if (!user) return <Navigate to="/login" />;
  if (allowedRole && user.role !== allowedRole)
    return <Navigate to="/products" />;

  return children;
}