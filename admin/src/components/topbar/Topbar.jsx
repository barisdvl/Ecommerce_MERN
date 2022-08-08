import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  LogoutRounded,
  InsertEmoticonOutlined,
} from "@mui/icons-material";

export default function Topbar() {

  const logout = async () => {
    localStorage.removeItem("persist:root");
    window.location.reload();    
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BD Store Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <button onClick={logout} className="topbarLogoutBtn">
              <LogoutRounded />
            </button>
          </div>
          <InsertEmoticonOutlined className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
