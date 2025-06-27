"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link'

export default function Hello(){
    const router = useRouter()
    if(sessionStorage.getItem("token") != null){ 
        router.push('/home');
    }
    else{
        router.push('/login');
    }
}