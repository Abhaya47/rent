"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link'


export default function LoginPage() {

  const router = useRouter();
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
      if(data.status==='Success'){ 
        localStorage.setItem("token",data.message)
        router.push('/pages/home');
      }
      else{
        console.log('Login failed');
      }
    })
    .catch(error => console.error(error));
  }

  // if(localStorage.getItem("token") != null){  
  //   router.push('/pages/home');
  // }
  // else{
    return (
        <div className="container flex flex-col items-center justify-center min-h-screen mx-auto">
          <div className="flex flex-col items-center justify-center pb-5 md:pb-20 lg:md:20">
            <h2 className="text-4xl md:text-5xl font-mono font-medium text-gray-200 tracking-wide uppercase ">
              GHARBHADA
            </h2>
            <small className="text-sm md:text-base font-mono text-gray-400 tracking-widest mt-2 block opacity-80">              
              Search. Select. Stay.
            </small>
          </div>
          <div className="w-full max-w-sm md:max-w-md px-6 md:px-15 py-40 md:py-50 lg:py-60 border-0 bg-zinc-950 shadow-2xl shadow-zinc-500 rounded-lg">
              
            <form onSubmit={(e) => { e.preventDefault(); login(); }}>
              <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold font-sans text-gray-400 mb-10 ">
                LOGIN 
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-lg md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:text-lg" placeholder=" " required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value);}}/>
                <label  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-lg md:text-xl text-zinc-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:text-lg" placeholder=" " required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}} />
                <label  className="peer-focus:font-medium absolute text-lg text-zinc-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div className="text-center pt-5">
                <button type="submit" className={`text-gray-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-auto px-5 py-2.5 text-center shadow-lg shadow-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-grab`}>Submit</button>
              </div>
            </form>
          </div>
        </div>
    );
  
};