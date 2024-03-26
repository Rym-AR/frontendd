import React,{useState} from "react";
import './user.css';
import axios from 'axios';

const User = () =>{
   const [values, setvalues] = useState({
      username:'',
      password:'',
      profile:'',
   });
   const handlechange =(event)=>{
      setvalues({...values, [event.target.name]: event.target.value});
   };
    
   const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post('http://localhost:3001/user', values)
        .then(res => {console.log('Registered successfully!!');
        setvalues({username:'', password:'', profile:''});
      })
        .catch(err => {console.error('Register error:', err);})
   };
   
return(
    <div className="user-page">
        <div className="user-main">
          <form className="user-form" method="POST" onSubmit={handleSubmit}>
          <h1 className="title-u">Utilisateurs</h1> 
             <label htmlFor="username">Nom d'utilisateur</label>
             <input type="text" id="username" name="username" onChange={handlechange}/>
             <label htmlFor="password">mot de passe</label>
             <input type="password" id="password" name="password" onChange={handlechange}/>
             <label htmlFor="profile">Profil</label>
             <input type="text" id="profile" name="profile" onChange={handlechange}/>
             
            <input type="submit"></input>
          </form>
        </div>
    </div>
);
};
export default User;
