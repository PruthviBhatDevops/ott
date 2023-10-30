import React, { useEffect } from 'react'
import { LOGINOUTICON } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { showGPT } from "../store/slices/gpt"
import { SUPPORTED_LANGUAGE } from '../utils/LanguageConstants'
import { setLang } from "../store/slices/configSlice"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { logout, login } from "../store/slices/userSlice"
import { onAuthStateChanged } from "firebase/auth"



const Header = () => {

  const gptShow = useSelector(store => store.gpt?.showGPT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user && user.email){
        dispatch(login({ email: user?.email, accessToken: user?.accessToken, uid: user?.uid, photoURL: user?.photoURL }));
        navigate("/browse");
      }else{
        dispatch(logout());
        navigate("/")
      }
    })
  },[])

  const logoutUser = () => {
    signOut(auth).then(() => {
      dispatch(logout())
      navigate("/")
    }).catch(() => {
      navigate("/")
    })
  }

  const handleGPTSearch = () => {
    dispatch(showGPT())
  }

  const handleOnChange = (e) => {
    dispatch(setLang(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-[150px]' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo" />
      <div className='flex p-2'>
        {gptShow && (<select className="m-2 p-2 bg-slate-700 text-white" onChange={handleOnChange}>
          {SUPPORTED_LANGUAGE.map((lang) => <option value={lang.value} key={lang.value} >{lang.identifier}</option>)}
        </select>)}
        {user && user.uid && (<><button className='text-white rounded-lg  px-6 bg-purple-800 hover:bg-purple-600 mr-2' onClick={handleGPTSearch}>{gptShow ? "Home Page" : "GPT Search"}</button>
          <img className="w-9 h-9"
            alt='signout'
            src={LOGINOUTICON} />
          <button className='font-serif text-sm text-white' onClick={logoutUser}>(SignOut)</button></>)}
      </div>
    </div>
  )
}

export default Header
