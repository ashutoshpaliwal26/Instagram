'use client';
import React, { useState } from 'react'
import ProfileUpdate from './profileUpdater'

const Profile = () => {
    const [profileUpdater, setProfileUpdater] = useState('hidden w-full h-screen');
    function handelProfileUpdate(){
        if(profileUpdater === 'hidden w-full h-screen'){
            setProfileUpdater('fixed w-full h-screen');
        }else{
            setProfileUpdater('hidden w-full h-screen');
        }
    }
  return (
    <>
        <div className={profileUpdater}>
            <ProfileUpdate/>
        </div>
        <div className='w-full h-10 bg-white'>

        </div>
        <div className='flex items-center justify-between w-full h-fit p-3'>
            <div className='w-20 h-20 bg-yellow-500 rounded-full' onClick={handelProfileUpdate}>
                <img className='w-full h-full rounded-full bg-cover overflow-hidden' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s'/>
            </div>
            <div>
                <button className='bg-gray-200 w-fit h-fit rounded-xl text-xs font-bold p-2'>Edit Profile</button>
            </div>
            <div>
                <button className='bg-gray-200 w-fit h-fit rounded-xl text-xs font-bold p-2'>Archieve</button>
            </div>
        </div>
        <div className='m-3'>
            <p className='text-sm font-bold'>Ashutosh Paliwal</p>
            <p className='text-sm'>This is bio</p>
        </div>
        <div className='flex w-full h-20 border-t border-b border-gray-900'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <p className='text-sm font-bold'>4</p>
                <p className='text-sm'>Post</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <p className='text-sm font-bold'>12342</p>
                <p className='text-sm'>followers</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <p className='text-sm font-bold'>234423</p>
                <p className='text-sm'>following</p>
            </div>
        </div>
        <div className='grid grid-cols-3 '>
            <div className='p-1'>
                <img src='https://maharajatravels.in/wp-content/uploads/2023/05/bali.jpg'/>
            </div>
            <div className='p-1'>
                <img src='https://maharajatravels.in/wp-content/uploads/2023/05/bali.jpg'/>
            </div>
            <div className='p-1'>
                <img src='https://maharajatravels.in/wp-content/uploads/2023/05/bali.jpg'/>
            </div>
            <div className='p-1'>
                <img src='https://maharajatravels.in/wp-content/uploads/2023/05/bali.jpg'/>
            </div>
        </div>
    </>

  )
}

export default Profile