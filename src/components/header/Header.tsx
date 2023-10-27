import { useRef } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";

import { Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Exo 1",
    path: "/todo",
  },
  {
    label: "Exo 2",
    path: "/counter",
  },
  {
    label: "Exo 3",
    path: "/profile/1",
  },
];

export default function Header() {
  const navRef = useRef<HTMLElement>(null);

  const location = useLocation();
  const path = location.pathname;

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Jean-Juste LEFEBVRE L2B Cergy</h3>
      <nav ref={navRef}>
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={path === link.path ? "active-tab" : ""}
          >
            {link.label}
          </a>
        ))}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          {/* <FaTimes /> */}
          <X />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {/* <FaBars /> */}
        <Menu />
      </button>
    </header>
  );
}
