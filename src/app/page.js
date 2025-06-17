"use client";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
    const [isEmailFocused,setIsEmailFocused] = useState(false);
  const [emailPlace,setEmailPlace]=useState('Email');
  const [showPassword,setShowPassword]=useState('hidden');
  const [passwordPlace,setPasswordPlace]=useState('Password');
    const [isPasswordFocused,setIsPasswordFocused] = useState(false);


  const showEmaillabel = isEmailFocused || email !== ''; 
  const showPasswordlabel = isPasswordFocused || password !== ''; 


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
<div className="flex items-center justify-center font-sans bg-[#F2F2F2]"> 
      <div className="flex flex-col gap-y-4 sm:px-10 sm:py-20 lg:gap-y-50 lg:px-50 lg:py-20 bg-[#ffff]">
        <div className="flex items-center">
          <text className="text-4xl md:text-8xl lg:text-10xl text-shadow-lg text-center items-center m-auto w-full">Ghar</text>
        </div>
        <div className="flex items-center">
          <text className="text-3xl md:text-5xl lg:text-6xl text-shadow-lg text-center items-center m-auto w-full">LOGIN</text>
        </div>
        <div className="mb-4 transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-emerald-300 ">
          <label className={`p-2 sm:p-5 sm:pb-5 sm:text-4xl md:text-5xl lg:text-6xl lg:pl-5 lg:w-full text-gray-400 ${showEmaillabel? 'visible':'hidden'}`} > Email</label>
          <input className="sm:pb-4 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1  text-gray-700 rounded-xl focus:outline-none " type="Email" placeholder={emailPlace} required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value);}}
          onClick={()=>{setEmailPlace('')}}  
           onFocus={()=>setIsEmailFocused(true)} 
           onBlur={()=>{setIsEmailFocused(false);setEmailPlace('Email')}}/>
        </div>
        <div className="flex flex-col transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-emerald-300">
          <label className={`p-2 sm:pb-5 sm:text-4xl md:text-5xl lg:text-6xl lg:w-full text-gray-400 ${showPasswordlabel? 'visible':'hidden'}`}> Password</label>
          <input className="p-1 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1 text-gray-700 rounded-xl focus:outline-none " type="password" placeholder={passwordPlace} required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}} 
            onClick={()=>{setPasswordPlace('')}}
            onFocus={()=>{setIsPasswordFocused(true)}} 
            onBlur={()=>{setIsPasswordFocused(false);setPasswordPlace('Password')}}
          />
        </div>
        <div>
          <button onClick={(e)=>{login()}} className="w-full text-3xl md:text-5xl lg:text-6xl font-bold sm:pb-15 lg:pt-15 lg:mb-15 border border-solid rounded-full bg-gradient-to-r from-[#B623FF] via-[#7174FE] to-[#23D2FD]  hover:(bg-gradient-to-r from-[#23D2FD] via-[#7174FE] to-[#23D2FD])">Login</button>
        </div>
      </div>
</div>
  );
};