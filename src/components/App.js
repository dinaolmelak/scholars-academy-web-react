import React,{useState,useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import fire from './fire';
import Login from './Login.js';
import Hero from './Hero.js';
import './App.css';
//import { GoogleApis,google } from 'googleapis';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';


const myAuth = getAuth();

const App=() =>{
    const [user, setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);

    const clearInputs = () =>{
        setEmail("");
        setPassword("");
    }
    const clearErrors = () =>{
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin = () =>{
        clearErrors();
        signInWithEmailAndPassword(myAuth,email,password)
        .catch(err =>{
            switch(err.code){
                case 'auth/Invalid-email':
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                    setEmailError(err.message);
                    
                    break;
                case 'auth/wrong-password':
                    setPasswordError(err.message);
                    
                    break;
            }
        });
        
    }

    const handleSignup = () =>{
        clearErrors();
        createUserWithEmailAndPassword(myAuth,email,password)
        .catch(err =>{
            switch(err.code){
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                    setEmailError(err.message);
                    
                    break;
                case 'auth/weak-password':
                    setPasswordError(err.message);
                    
                    break;
            }
        });
    }
    const handleLogout = () => {
        signOut(myAuth);
    }   

    const authListener = () =>{
        onAuthStateChanged(myAuth,(user) =>{
            if(user){
                clearInputs();
                console.log("auth Listened!!!!");
                setUser(user);
            }else{
                setUser("");
            }
        })
    }

    useEffect(()=>{
        authListener();
    },[]);

  return (
    <div className='App'>
        {
            user?(
            
            <Hero handleLogout={handleLogout} />
            ):(
            <Login
                email={email}
                password={password}
                setPassword={setPassword}
                setEmail={setEmail}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError} />
            )
        }
        
        
    </div>
  )
}

export default App;