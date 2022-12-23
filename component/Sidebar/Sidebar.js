import React from "react";
import classes from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import SidebarItems from "./SidebarItems/SidebarItems";
const Sidebar = () => {
  return <div className={classes.Container}>
	<Logo/>
	<SidebarItems/>	
  </div>;
};

export default Sidebar;
