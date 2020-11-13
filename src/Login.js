import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { db, auth } from './firebase'

function Login(){
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            if(auth){
                history.push('/')
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            console.log(auth)
            if (auth){
                history.push('/')
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    return(
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='data:image/png;base64,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'
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='login_signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing in you agree to Amazon's
                    Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads
                    Notice.
                </p>
                <button className='login_registerButton' onClick={register}>Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;