import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="font-bold">Store App</div>

      <div className="space-x-4">
        <Link to="/products">Products</Link>

        {user.role === "Manager" && (
          <Link to="/dashboard">Dashboard</Link>
        )}

        <button
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
          className="bg-red-500 px-2 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}