import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import users from '../api-calls/users';
import Snackbar from '../components/Snackbar';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const user = await users.login(email, password);
      
      if(!user.isEmailVerified){
        navigate(`/verify?email=${email}`);
      }
      else if(user.role === "ADMIN") {
        navigate('/admin');
      }
      else{
        navigate('/user');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <Navbar pageProp={'login'}/>
        <Snackbar />
        <div className='h-[90vh] p-2 flex justify-center'>
          {/* Image Holder */}
          <div className='hidden h-full md:w-1/2 lg:w-3/4 md:block md:bg-login md:bg-contain lg:bg-cover md:bg-no-repeat md:bg-center'></div>
          {/* Content Holder */}
          <div className='h-full w-full md:w-1/2 lg:w-1/4 flex justify-start items-center'>
            <div className='p-2 md:mr-4 bg-grey rounded-lg w-full flex flex-col gap-4'>
              <h1 className='font-nunito font-semi-bold text-4xl text-center'>Login</h1>
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input className='h-10 rounded-lg' name='email' type="email" placeholder='Enter the Email' value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email">Password</label>
                <input className='h-10 rounded-lg' name='email' type="password" placeholder='Enter the Password' value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className='p-2 w-full bg-yellow rounded-lg font-inter font-medium' onClick={() => handleSubmit()}>SUBMIT</button>
              <p className='text-center'>-- or --</p>
              <button className='p-2 w-full bg-yellow rounded-lg font-inter font-medium'>Google</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login