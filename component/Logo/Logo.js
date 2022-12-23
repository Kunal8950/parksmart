import React from "react";
import classes from "./Logo.module.css";
import Image from "next/image";
import { LogoImg } from "../../public/assets/Logo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src="../assets/logo.png" alt="logo" />
      {/* <Image src={LogoImg} /> */}
      <div>Parksmart</div>
    </div>
  );
};

export default Logo;
