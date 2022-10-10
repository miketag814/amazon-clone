import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from "react-router-dom"
import {auth} from "./firebase"

function Login() {

    //Variables to save email/password
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault()

        //firebase sign in
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate("/", {replace: true})
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()

        //firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //if successfully created a user with email/password direct to homepage
                if (auth){
                    navigate("/", {replace: true})
                }
            })
            .catch(error => {
                alert(error.message)
            })
    }
    
  return (
        <div className='login'>
            <Link to='/'>
            <img className='login_logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt=''/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='login_signInButton'  type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing in you agree to the Amazon Fake Clone Conditions of Use Sale. Please see our Privacy Notice, our Contact Notice amd our Internet Based Ads Notice
                </p>

                <button className='login_registerButton' onClick={register}>Create Your Aamzon Account</button>

            </div>
        </div>
    
  )
}

export default Login