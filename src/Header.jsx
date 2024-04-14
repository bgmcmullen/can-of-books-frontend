import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from '../auth/AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
        </NavItem>
        <NavItem><Link to="/About" className="nav-link" style={{ color: 'white' }}>About</Link>
        </NavItem>
        <NavItem><Link to="/Profile" className="nav-link" style={{ color: 'white' }}>Profile</Link>
        </NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <AuthButtons />
      </Navbar>

      </>
    )
  }
}

export default Header;
