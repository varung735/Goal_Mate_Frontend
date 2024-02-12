import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CustomError from '../utils/customError';
import users from '../api-calls/users';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const signup = async () => {
    try{
      if(password !== conPassword){
        throw new CustomError('Passwords Donot Match');
      }

      const user = await users.signup(name, email, password);

      if(!user.isEmailVerified){
        navigate(`/verify?email=${email}`);
      }
      else{
        navigate('/user');
      }
    }catch(error){
      console.log(error);
    }
  }

  const handleSubmit = () => {
   signup();
  }

  return (
    <>
        <Navbar pageProp={'signup'}/>
        <div className='h-[90vh] p-2 flex justify-center'>
          {/* Image Holder */}
          <div className='hidden h-full md:w-1/2 lg:w-3/4 md:block md:bg-signup md:bg-contain lg:bg-cover md:bg-no-repeat md:bg-center'></div>
          {/* Content Holder */}
          <div className='h-full w-full md:w-1/2 lg:w-1/4 flex justify-start items-center'>
            <div className='p-2 md:mr-4 bg-grey rounded-lg w-full flex flex-col gap-4'>
              <h1 className='font-nunito font-semi-bold text-4xl text-center'>Signup</h1>
              <div className='flex flex-col'>
                <label htmlFor="email">Name</label>
                <input className='h-10 rounded-lg' name='name' type="text" placeholder='Enter the Email' value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>
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
              <div className='flex flex-col'>
                <label htmlFor="email">Confirm Password</label>
                <input className='h-10 rounded-lg' name='email' type="password" placeholder='Enter the Password' value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)} />
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

export default Signup