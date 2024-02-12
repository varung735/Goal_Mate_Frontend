import React from 'react'

function Error({ message }) {
  return (
    <div className='flex flex-col items-center'>
        <img className='h-[600px] w-[700px]' src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1707555983/GoalMate/Assets/i4hpma3b6imck7vmvkyf.jpg'
         alt='error' />
        <h1 className='text-4xl font-nunito font-semi-bold'>{message}</h1>
    </div>
  )
}

export default Error