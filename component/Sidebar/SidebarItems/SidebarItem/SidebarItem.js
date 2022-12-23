import React from "react";
import classes from "./SidebarItem.module.css";

const SidebarItem = (props) => {
  return (
    <div className={classes.Item}>
      <img src={props.src} />
      <span>{props.children}</span>
    </div>
  );
};

export default SidebarItem;
