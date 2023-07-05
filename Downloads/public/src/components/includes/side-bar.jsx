import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div class="sidebar">
      <div className="logo">
        <NavLink to="">
          <img src="images/logo.png" alt="" />
        </NavLink>
      </div>
      <ul class="nav_list">
        <li className={activeLink === "home" ? "active" : ""}>
          <NavLink to="home" onClick={() => handleLinkClick("home")}>
            Dashboard
          </NavLink>
        </li>
        <li className={activeLink === "client" ? "active" : ""}>
          <NavLink to="client" onClick={() => handleLinkClick("client")}>
            Clients/cards area
          </NavLink>
        </li>
        <li className={activeLink === "user" ? "active" : ""}>
          <NavLink to="user" onClick={() => handleLinkClick("user")}>
            User area
          </NavLink>
        </li>
        <li className={activeLink === "notes" ? "active" : ""}>
          <NavLink to="notes" onClick={() => handleLinkClick("notes")}>
            Promorion notes
          </NavLink>
        </li>
        <li className={activeLink === "setting" ? "active" : ""}>
          <NavLink to="setting" onClick={() => handleLinkClick("setting")}>
            Settings
          </NavLink>
        </li>
        <li className={activeLink === "kiddy" ? "active" : ""}>
          <NavLink to="kiddy" onClick={() => handleLinkClick("kiddy")}>
            Kiddy
          </NavLink>
        </li>
        <li className={activeLink === "costumer" ? "active" : ""}>
          <NavLink to="costumer" onClick={() => handleLinkClick("costumer")}>
            costumer
          </NavLink>
        </li>
        <li className={activeLink === "request" ? "active" : ""}>
          <NavLink to="request" onClick={() => handleLinkClick("request")}>
            costumer
          </NavLink>
        </li>
        <li className={activeLink === "admin" ? "active" : ""}>
          <NavLink to="admin" onClick={() => handleLinkClick("admin")}>
            costumer
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
