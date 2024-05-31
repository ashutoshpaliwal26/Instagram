'use client';
import { La_Belle_Aurore } from 'next/font/google';
import React, { useState } from 'react'

const ProfileUpdate = () => {
    const [cancelClick, setCancelClick] = useState('fixed w-full h-screen');
    const handelCancelClick = () =>{
        if(cancelClick === 'fixed w-full h-screen'){
            setCancelClick('hidden w-full h-screen');
        }else{
            setCancelClick('fixed w-full h-screen');
        }
    }
    console.log(cancelClick);
    
    return (
        <div className={cancelClick}>

        <div className='flex items-center  justify-center w-full h-screen bg-gray-900 bg-opacity-50'>
            <div className='w-4/6 h-60 flex flex-col bg-white rounded-2xl'>
                <div className='flex h-32 justify-center items-center text-2xl border-b border-gray-400'>
                    <p>Change a Profile Photo</p>
                </div>
                <div className='flex flex-col h-full items-center justify-around text-sm font-bold '>
                    <div className='flex items-center text-blue-500 justify-center w-full h-full border-b border-gray-400'>
                        <label>
                            Change Photo
                        <input type='file' className='hidden w-full h-full'/>
                        </label>
                        
                    </div>
                    <div className='flex items-center text-red-800 justify-center w-full h-full border-b border-gray-400'>
                        <p>Remove Photo</p>
                    </div>
                    <div className='flex items-center text-blue-500 justify-center w-full h-full hover:cursor-pointer' onClick={handelCancelClick}>
                        <p>Cancel</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default ProfileUpdate
