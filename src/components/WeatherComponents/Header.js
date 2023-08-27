import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isWeatherPage = location.pathname === '/weather';
  
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <Link to={isWeatherPage ? "/weatherrealtime" : "/weather"}>
          <button className="btn btn-outline-success me-2" type="button">
            {isWeatherPage ? 'Weather Realtime Button Text' : 'Weather Button Text'}
          </button>
        </Link>
      </form>
    </nav>
  );
};

export default Header;
