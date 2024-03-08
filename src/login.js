import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login=()=> {
    
  return (
    <div > 
    <div className="login-container">
     
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type='email' id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type='submit'><Link to='/home'>Login</Link></button>        
      </form> 
    </div>
    </div>
  );
}
export default Login;