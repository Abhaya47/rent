"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link'


export default function LoginPage() {

  const router = useRouter()
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [isEmailFocused,setIsEmailFocused] = useState(false);
  const [emailPlace,setEmailPlace]=useState('Email');
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
      if(data.status==='Success'){ 
        localStorage.setItem("token",data.message)
        router.push('/home');
      }
      else{
        console.log('Login failed');
      }
    })
    .catch(error => console.error(error));
  }

  if(localStorage.getItem("token") != null){  
    router.push('/home');
  }
  else{
    return (
      <div className="flex flex-1 items-center w-full h-screen justify-center font-sans bg-[#F2F2F2]"> 
        <div className="flex flex-col gap-y-4 m-auto sm:px-10 sm:py-20 lg:gap-y-10  bg-[#ffff]">
          <div className="flex items-center">
            <h3 className="text-4xl md:text-4xl lg:text-5xl text-shadow-lg text-center items-center m-auto w-full text-amber-300">Ghar</h3>
          </div>
          <div className="flex flex-1 items-center">
            <h3 className="text-3xl md:text-3xl lg:text-4xl text-shadow-lg text-center items-center m-auto w-full text-amber-200">LOGIN</h3>
          </div>
          <div className="flex flex-col flex-1 mb-4 transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-emerald-300 ">
            <label className={`p-2 sm:p-5 sm:pb-5 sm:text-4xl md:text-5xl lg:text-6xl lg:pl-5 lg:w-full text-gray-400 ${showEmaillabel? 'visible':'hidden'}`} > Email</label>
            <input className="sm:pb-4 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1  text-gray-700 rounded-xl focus:outline-none " type="Email" placeholder={emailPlace} required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value);}}
            onClick={()=>{setEmailPlace('')}}  
            onFocus={()=>{setIsEmailFocused(true);setEmailPlace('')}} 
            onBlur={()=>{setIsEmailFocused(false);setEmailPlace('Email')}}/>
          </div>
          <div className="flex flex-col flex-1 transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-emerald-300">
            <label className={`p-2 sm:pb-5 sm:text-4xl md:text-5xl lg:text-6xl lg:w-full text-gray-400 ${showPasswordlabel? 'visible':'hidden'}`}> Password</label>
            <input className="p-1 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1 text-gray-700 rounded-xl focus:outline-none " type="password" placeholder={passwordPlace} required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}} 
              onClick={()=>{setPasswordPlace('')}}
              onFocus={()=>{setIsPasswordFocused(true);setPasswordPlace('')}} 
              onBlur={()=>{setIsPasswordFocused(false);setPasswordPlace('Password')}}
            />
          </div>
          <div>
            <button onClick={(e)=>{login()}} className="w-full text-3xl md:text-5xl lg:text-6xl font-bold sm:p-5 pt-5 border border-solid rounded-full bg-gradient-to-r from-[#B623FF] via-[#7174FE] to-[#23D2FD] transition transform delay-300 hover:bg-gradient-to-r hover:from-[#23D2FD] hover:via-[#7174FE] hover:to-[#B623FF] hover:cursor-grab">Login</button>
          </div>
        </div>
    </div>
    );
  }
};