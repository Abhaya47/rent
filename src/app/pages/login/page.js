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
        <div className="container flex items-center justify-center min-h-screen mx-auto">
          <div className="flex justify-start items-center justify-items-center max-w-md px-20 py-20 md:py-30 border-0 bg-none shadow-lg shadow-gray-900">
            <form onSubmit={(e)=>{login(); e.preventDefault()}}>
              <div className="text-xl md:text-2xl text-center font-bold font-sans text-amber-200 mb-5 ">
                LOGIN PAGE
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-3xl md:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:text-lg" placeholder=" " required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value);}}/>
                <label  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-3xl md:text-2xl text-zinc-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:text-lg" placeholder=" " required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}} />
                <label  className="peer-focus:font-medium absolute text-lg text-zinc-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div className="text-center pt-5">
                <button type="submit" className={`text-gray-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-auto px-5 py-2.5 text-center shadow-lg shadow-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-grab`} >Submit</button>
              </div>
            </form>
          </div>
        </div>
 





    //   <div className="flex flex-1 items-center w-full h-screen justify-center font-sans bg-[#F2F2F2]"> 
    //     <div className="flex flex-col gap-y-4 m-auto sm:px-10 sm:py-20 lg:gap-y-10  bg-[#ffff]">
    //       <div className="flex items-center">
    //         <h3 className="text-4xl md:text-4xl lg:text-5xl text-shadow-lg text-center items-center m-auto w-full text-amber-300">Ghar</h3>
    //       </div>
    //       <div className="flex flex-1 items-center">
    //         <h3 className="text-3xl md:text-3xl lg:text-4xl text-shadow-lg text-center items-center m-auto w-full text-amber-200">LOGIN</h3>
    //       </div>
    //       <div className="flex flex-col flex-1 mb-4 transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-emerald-300 ">
    //         <label className={`p-2 sm:p-5 sm:pb-5 sm:text-4xl md:text-5xl lg:text-6xl lg:pl-5 lg:w-full text-gray-400 ${showEmaillabel? 'visible':'hidden'}`} > Email</label>
    //         <input className="sm:pb-4 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1  text-gray-700 rounded-xl focus:outline-none " type="Email" placeholder={emailPlace} required value={email}  onChange={(e)=>{e.preventDefault();setEmail(e.target.value);}}
    //         onClick={()=>{setEmailPlace('')}}  
    //         onFocus={()=>{setIsEmailFocused(true);setEmailPlace('')}} 
    //         onBlur={()=>{setIsEmailFocused(false);setEmailPlace('Email')}}/>
    //       </div>
    //       <div className="flex flex-col flex-1 transition duration-150 ease-in-out border-b border-b-gray-600 hover:border-b  hover:border-b-4 hover:border-b-emerald-300">
    //         <label className={`p-2 sm:pb-5 sm:text-4xl md:text-5xl lg:text-6xl lg:w-full text-gray-400 ${showPasswordlabel? 'visible':'hidden'}`}> Password</label>
    //         <input className="p-1 sm:text-4xl md:text-5xl lg:text-6xl lg:pb-1 text-gray-700 rounded-xl focus:outline-none " type="password" placeholder={passwordPlace} required value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}} 
    //           onClick={()=>{setPasswordPlace('')}}
    //           onFocus={()=>{setIsPasswordFocused(true);setPasswordPlace('')}} 
    //           onBlur={()=>{setIsPasswordFocused(false);setPasswordPlace('Password')}}
    //         />
    //       </div>
    //       <div>
    //         <button onClick={(e)=>{login()}} className="w-full text-3xl md:text-5xl lg:text-6xl font-bold sm:p-5 pt-5 border border-solid rounded-full bg-gradient-to-r from-[#B623FF] via-[#7174FE] to-[#23D2FD] transition transform delay-300 hover:bg-gradient-to-r hover:from-[#23D2FD] hover:via-[#7174FE] hover:to-[#B623FF] hover:cursor-grab">Login</button>
    //       </div>
    //     </div>
    // </div>
    );
  
};