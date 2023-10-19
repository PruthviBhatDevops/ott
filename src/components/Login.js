import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="background"></img>
            </div>
            <form className='w-3/12 absolute p-12 bg-black  mx-auto my-36 left-0 right-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-2 m-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && (<input type='text' placeholder='FullName' className='p-4 my-4 w-full rounded-lg bg-slate-600' />)}
                <input type='text' placeholder='Email or phone number' className='p-4 my-4 w-full rounded-lg bg-slate-600' />
                <input type='text' placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-slate-600' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='text-sm cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Netflix? Sign up now." : "Already Registered? SignIn Now"} </p>
            </form>
        </div>
    )
}

export default Login
