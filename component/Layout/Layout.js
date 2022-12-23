import React from "react";
import classes from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <div className={classes.Main}>
      <div className={classes.Sidebar}>
        <Sidebar />
      </div>
      <div className={classes.Container}>
		<Navigation />
		{props.children}
		</div>
    </div>
  );
};

export default Layout;
