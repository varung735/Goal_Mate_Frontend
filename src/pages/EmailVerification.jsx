import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import users from '../api-calls/users';
import useQuery from '../hooks/useQuery';
import { useNavigate } from 'react-router-dom';

function EmailVerification() {
  const query = useQuery();
  const navigate = useNavigate();

  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');
  const [digitFive, setDigitFive] = useState('');
  const [digitSix, setDigitSix] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const email = query.get('email');

    users.generate_link(email)
    .then((success) => {setToken(success.token);console.log(success)})
    .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  const verifyEmail = async () => {
    let otp = digitOne + digitTwo + digitThree + digitFour + digitFive + digitSix;

    try {
      const user = await users.email_verification(token, otp);
  
      if(user.success){
        navigate('/user');
      }
      
    } catch (error) {
      console.log(error);
    }
  
  }
 
  return (
      <>
        <Navbar pageProp={'verify'} />
        <div className='h-[90vh] flex justify-center items-center'>
          <div className='p-4 flex flex-col gap-4 items-center justify-center bg-grey w-full md:w-2/5 h-2/5 rounded-lg'>
            <p className='mb-4 font-nunito font-semi-bold text-center text-2xl'>
              Enter the Otp received in mail to verify your email
            </p>
            <div className='flex items-center justify-center gap-4'>
              <input type='text' className='h-[50px] w-[50px] rounded-lg' value={digitOne} onChange={(e) => setDigitOne(e.target.value)}/>
              <input type='text' className='h-[50px] w-[50px] rounded-lg' value={digitTwo} onChange={(e) => setDigitTwo(e.target.value)}/>
              <input type='text' className='h-[50px] w-[50px] rounded-lg' value={digitThree} onChange={(e) => setDigitThree(e.target.value)}/>
              <input type='text' className='h-[50px] w-[50px] rounded-lg' value={digitFour} onChange={(e) => setDigitFour(e.target.value)}/>
              <input type='text' className='h-[50px] w-[50px] rounded-lg' value={digitFive} onChange={(e) => setDigitFive(e.target.value)}/>
              <input type='text' className='h-[50px] w-[50px] rounded-lg' value={digitSix} onChange={(e) => setDigitSix(e.target.value)}/>
            </div>
            <button className='p-4 w-full bg-yellow text-center font-nunito font-semi-bold rounded-md'
              onClick={() => verifyEmail()}>SUBMIT</button>
          </div>
        </div>
      </>
  )
}

export default EmailVerification