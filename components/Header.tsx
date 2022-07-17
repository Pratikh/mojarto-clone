import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerStyle from "../styles/Header.module.css";

const navLinks = [
  {
    label: "Paintings",
    path: "/",
  },
  {
    label: "Printmaking",
    path: "/",
  },
  {
    label: "Digital Art",
    path: "/",
  },
  {
    label: "Drawing",
    path: "/",
  },
  {
    label: "Prints",
    path: "/",
  },
  {
    label: "Sculpure",
    path: "/",
  },
  {
    label: "Photography",
    path: "/",
  },
  {
    label: "Advisory",
    path: "/",
  },
  {
    label: "",
    path: "/",
  },
];

export default function Header() {
  return (
    <header>
      <nav className={headerStyle.supportNavigation}>
        <span className={headerStyle.iconAndSpan}>
          <span className="material-symbols-outlined">call</span>
          <a href="tel:+911234567890">+911234567890</a>
        </span>
        <span className={headerStyle.iconAndSpan}>
          <span className="material-symbols-outlined">help</span>
          <Link href="/">Customer Support</Link>
        </span>
        <span className={headerStyle.iconAndSpan + " tooltip"}>
          <span className="material-symbols-outlined">info</span>
          <span>Shipping Worldwide</span>
          <span className="tooltiptext">
            Charges applies for international Shipping
          </span>
        </span>
      </nav>

      <div className={headerStyle.mainNavDiv}>
        <Link href={"/"}>
          <a>
            <Image
              src={"/mojarto-logo.png"}
              width={110}
              height={23}
              alt="Logo"
            />
          </a>
        </Link>
        <div className={headerStyle.navLinksArtworks}>
          {navLinks.map((data) => (
            <Link href={data.path} key={data.label}>
              {data.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
