"use client";


import { useEffect,useState } from "react";

export default function HomePage(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://gharbhada.adars.com.np/api/api/posts',{
      "method": 'GET',
      "headers":{
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
    })
    .then((data)=>{
      setData(data);
      setLoading(false);

    })
  },[data]) 

  if (loading) return <p>Loading...</p>;

  return(
    <div className="text-white">
      {JSON.stringify(data)}
    </div>
  );
}