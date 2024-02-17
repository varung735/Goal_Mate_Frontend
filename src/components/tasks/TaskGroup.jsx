import React from 'react';
import Task from './Task';

function TaskGroup() {
  return (
    <div className='bg-grey mt-4 p-4 rounded-md md:w-1/2 lg:w-1/4'>
        <div className='mb-2 flex items-center justify-between'>
            <h1 className='text-xl font-nunito font-semi-bold'>Group Name</h1>
            <div className='flex items-center gap-4 md:gap-2'>
                <img className='w-[40px] h-[40px]'
                    src="https://res.cloudinary.com/dr61rg1rq/image/upload/v1708164200/GoalMate/Assets/icons/zgbwo8eb2p6wltamqu3u.png" 
                    alt="add" 
                />
                <img className='w-[40px] h-[40px]'
                    src="https://res.cloudinary.com/dr61rg1rq/image/upload/v1708164200/GoalMate/Assets/icons/nayyrwcf6yqethm6krkw.png" 
                    alt="edit" 
                />
                <img className='w-[40px] h-[40px]'
                    src="https://res.cloudinary.com/dr61rg1rq/image/upload/v1708164200/GoalMate/Assets/icons/xeqvlo1puv43glxqmgbj.png" 
                    alt="delete" 
                />
            </div>
        </div>
        <Task name={"Task Name"} description={"task description task description task description"}/>
        <Task name={"Task Name"} description={"Task description"}/>
        <Task name={"Task Name"} description={"Task description"}/>
        <Task name={"Task Name"} description={"Task description"}/>
    </div>
  )
}

export default TaskGroup