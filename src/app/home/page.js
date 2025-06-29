"use client";
import Image from 'next/image';;

import { useEffect,useState } from "react";

export default function HomePage(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className='bg-[url(/images/1.jpg)] w-full h-[50vh] bg-center bg-cover bg-no-repeat'>
          
      </div>
      {
        data.map((dat)=>{
          return <div className="flex flex-col border-2 rounded-2xl m-5 px-4 py-4 gap-y-1">
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