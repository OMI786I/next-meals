import React from "react";
import logoImg from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <div>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image
            className={classes.logoImage}
            src={logoImg}
            alt="logo"
            priority
          ></Image>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
