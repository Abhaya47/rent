"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useEffect,useState } from "react";

export default function HomePage(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [placeholder,setPlaceholder] = useState('SEARCH LOCATION')

  useEffect(()=>{
    fetch('https://gharbhada.adars.com.np/api/posts',{
      "method": 'GET',
      "headers":{
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
    })
    .then((response)=>response.json())
    .then((data)=>{setData(data.data);setLoading(false)})
    .catch(error=>console.error(error))
    
  },[]) 

  if (loading) return <p>Loading...</p>;

  return(
    <div className="text-white m-auto">
      <div className='relative bg-[url(/images/hero.jpg)] h-[50vh] w-full bg-cover bg-center bg-no-repeat opacity-90'>
        <div className='absolute inset-0 flex text-center justify-center items-center m-auto bg-black/50'>
          <div className='flex w-5/6 md:w-3/5  border-2 rounded-4xl tracking-wider text-2xl p-1 bg-zinc-950'>
                <div className='relative m-auto w-full group'>
                  <input type="text" name="floating_email" id="floating_email" placeholder="" className='peer text-center text-white m-auto w-full border-0 appearance-none outline-none bg-transparent pt-4'/>
                  <label className="select-none pointer-events-none absolute text-gray-400 text-sm md:text-lg duration-300 transform -translate-y-3 scale-75  left-1/2 top-2 z-10 -translate-x-1/2 peer-placeholder-shown:-translate-y-2 md:peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-2 md:peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-400">SEARCH </label>
                </div>
              <div className="pr-5 pt-2 justify-center items-center justify-items-center"><FontAwesomeIcon icon={faSearch} onClick={()=>{}}></FontAwesomeIcon></div>
          </div>
        </div>
      </div>
      {
        data.map((dat)=>{
          return <div key={dat.id} className="flex flex-col border-2 rounded-2xl m-5 px-4 py-4 gap-y-1">
              <div className="text-3xl ">{dat.description}</div>
              <div className="text-white">{(dat.address)},{dat.city}</div>
              <div className="text-emerald-600 mt-1">Price: Rs. {(dat.cost)}</div>

              <div className="flex flex-col md:flex-row lg:flex-row mt-5">
                <div className='m-auto md:pr-5 items-start'>
                  <Image src="/images/1.jpg" alt="1" width={200} height={300}/>
                </div>
                <div className='flex pt-2 md:pt-0 mx-auto'>
                  <p>Large double room ensuite walking distance to West Drayton Station and close to Heathrow airport. Bills included, off road parking for 1 car. </p>
                </div>
              </div>
          </div>
          
        })
      }
    </div>
  );
}