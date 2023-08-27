import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const location = useLocation();
  const isWeatherPage = location.pathname === '/weather';
  
  return (
    <nav  className="navbar bg-dark"  >
      <form className="container-fluid justify-content-start" >
        <Link to={isWeatherPage ? "/weatherrealtime" : "/weather"}>
          <button className="btn btn-outline-success me-2" type="button" >
            {isWeatherPage ? 'Check Weather with realtime typing' : 'Check Weather without realtime typing'}
          </button>
        </Link>
      </form>
    </nav>
  );
};

export default Header;
