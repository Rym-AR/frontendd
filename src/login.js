// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './login.css'

// // const Login=()=> {
    
// //   return (
// //     <div > 
// //     <div className="login-container">
     
// //       <h1>Login</h1>
// //       <form>
// //         <label htmlFor="email">Email:</label>
// //         <input type='email' id="email" name="email" />

// //         <label htmlFor="password">Password:</label>
// //         <input type="password" id="password" name="password" />

// //         <button type='submit'><Link to='/home'>Login</Link></button>        
// //       </form> 
// //     </div>
// //     </div>
// //   );
// // }
// // export default Login;

// import React, { useState } from 'react';
// import './login.css'
// import axios from 'axios'
// function Login() {
//   const[email,setEmail]=useState()
//   const[mdp,setPassword]=useState()
// function handleSubmit(event){
//   event.preventDefault();
//   axios.post('http://localhost:8080/login',{email,mdp})
//   .then(res=>console.log(res))
//   .catch(err=>console.log("ici  erreur mounia"))
// }
//   return (
//     <div > 
//     <div className="login-container">
     
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type='email' id="email" name="email" placeholder='entrer votre email...' onChange={e=>setEmail(e.target.value)} />
        

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" placeholder='entrer un password...' onChange={e=>setPassword(e.target.value)} />

//         <button type="submit" className='btn btn-success'>Login</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import './login.css'
// import axios from 'axios'
// function Login() {
//   const[email,setEmail]=useState()
//   const[mdp,setPassword]=useState()
// function handleSubmit(event){
//   event.preventDefault();
//   axios.post('http://localhost:8080/login',{email,mdp})
//   .then(res=>console.log(res))
//   .catch(err=>console.log("ici  erreur mounia"))
// }
//   return (
//     <div > 
//     <div className="login-container">
     
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type='email' id="email" name="email" placeholder='entrer votre email...' onChange={e=>setEmail(e.target.value)} />
        

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" placeholder='entrer un password...' onChange={e=>setPassword(e.target.value)} />

//         <button type="submit" className='btn btn-success'>Login</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Login

// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import './login.css'
// import axios from 'axios'

// function Login() {
//   const[email,setEmail]=useState()
//   const[mdp,setPassword]=useState()

//   function handleSubmit(event){
//     event.preventDefault();
  
//     // if (!email || !mdp) {
//     //   console.error("Email or password is undefined");
//     //   return; // Or display an error message to the user
//     // }
//     axios.post('http://localhost:8080/login',{email,mdp})
//     .then(res=>console.log("ca marche",res))
//     .catch(err=>console.log("ici  erreur mounia",err))
//   }

//   return (
//     <div > 
//     <div className="login-container">
     
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} method="POST">
//         <label htmlFor="email">Email:</label>
//         <input type='email' id="email" name="email" placeholder='entrer votre email...' onChange={e=>setEmail(e.target.value)} />
        

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" placeholder='entrer un password...' onChange={e=>setPassword(e.target.value)} />

//         {/* <button type="submit" className='btn btn-success'><Link to='/home'>Login</Link></button> */}
//         <button type="submit" className='btn btn-success'>Login</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Login;
//---------code fonctionne
// import React, { useState } from 'react';
// import './login.css'
// import axios from 'axios'

// function Login() {
//   const[email,setEmail]=useState()
//   const[mdp,setPassword]=useState()

//   function handleSubmit(event){
//     event.preventDefault();
//     axios.post('http://localhost:8080/login',{email,mdp})
//     .then(res=>console.log("ca marche",res))
//     .catch(err=>console.log("ici  erreur mounia"))
//   }

//   return (
//     <div > 
//     <div className="login-container">
     
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} method="POST">
//         <label htmlFor="email">Email:</label>
//         <input type='email' id="email" name="email" placeholder='entrer votre email...' onChange={e=>setEmail(e.target.value)} />
        

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" placeholder='entrer un password...' onChange={e=>setPassword(e.target.value)} />

//         <button type="submit" className='btn btn-success'>Login</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Login;
//------afficher msg incorrecte
// import React, { useState } from 'react';
// import './login.css';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [mdp, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     axios.post('http://localhost:8080/login', { email, mdp })
//       .then(res => {
//         if (res.data === 'succeful') {
//           console.log('Login successful');
//           window.location.href="/home";
//           // Redirection vers une autre page après connexion réussie
//         } else {
//           console.error('Login failed:', res.data);
//           setErrorMessage(res.data);
//         }
//       })
//       .catch(err => {
//         console.error('Login error:', err);
//         // Gestion des erreurs réseau ou autres problèmes inattendus
//       });
//   }

//   return (
//     <div className="login-container">
//       {errorMessage && <h4 className="error-message">{errorMessage}</h4>}
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} method="POST">        
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Entrer votre email..."
//           onChange={e => setEmail(e.target.value)}
//         />

//         <label htmlFor="password">Mot de passe:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Entrer un mot de passe..."
//           onChange={e => setPassword(e.target.value)}
//         />

//         <button type="submit" className="btn btn-success">Login</button>
//       </form>
//       {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
//     </div>
//   );
// }
// export default Login;

import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const[token, setToken] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then(res => {
        // setToken(res.data.token);
        // console.log("ca marche",res);
        if (res.data === 'succeful') {
          console.log('Login successful');
          window.location.href = "/home"; // Redirection on successful login
        } else {
          console.error('Login failed:', res.data);
          setErrorMessage(res.data); // Set error message here
        }
      })
      .catch(err => {
        console.error('Login error:', err);
        // Handle network errors or other unexpected issues
      });
  }

  function clearErrorMessage() {
    setErrorMessage(''); // Clear error message when form fields change
  }

  return (
    <div className="login-container">
      {errorMessage && <h4 className="error-message">{errorMessage}</h4>}
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="email">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Entrer votre nom d'utilisateur..."
          onChange={e => {
            setUsername(e.target.value);
            clearErrorMessage(); // Clear error on input change
          }}
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrer un mot de passe..."
          onChange={e => {
            setPassword(e.target.value);
            clearErrorMessage(); // Clear error on input change
          }}
        />

        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
}
export default Login;

