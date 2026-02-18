import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthLayout({ children, authentication, role }) {
  const { user } = useSelector((state) => state.auth);

  if (authentication && !user) {
    return <Navigate to="/login" />;
  }

  if (!authentication && user) {
    return <Navigate to="/products" />;
  }

  
  if (role && user?.role !== role) {
    return <Navigate to="/products" />;
  }

  return children;
}
