"use client";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showEmail,setShowEmail]=useState('hidden');
  const [emailPlace,setEmailPlace]=useState('Email');
  const [showPassword,setShowPassword]=useState('hidden');
  const [passwordPlace,setPasswordPlace]=useState('Password');
  
  const login=()=>{
    const response=fetch('https://gharbhada.adars.com.np/api/login', {
    "method": 'POST',
    "headers": {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({"email":email,"password":password}),
    })
    .then((response)=>{return response.json()})
    .then((data)=>{
      console.log(data.data);
      localStorage.setItem("token",data.data)
    })
    .catch(error => console.error(error));
  }

  return (
<div className="min-h-screen flex items-center justify-center font-sans bg-[#F2F2F2]"> 
      <div className="flex flex-col sm:gap-y-10 sm:px-10 sm:py-5 lg:gap-y-50 lg:px-50 lg:py-20 bg-[#ffff]">
        <div className="flex items-center">
          <text className="text-6xl md:text-8xl lg:text-10xl text-shadow-lg text-center items-center m-auto w-full">Ghar</text>
        </div>
        <div className="flex items-center">
          <text className="text-4xl md:text-5xl lg:text-6xl text-shadow-lg text-center items-center m-auto w-full">LOGIN</text>
        </div>
        <div className="flex flex-col transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-gradient-to-r from-[#B623FF] via-[#7174FE] to-[#23D2FD]">
          <label className={`p-2  pb-20 sm:text-4xl md:text-5xl lg:text-6xl lg:pl-5 lg:w-full text-gray-400 ${showEmail}`} > Email</label>
          <input className="p-1 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1  text-gray-700 rounded-xl focus:outline-none " type="Email" placeholder={emailPlace} required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value);}} onClick={()=>{setEmailPlace('');setShowEmail('visible')}} />
        </div>
        <div className="flex flex-col transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-gradient-to-r from-[#B623FF] via-[#7174FE] to-[#23D2FD]">
          <label className={`p-2 pb-20 sm:text-4xl md:text-5xl lg:text-6xl lg:w-full text-gray-400 ${showPassword}`}> Password</label>
          <input className="p-1 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1 text-gray-700 rounded-xl focus:outline-none " type="password" placeholder={passwordPlace} required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}} onClick={()=>{setPasswordPlace('');setShowPassword('visible')}}/>
        </div>
        <div>
          <button onClick={(e)=>{login()}} className="w-full text-3xl md:text-5xl lg:text-6xl font-bold lg:pt-15 lg:pb-15 border border-solid rounded-full bg-gradient-to-r from-[#B623FF] via-[#7174FE] to-[#23D2FD]  hover:(bg-gradient-to-r from-[#23D2FD] via-[#7174FE] to-[#23D2FD])">Login</button>
        </div>
      </div>
</div>
  );
};