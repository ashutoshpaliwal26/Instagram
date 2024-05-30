'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import {getUserCookies} from '@/service/auth';

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((formData) => ({
      ...formData,
      [name]: value,
    }))
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post('/api/signup', userData);
      console.log(responce.data);
      if(responce.data.success){
        localStorage.setItem('uid', responce.data.token);
        window.location = '/';
      }


    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='flex flex-col items-center justify-center w-full h-fit'>
      <div className=''>
        <img className='p-12' src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/pduebicdzqr9hmwdiot5.png' />
      </div>
      <div className='w-full'>
        <form className='flex flex-col items-center justify-center w-full' onSubmit={handelSubmit}>
          <input className='border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2' name='name' type='text' onChange={handleChange} placeholder='Name' />
          <input className='border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2' name='email' type='text' onChange={handleChange} placeholder='Email' />
          <input className='border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2' name='phone' type='number' onChange={handleChange} placeholder='Phone No' />
          <input className='border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2' name='username' type='username' onChange={handleChange} placeholder='Username' />
          <input className='border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2' name='password' type='text' onChange={handleChange} placeholder='Password' />
          <button className='border border-gray-300 rounded-md pl-3 w-3/4 text-xs h-10 mt-3 bg-blue-600 hover:to-blue-700 text-white font-bold' type='submit'>Sign Up</button>
        </form>
      </div>
      <div className='mt-4'>
        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/gnuhpklpmtefpleukene.png' />
      </div>
      <div className='mt-8'>
        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580774/instagram/v1brbru1r7jtiijenkz9.png' />
      </div>
      <div className='mt-10 text-blue-950'>
        <Link href={'/login'}>Already Have an Account</Link>
      </div>
    </div>
  )
}

export default SignUp