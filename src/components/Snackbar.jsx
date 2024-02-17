import React from 'react';
import errorStatus from '../utils/errorStatus';

function Snackbar({ status, message }) {
  return (
    <div className={status === errorStatus.success ? 
    'absolute top-[10%] left-[25%] md:left-[40%] h-12 w-1/2 md:w-1/5 flex items-center justify-center bg-success gap-2 rounded-lg' : 
    'absolute top-[10%] left-[25%] md:left-[40%] h-12 w-1/2 md:w-1/5 flex items-center justify-center bg-error gap-2 rounded-lg'}>
        <div>
            {status === errorStatus.success ? <h1 className='font-semi-bold'>&#10003;</h1> : <h1 className='font-semi-bold'>&#10007;</h1>}
        </div>
        <div>
            <h1 className='font-medium'>{message}</h1>
        </div>
    </div>
  )
}

export default Snackbar