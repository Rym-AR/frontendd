import React, { useState, useEffect , useContext } from 'react';
import { ThemeContext } from '../themeProvider';
// import '../Admin/btnDarkLight.css';
import '../Admin/home.css'
import Stock from './stock';

const GHome = () => {
  const [activePage, setActivePage] = useState('home');
  const { theme } = useContext(ThemeContext);
  const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  }

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath.split('/home')[1]);
  }, []);

  const affstock = () => {
    setActivePage('stock');
  };


  return (
    <div className='home' style={theme}>
      <div className="main">
        <div className="main-right">
          <nav className="navbar"> 
            <ul className='categories'>
              {/* <li className={activePage === 'stock' ? 'li1 active' : 'li1'} onClick={() => affstock()}>Stock </li>*/}
              <p className='title'>Machines</p>
              <li className={activePage === '' ? 'li1 active' : 'li1'} onClick={() => affstock()}>Machines en stock</li> 
              <li className={activePage === '' ? 'li2 active' : 'li2'} onClick={() => affstock()}>Ajouter Machines</li> 
              <li className={activePage === 'user' ? 'li3 active' : 'li3'} onClick={() => affstock()}>Machines attribuées</li>
              <li className={activePage === '' ? 'li4 active' : 'li4'} onClick={() => affstock()}>Attribuer des machines</li>  
              <p className='title'>Fournisseurs</p>             
              <li className={activePage === 'stock' ? 'li5 active' : 'li5'} onClick={() => affstock()}>Fournisseurs</li>
              <li className={activePage === '' ? 'li6 active' : 'li6'} onClick={() => affstock()}>Ajouter un fournisseur</li> 
              <p className='title'>Statistiques</p>
              <li className={activePage === 'stock' ? 'li7 active' : 'li7'} onClick={() => affstock()}>Statistiques</li>
            </ul>   
            <ul className='boutons'>
                {/* <li className='out' onClick={ThemeToggle}>mode</li> */}
                <div className='switch'>
                   <input type='checkbox' id='switcher'/>
                   <label for="switcher" id='switcher-label'/>
                </div>
               <li className='out'>se déconnecter</li>     
            </ul>      
          </nav>
          
        </div>
        <div className="main-left">
          <div className='page'>
            {activePage === 'stock' ? <Stock /> : null}
            {/* {activePage === 'user' ? <User /> : null} */}
          </div>
        </div>
      </div>
    </div>
  )
};
export default GHome;