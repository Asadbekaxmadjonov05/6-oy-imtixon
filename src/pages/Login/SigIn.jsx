import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('userData'));

    if (savedUser && savedUser.email === loginData.email && savedUser.password === loginData.password) {
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Incorrect email or password!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your Email"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
          <Input
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
          <div className='flex flex-col '>
         <Button title="Sign In" type="submit" className="w-full" />
         <Link className='text-[12px]  inline-block text-center text-[#2D88D4] leading-[24px] font-bold ' to={'/sign-up'}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
