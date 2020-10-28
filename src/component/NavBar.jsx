import React, { Component, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import Pdf from "./Resume.pdf";
import logo from "../images/logo.svg";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="mobileScreen">
          <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="nav-toggle">
                <NavLink to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </NavLink>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <NavLink exact activeClassName="link-active" to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <NavLink exact to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <ul className="links">
          <li>
            <NavLink
              exact
              className="link"
              activeClassName="link-active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="link"
              activeClassName="link-active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="link"
              activeClassName="link-active"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <a className="link" href={Pdf} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
