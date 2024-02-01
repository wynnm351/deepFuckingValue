"use client";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <Menu
      id="sidebar"
      isOpen={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <a id="home" className="menu-item font-kurri" href="/">
        Home
      </a>
      <a id="about" className="menu-item font-kurri" href="/about">
        About
      </a>
      <a id="contact" className="menu-item font-kurri" href="/contact">
        Tokenomics{" "}
      </a>
    </Menu>
  );
}
