import React from 'react'
import { useSelector  } from 'react-redux'
import lang  from "../utils/LanguageConstants"

const GPTSearchBar = () => {

  const langVal = useSelector(store => store.config?.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black grid grid-cols-12 w-1/2'>
        <input className='col-span-9 p-4 m-4' type='text' placeholder={lang[langVal].gptSearchPlaceHolder}></input>
        <button className='col-span-3 m-4 py-2 px-4 rounded-lg text-white bg-red-700'>{lang[langVal].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar