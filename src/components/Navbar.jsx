import React, { useState, useContext, useEffect } from 'react'
import ProfilePicture from '../img/profile.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';

export default function Navbar() {
    const { isAuthenticated, setIsAuthenticated, name } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const handleDropDown = () => {
        setShow((prevShow) => !prevShow);
    }    

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
            if (response.status === 200) {
                document.cookie = 'refreshToken=; expires=' + new Date(0).toUTCString();
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    
  return (
    <nav className='flex justify-between w-screen lg:px-16 px-4 py-4 items-center'>

        {/* logo */}
        <Link to={'/'} >
        <h4 className='flex items-center'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
 <span className='logo_text'>SpeakUp</span></h4>
      </Link>

      {/* logo-end */}

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {isAuthenticated ? (<div className='flex gap-3 md:gap-5'>
                <button type='button' className='outline_btn' onClick={handleLogout}>
                    Sign out
                </button>

                <div onClick={handleDropDown} className='border border-black px-4 py-1 rounded-3xl flex items-center' ><span className='font-satoshi'>{name}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-2">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                </div>

            </div>) : (
                <>{<Link to={'/user-register'} type='button' className='black_btn'>
                Sign in
            </Link>}</>
            )}
        </div>

                {/* Desktop navigation end */}
     
        <div className='sm:hidden flex relative items-center rounded-full'>
            {/* Mobile navigation */}
            
            <div className='flex items-center relative ml-4 cursor-pointer'>
                {isAuthenticated ? (<div className='flex rounded-full cursor-pointer'>
                    <div onClick={handleDropDown} className='border border-black px-4 py-1 rounded-3xl flex items-center' ><span className='font-satoshi'>{name}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-2">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                </div>

                    {show && (<div className='dropdown'>

                <button type='button' onClick={() => {handleLogout(); handleDropDown(false);}} className='mt-5 black_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>

                </button>
            </div>)}


                </div>) : (<div>
                    <Link to={'/user-register'} type='button' className='black_btn'>
                        Sign in
                    </Link>
                </div>)}
            </div>
        </div>
    </nav>
  )
}
