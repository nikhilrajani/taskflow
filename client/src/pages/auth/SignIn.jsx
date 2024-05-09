import React, { useState } from 'react'
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const logInUser = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                try {
                    console.log('User logged in');
                    navigate('/tasks');
                } catch (error) {
                    console.log(error)
                }
            })
    }

  return (
    <div>
      <div>
        <p>
          Don't have an account? <Link to="/sign-up">Sign Up.</Link>  
        </p>
      </div>
      <form onSubmit={logInUser}>
        <h1>Log In</h1>
        <input type="email" placeholder="Enter your email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default SignIn
