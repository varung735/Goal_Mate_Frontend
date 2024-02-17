import React from 'react'

function Task({ name, description }) {
  return (
    <div className='p-2 flex items-center justify-between border-t-2 border-b-2 border-white'>
        <div>
            <h1 className='text-xl font-nunito font-semi-bold'>{name}</h1>
            <p className='font-inter font-light'>{description}</p>
        </div>
        <div className='flex items-center gap-2'>
            <img className='h-[40px] w-[40px]' 
                src="https://res.cloudinary.com/dr61rg1rq/image/upload/v1708164200/GoalMate/Assets/icons/nayyrwcf6yqethm6krkw.png" 
                alt="edit" />
            <img className='h-[40px] w-[40px]' 
                src="https://res.cloudinary.com/dr61rg1rq/image/upload/v1708164200/GoalMate/Assets/icons/xeqvlo1puv43glxqmgbj.png" 
                alt="delete" />
        </div>
    </div>
  )
}

export default Task