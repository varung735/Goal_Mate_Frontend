import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SideNav({ pageProp }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState('tasks');

  useEffect(() => {
    navigate('tasks');
     // eslint-disable-next-line
  }, []);

  const navigation = (route) => {
    navigate(`${route}`);
    setActive(route);
  }

  return (
    <div style={isOpen ? {width: '300px'} : {width: '55px'}} className='hidden bg-grey rounded-lg md:h-[86vh] md:mt-5 md:ml-5 md:flex md:flex-col'>
        {/* Side-nav-link */}
        <div className='mb-2 h-12 flex items-center hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <img className='ml-2 mt-1 w-[40px] h-[40px]' 
              src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1706525713/GoalMate/Assets/icons/jlzosfswvwkgvpp1yyd5.png' 
              alt='bars'/>
        </div>
        {/* Side-nav-link */}
        <div className={active === 'tasks' ? 
          'w-full h-12 bg-yellow flex items-center gap-6 hover:cursor-pointer' :
          'w-full h-12 flex items-center gap-6 hover:cursor-pointer'} onClick={() => {navigation('tasks')}}>
            <img className='ml-2 w-[40px] h-[40px]'
              src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1707890415/GoalMate/Assets/icons/x3mt8xbb6iukdk7e23cl.png' 
              alt='tasks'/>
            {isOpen && <h1 className='font-inter font-medium text-2xl'>Tasks</h1>}
        </div>
        {/* Side-nav-link */}
        <div className={active === 'expenses' ? 
          'w-full h-12 bg-yellow flex items-center gap-6 hover:cursor-pointer' :
          'w-full h-12 flex items-center gap-6 hover:cursor-pointer' } onClick={() => {navigation('expenses')}}>
            <img className='ml-2 w-[40px] h-[40px]'
              src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1707890489/GoalMate/Assets/icons/rmntfgsg5gjgr4gnra7e.png' 
              alt='expenses'/>
            {isOpen && <h1 className='font-inter font-medium text-2xl'>Expenses</h1>}
        </div>
        {/* Side-nav-link */}
        <div className={active === 'journals' ? 
          'w-full h-12 bg-yellow flex items-center gap-6 hover:cursor-pointer' :
          'w-full h-12 flex items-center gap-6 hover:cursor-pointer' } onClick={() => {navigation('journals')}}>
            <img className='ml-2 w-[40px] h-[40px]'
              src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1707891064/GoalMate/Assets/icons/u6p3lhorpm1utk8akhu2.png' 
              alt='journals'/>
            {isOpen && <h1 className='font-inter font-medium text-2xl'>Journals</h1>}
        </div>
        {/* Side-nav-link */}
        <div className={active === 'profile' ? 
          'w-full h-12 bg-yellow flex items-center gap-6 hover:cursor-pointer' :
          'w-full h-12 flex items-center gap-6 hover:cursor-pointer' } onClick={() => {navigation('profile')}}>
            <img className='ml-2 w-[40px] h-[40px]'
              src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1707890540/GoalMate/Assets/icons/xuh2mimz2mjsmzbbewbh.png' 
              alt='profile'/>
            {isOpen && <h1 className='font-inter font-medium text-2xl'>Profiles</h1>}
        </div>
        {/* Side-nav-link */}
        <div className='mt-auto w-full h-12 flex items-center gap-6 hover:cursor-pointer'>
            <img className='ml-2 w-[40px] h-[40px]'
              src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1707891080/GoalMate/Assets/icons/yaqp4jnevkhcqdxsbswo.png' 
              alt='logout'/>
            {isOpen && <h1 className='font-inter font-medium text-2xl'>Log Out</h1>}
        </div>
    </div>
  )
}

export default SideNav