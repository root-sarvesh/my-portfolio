
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Portfolio
      </Link>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/terminal">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 