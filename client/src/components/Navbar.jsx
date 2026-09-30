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
      </nav>
    </header>
  );
}

export default Navbar;
