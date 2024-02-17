import React from 'react'
import TaskGroup from '../components/tasks/TaskGroup'

function Tasks() {
  return (
    <div className='p-3 w-full'>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-2'>
        <div className='mb-2 w-full md:w-1/2 lg:w-1/4 p-2 border-2 border-black rounded-lg flex items-center justify-between'>
          <h1 className='text-2xl font-nunito font-medium'>Filter Groups</h1>
          <div className='w-1/5 p-4 flex items-center justify-center bg-yellow rounded-md'>
            <div className='h-[10px] w-[10px] rotate-45 border-b-2 border-r-2 border-black'></div>
          </div>
        </div>
        <button className='w-full md:w-1/2 lg:w-1/4 p-2 rounded-lg bg-yellow text-2xl font-nunito font-medium'>Add Group</button>
      </div>
      <div className='flex flex-col md:gap-2 flex-wrap overflow-auto'>
        <TaskGroup />
        <TaskGroup />
        <TaskGroup />
        <TaskGroup />
        <TaskGroup />
      </div>
    </div>
  )
}

export default Tasks