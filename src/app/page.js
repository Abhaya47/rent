"use client";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
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
<div className="min-h-screen flex items-center justify-center font-sans  bg-gradient-to-r from-slate-300 to-slate-500"> 
  <div className="container grid grid-cols-3 grid-rows-3 items-center justify-items-center font-sans border rounded-3xl m-auto w-1/2 h-[50dvh] bg-gradient-to-r from-violet-500 to-purple-500 shadow-2xl shadow-amber-950">
      <div className="col-start-2 row-start-2 flex flex-col gap-10">
        <div>
          <span className="text-6xl">LOGIN</span>
        </div>
        <div className="bg-amber-100 rounded-2xl border border-black  hover:border-4">
          <label className="lg:text-3xl lg:pl-5 lg:w-full  text-gray-700 "> Email</label>
          <input className="lg:text-4xl lg:p-4 lg:pb-1  text-gray-700 rounded-xl focus:outline-none " type="Email" placeholder="" required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value)}} onInputCapture={()=>{}}/>
        </div>
        <div className="bg-amber-100 rounded-2xl border border-black  hover:border-4">
          <label className="lg:text-3xl lg:pl-5 lg:w-full  text-gray-700"> Password</label>
          <input className="lg:text-4xl lg:p-4 lg:pb-1 text-gray-700 rounded-xl focus:outline-none " type="password" placeholder="" required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value)}}/>
        </div>
        <div>
          <button onClick={(e)=>{login()}} className=" lg:p-3 lg:text-4xl lg:w-full hover:scale-[1.2] border border-solid rounded-4xl  hover:bg-emerald-800 bg-gray-700">Login</button>
        </div>
      </div>
  </div>
</div>
  );
};