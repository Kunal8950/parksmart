import React from "react";
import classes from "./SidebarItems.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const SidebarItems = () => {
  return (
    <div className={classes.Main}>
      <SidebarItem src="../assets/dashboard.png">dashboard</SidebarItem>
      <SidebarItem src="../assets/reports.png">reports</SidebarItem>
      <SidebarItem src="../assets/schedular.png">scheduler</SidebarItem>
      <SidebarItem src="../assets/roles.png">roles & permission</SidebarItem>
      <SidebarItem src="../assets/request.png">roles request</SidebarItem>
      <SidebarItem src="../assets/admin.png">admin user management</SidebarItem>
      <SidebarItem src="../assets/payout.png">payout manager</SidebarItem>
      <SidebarItem src="../assets/hangfire.png">hangfire dashboard</SidebarItem>
      <SidebarItem src="../assets/settings.png">application settings</SidebarItem>
    </div>
  );
};

export default SidebarItems;
