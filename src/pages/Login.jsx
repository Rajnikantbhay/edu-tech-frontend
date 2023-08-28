import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

export default function Login() {
    const { checkSession } = useContext(AuthContext);
    const navigate = useNavigate();
    const [ Credentials, setCredentials ] = useState({email: '', password: ''});
    const handleChange = (e) => {
        setCredentials({...Credentials, [e.target.name]: e.target.value})
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://edu-tech-api.onrender.com/api/user-login', Credentials, { withCredentials: true });
            if(response.status === 200) {
              // await checkSession()
                navigate('/');
                
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login here!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            
            <div>
                {/* email */}
                <TextField id="outlined-basic" label="email" variant="outlined" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' name='email' value={Credentials.email} onChange={handleChange} />
            </div>
            {/* password */}
            <div>
                <TextField type='password' id="outlined-basic" label="password" variant="outlined" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' name='password' value={Credentials.password} onChange={handleChange} />
            </div>
            <Button type="submit" variant="contained" className='w-full'>Login</Button>
            <div>
              
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            New user?{' '}
            <Link to={'/user-register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
