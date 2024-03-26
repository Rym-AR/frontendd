import React, { useState, useEffect } from 'react';
import './home.css';
import Stock from "../Gestionnaire/stock.js";
import '../Gestionnaire/stock.css';
import User from '../Admin/user.js';
import AddUser from './addUser.js';
// import './achat.css';

const Home = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath.split('/home')[1]);
  }, []);

  const affstock = () => {
    setActivePage('stock');
  };

  const affuser = () => {
    setActivePage('user');
  };

  const affadduser = () => {
    setActivePage('adduser');
  };
  

  return (
    <div className='home'>
      <div className="main">
        <div className="main-right">
          <nav className="navbar"> 
            <ul className='categories'>
              {/* <li className={activePage === 'stock' ? 'li1 active' : 'li1'} onClick={() => affstock()}>Stock </li>*/}
              <li className={activePage === 'adduser' ? 'li1 active' : 'li1'} onClick={() => affadduser ()}>Ajouter utilisateur</li> 
              <li className={activePage === 'user' ? 'li2 active' : 'li2'} onClick={() => affuser()}>Utilisateurs</li>
              {/* <li className={activePage === 'stock' ? 'li1 active' : 'li3'} onClick={() => affstock()}>Fournisseurs</li> */}
              <li className={activePage === 'stock' ? 'li4 active' : 'li4'} onClick={() => affstock()}>Statistique</li>
            </ul>   
            <ul className='boutons'>
               <li className='out'>se déconnecter</li>     
            </ul>      
          </nav>
          
        </div>
        <div className="main-left">
          <div className='page'>
            {activePage === 'stock' ? <Stock /> : null}
            {activePage === 'user' ? <User /> : null}
            {activePage === 'adduser' ? <AddUser /> : null}
          </div>
        </div>
      </div>
    </div>
  )
};
export default Home;