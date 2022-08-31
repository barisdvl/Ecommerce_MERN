import {
  SearchOutlined,
  PermIdentityOutlined,
  ShoppingBasketOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const user = useSelector((state) => state.auth.currentUser);
  const cart = useSelector((state)=> state.cart)

  const logout = async () => {
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to={"/"} className="logo">
            BD Store
          </Link>
        </div>
        <div className="navbar-center">
          <div className="search">
            <SearchOutlined style={{ color: "gray", fontSize: 21 }} />
            <input
              type="text"
              placeholder="Searching for..."
              className="search-input"
            />
          </div>
        </div>
        <div className="navbar-right">
          {user ? (
            <div className="navbar-right-container">
              {user.full_name}
            <LogoutOutlined onClick={logout} className="navbar-right-icons" />
            </div>
          ) : (
            <Link to={"/login"}>
              <PermIdentityOutlined className="navbar-right-icons" />
            </Link>
          )}

          <Badge badgeContent={cart.quantity} color="primary" overlap="circular">
            <Link to={"/cart"}>
              <ShoppingBasketOutlined className="navbar-right-icons" />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
}
