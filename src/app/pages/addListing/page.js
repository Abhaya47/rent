"use client";



export default function AddListing(){
    const addList=()=>{
        const sendList = fetch('https://gharbhada.adars.com.np/api/posts',{
            "method":"POST",
            "headers":{
                'Content-Type': 'application/json'
            },
            'body' : JSON.stringify({"address":address,"city":city,"cost":cost,"description":description})
        })
    }
     
    return <>
         <div>
            <form>
                
            </form>
         </div>
    </>
}