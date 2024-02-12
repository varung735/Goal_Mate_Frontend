import React from 'react'

function Footer() {
  return (
    <footer className='bg-yellow'>
        <div className='p-2 md:p-4 flex flex-row justify-between items-center'>
            <h1 className='font-inter font-semi-bold text-3xl'>GoalMate</h1>
            <div className='flex flex-rwo items-center gap-2'>
                <img className='h-[50px] w-[50px]' alt='social-icon' src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1706609217/GoalMate/Assets/icons/qcnqhiwz06tspwaiqhio.png' />
                <img className='h-[50px] w-[50px]' alt='social-icon' src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1706609216/GoalMate/Assets/icons/iv3dbpayq1b8qzqn5lzl.png' />
                <img className='h-[50px] w-[50px]' alt='social-icon' src='https://res.cloudinary.com/dr61rg1rq/image/upload/v1706609216/GoalMate/Assets/icons/pzcwj7wsemt4kltgpwmh.png' />
            </div>
        </div>
        <div className='border-t-2 border-white'>
            <p>Developed by <a href='https://varun-gupta.netlify.app/' target='blank'>Varun Gupta</a></p>
        </div>
    </footer>
  )
}

export default Footer