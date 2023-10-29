import React from 'react'
import { LOGINOUTICON } from "../utils/constants"
import { useDispatch } from "react-redux"
import { showGPT } from "../store/slices/gpt"
import { SUPPORTED_LANGUAGE } from '../utils/LanguageConstants'
import { setLang } from "../store/slices/configSlice"


const Header = () => {

  const logoutUser = () => {

  }

  const dispatch = useDispatch();

  const handleGPTSearch = () => {
    dispatch(showGPT())
  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    dispatch(setLang(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-[150px]' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo" />
      <div className='flex p-2'>
        <select className="m-2 p-2 bg-slate-700 text-white" onChange={handleOnChange}>
          {SUPPORTED_LANGUAGE.map((lang) => <option value={lang.value}  key={lang.value} >{lang.identifier}</option>)}
        </select>
        <button className='text-white rounded-lg  px-6 bg-purple-800 hover:bg-purple-600 mr-2' onClick={handleGPTSearch}>GPT Search</button>
        <img className="w-9 h-9"
          alt='signout'
          src={LOGINOUTICON} />
        <button className='font-serif text-sm text-white' onClick={logoutUser}>(SignOut)</button>
      </div>
    </div>
  )
}

export default Header
