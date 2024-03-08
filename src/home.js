import React from "react";
import { Link } from "react-router-dom";
import './home.css';
function Home(){
  return(
    <div className="main">
    <div className="main-right">
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/stock">Stock</Link>
        </li>
        <li>
          <Link to="/achats">Achats</Link>
        </li>
        <li>
          <Link to="/sortie">Sortie</Link>
        </li>
      </ul>
    </nav>
    </div>
    <div className="main-left">

    </div>
    </div>
  )
}
export default Home;