// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {BrowserRouter,Routes,Route}from "react-router-dom";
// import Home from "./Admin/home";
import Login from "./login";
import AddUser from "./Admin/addUser";
// import Stock from"./stock";
// import Achat from "./achat";
import User  from "./Admin/user";
import GHome from "./Gestionnaire/Ghome";

function App(){
return(
  <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Login/>}></Route>
        {/* <Route path="/home" element={<Home/>}></Route> */}
        <Route path="/home" element={<GHome/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/adduser" element={<AddUser/>}></Route>
        {/* <Route path="/stock" element={<Stock/>}></Route>
        <Route path="/achat" element={<Achat/>}></Route> */}
      </Routes>
  </BrowserRouter>
)
}
export default App;
