import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateSignIn } from "./../utils/ValidateSignIn"
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../store/slices/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { BG_URI } from '../utils/constants';


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
    const email = useRef(null);
    const password = useRef(null);

    const handle = () => {
        try {
            const message = validateSignIn(email.current.value, password.current.value);
            if (message) {
                setErrorMessage(message);
            } else if (isSignIn) {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user)
                        dispatch(login({ email: user?.email, accessToken: user?.accessToken, uid: user?.uid, photoURL: user?.photoURL }));
                        navigate("/browse")
                    })
                    .catch((error) => {
                        setErrorMessage(`${error.code} - ${error.message}`);
                    });

            } else {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log("Signed up user: ", user)
                    })
                    .catch((error) => {
                        setErrorMessage(`${error.code} - ${error.message}`);
                    });
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(`${errorCode} - ${errorMessage}`);
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_URI} alt="background"></img>
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-12 bg-black  mx-auto my-36 left-0 right-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-2 m-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && (<input type='text' placeholder='FullName' className='p-4 my-4 w-full rounded-lg bg-slate-600' />)}
                <input ref={email} type='text' placeholder='Email or phone number' className='p-4 my-4 w-full rounded-lg bg-slate-600' />
                <input ref={password} type='text' placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-slate-600' />
                <p className=' text-red-700 text-sm' >{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handle}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='text-sm cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Netflix? Sign up now." : "Already Registered? SignIn Now"} </p>
            </form>
        </div>
    )
}

export default Login
