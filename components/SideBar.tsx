'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

import { FaXTwitter } from 'react-icons/fa6'
import { HiDotsHorizontal, HiHome } from 'react-icons/hi'

export default function SideBar() {
    const { data: session }:any = useSession();
    console.log(session);
    return (
        <div className='  h-screen flex flex-col justify-between md:gap-10  p-3  border-r   fixed'>
            <div className='flex flex-col gap-4 '>
                <Link href='/'>
                    <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 ' />
                </Link>
                <Link
                    href='/'
                    className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 md:w-[50%]'
                >
                    <HiHome className='w-10 h-7' />
                    <span className='font-bold hidden xl:inline '>Home</span>
                </Link>
                {session ? (
                    <button
                        className='bg-sky-700 text-white rounded-xl  hover:brightness-125 transition-all duration-200 w-48 h-9 shadow-md max-md:w-16 max-md:text-sm xl:inline font-semibold'
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                            className='bg-sky-700 text-white rounded-xl  hover:brightness-125 transition-all duration-200 w-48 h-9 shadow-md max-md:w-16 max-md:text-sm xl:inline font-semibold'
                        onClick={() => signIn()}
                    >
                        Sign In
                    </button>
                )}
            </div>
            {session && (
                <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
                    <img
                        src={session.user.image}
                        alt='user-img'
                        className='h-10 w-10 rounded-full xl:mr-2'
                    />
                    <div className='hidden xl:inline'>
                        <h4 className='font-bold'>{session.user.name}</h4>
                        <p className='text-gray-500'>{session.user.username}</p>
                    </div>
                
                </div>
            )}
        </div>
    )
}
