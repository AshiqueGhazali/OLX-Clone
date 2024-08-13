import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import olx from '../../assets/olx.png'
import lens from '../../assets/lens.png'
import arrow from '../../assets/arrow.png'
import search from '../../assets/search.png'
import Login from '../Login'
import { userAuth } from '../../context/AuthContext'

const Navbar = () => {
  const [loginPop, setLoginPop] = useState(false);
  const {currentUser,logout} = userAuth();

  const handleSellClick = ()=>{
    if(currentUser){
      window.location.href = '/addProduct'
    }else{
      setLoginPop(true)
    }
  }

  return (
    <>
    <div className='navbar  p-4'>
        <img src={olx} alt="" className='nav-logo w-11 h-7 mt-2' />
        <div className='location-input flex border-2 rounded-md border-spacing-1 w-64 p-2 border-black ml-5'>
            <img src={lens} alt="" className='w-6 h-5 mt-1'/>
            <input type="text" placeholder='Location' className='ml-3' />
            <img src={arrow} alt="" className='w-8 h-7'/>
        </div>
        <div className='search-input flex h-12 ml-4 border border-2 rounded-md border-black'>
          <input type="text" placeholder='Find Cars, Mobile phones and more' className='ml-3 w-96' />
          <img src={search} alt="" />
        </div>
        <div className='flex h-12 p-3 ml-10 cursor-pointer'>
          <h1 className='font-semibold'>ENGLISH</h1>
          <img src={arrow} alt="" className='w-8 h-7'/>
        </div>
        {currentUser ? (<><div className='flex h-12 p-3 ml-6 cursor-pointer'>
              <h1 className='font-bold text-lg'>{currentUser.displayName}</h1>
            </div>
            <div onClick={logout} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
              <h1 className='font-bold text-lg'>Logout</h1>
            </div>
          </>
        ) : (
          <div onClick={() => { setLoginPop(true) }} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
            <h1 className='font-bold text-lg'>Login</h1>
          </div>
        )}
        {/* <Link to={currentUser ? '/addProduct' :() => { setLoginPop(true) }}> */}
          <div onClick={handleSellClick} className='w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500'>
          <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
          </div>
        {/* </Link> */}
    </div>

    {loginPop?<Login setLoginPop={setLoginPop} />:<></>}

    </>
  )
}

export default Navbar