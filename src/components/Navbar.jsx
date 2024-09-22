import React from "react";
import logoImg from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
const Navbar = () => {
  return (
    <div>
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image className={classes.logoImage} src={logoImg} alt="logo"></Image>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodie Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
