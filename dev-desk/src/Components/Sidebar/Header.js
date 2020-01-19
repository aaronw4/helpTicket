import React from 'react';
import NavLink from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      
      <NavLink activeClassName="active" to="/studentDashboard">
        Dashboard
      </NavLink>
      
      <NavLink activeClassName="active" to="/studentLogin">
        Login
      </NavLink>
      
      <NavLink activeClassName="active" to="/studentRegister">
        Register
      </NavLink>
    </nav>
  );
}

export default Header;