import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar no-print">
      <NavLink to="/" className="navbar-brand">
        🎓 Certificate Builder
      </NavLink>
      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/builder">Builder</NavLink>
        <a href="https://github.com/Suryashish/certificate_plus" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
