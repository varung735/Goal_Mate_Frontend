import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ pageProp }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='w-full h-16 bg-yellow flex flex-col items-center'>
      <div className='p-2 pb-0 w-full flex justify-between items-center'>
        <h1 className='font-nunito font-semi-bold text-4xl'>GoalMate</h1>
        <img className='h-[50px] w-[50px] md:hidden lg:hidden' 
          src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1706525713/GoalMate/Assets/icons/jlzosfswvwkgvpp1yyd5.png' 
          alt='bars'
          onClick={() => {setIsOpen(!isOpen)}}
        />
        <div className='hidden md:flex md:flex-row md:justify-around md:items-center md:gap-4'>
          {(pageProp === 'login' || pageProp === 'signup') && <div className='w-full h-full flex justify-center items-center'>
            <Link className='font-nunito font-semi-bold text-2xl' to={`/`}>Home</Link>
          </div>}
          {(pageProp === 'home-page' || pageProp === 'login') && <div className='w-full h-full flex justify-center items-center'>
            <Link className='font-nunito font-semi-bold text-2xl' to={`/signup`}>Signup</Link>
          </div>}
          {(pageProp === 'home-page' || pageProp === 'signup') && <div className='w-full h-full flex justify-center items-center'>
            <Link className='font-nunito font-semi-bold text-2xl' to={`/login`}>Login</Link>
          </div>}
        </div>
      </div>
      {/* Navbar Responsive */}
      { isOpen && <div className='z-10 w-full bg-yellow'>
        { (pageProp === 'login' || pageProp === 'signup') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`/`}>Home</Link>
        </div> }
        { (pageProp === 'home-page' || pageProp === 'signup') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`/login`}>Login</Link>
        </div> }
        { (pageProp === 'home-page' || pageProp === 'login') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`/signup`}>Signup</Link>
        </div> }
        { (pageProp === 'user' || pageProp === 'admin') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`tasks`}>Tasks</Link>
        </div> }
        { (pageProp === 'user' || pageProp === 'admin') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`expenses`}>Expenses</Link>
        </div> }
        { (pageProp === 'user' || pageProp === 'admin') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`journals`}>Journals</Link>
        </div> }
        { (pageProp === 'user' || pageProp === 'admin') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`profile`}>Profile</Link>
        </div> }
        {/* { (pageProp === 'user' || pageProp === 'admin') && <div className='w-full h-16 flex justify-center items-center border-t-2 border-white'>
          <Link className='font-nunito font-semi-bold text-2xl' to={`profile`}>Log Out</Link>
        </div> } */}
      </div> }
    </nav>
  )
}

export default Navbar