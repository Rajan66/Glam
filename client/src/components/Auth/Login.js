import React from 'react'

import COVER_IMAGE from '../../images/cover.jpg'
import GOOGLE_ICON from '../../images/google.png'

const Login = ({handleGoogleLogin}) => {
    return (
        <div className="w-full h-screen flex flex-col sm:flex-row items-start">
        <div className='relative w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col'>
    
            <img src={COVER_IMAGE} className="w-full h-full object-cover" alt="Cover" />
        </div>
        <div className='w-full sm:w-1/2 h-1/2 sm:h-full bg-[#f5f5f5] flex flex-col p-8 justify-between items-center'>
            <h1 className="w-full max-w-[500px] mx-auto text-2xl sm:text-xl text-[#060606] font-semibold">Glam Hour</h1>
            
            <div className="w-full flex flex-col max-w-[500px]">
                <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-3xl font-semibold mb-2'>Login</h3>
                    <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
                </div>
    
                <div className='w-full flex flex-col'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full text-black py-4 sm:py-2 md:py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
                    />
    
                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full text-black py-4 sm:py-2 md:py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    />
                </div>
    
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type='checkbox' className='w-4 h-4 mr-2' />
                        <p className='text-sm'>Remember Me</p>
                    </div>
    
                    <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
                </div>
    
                <div className='w-full flex flex-col my-4'>
                    <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 sm:py-3 md:py-3 text-center flex items-center justify-center cursor-pointer'>Log in</button>
                    <button className='w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 sm:py-3 md:py-3 text-center flex items-center justify-center cursor-pointer'>Register</button>
                </div>
    
                <div className='w-full flex items-center justify-center relative py-2'>
                    <div className='w-full h-[1px] bg-black/40'></div>
                    <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
                </div>
                <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 sm:py-3 md:py-3 text-center flex items-center justify-center cursor-pointer' onClick={handleGoogleLogin}>
                    <img src={GOOGLE_ICON} className='h-6 mr-2' alt="Google Icon" />
                    Sign in with Google
                </div>
            
            </div>
            <div className='w-full flex items-center justify-center'>
                <p className='text-sm font-normal text-[#060606]'>Don't have an account?<span className='font-semibold underline underline-offset-2 cursor-pointer'> Sign up for free</span></p>
            </div>
        </div>
    </div>
    
    )
}

export default Login