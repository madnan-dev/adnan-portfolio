import { Link } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem 2rem',
    background: '#1a1a1a',
    color: '#fff'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/blogs" style={linkStyle}>Blogs</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}