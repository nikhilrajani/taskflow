import React, { useState } from 'react'
import {auth} from '../../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const signUpUser = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                try {
                    console.log('New User Created!');
                    navigate('/tasks')
                } catch (error) {
                    console.log(error)
                }
            })
    }

  return (
    <div>
      <div>
        <p>
          Already have an account? <Link to="/">Sign In.</Link>  
        </p>
      </div>
      <form onSubmit={signUpUser}>
        <h1>Create an account</h1>
        <input type="email" placeholder="Enter your email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
