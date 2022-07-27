import {
  SearchOutlined,
  PermIdentityOutlined,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
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
          <Link to={"/login"}>
            <PermIdentityOutlined className="navbar-right-icons" />
          </Link>
          <Badge badgeContent="2" color="primary" overlap="circular">
            <Link to={"/cart"}>
              <ShoppingBasketOutlined className="navbar-right-icons" />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
}
