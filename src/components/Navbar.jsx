import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  ["/", "Home"], ["/about", "About"], ["/services", "Our Seva"],
  ["/events", "Programs"], ["/gallery", "Gallery"], ["/join-us", "Join Us"]
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/assets/sks-logo.png" alt="Sarva Kalyana Seva logo" />
          <span><strong>Sarva Kalyana Seva</strong><small>From Celebration to Contribution</small></span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">☰</button>
        <nav className={open ? "open" : ""}>
          {links.map(([to,label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>
          ))}
        </nav>
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">{dark ? "☀" : "☾"}</button>
      </div>
    </header>
  );
}
