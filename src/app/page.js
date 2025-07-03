"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Hello(){
    const router = useRouter()

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (true) {
            router.push('/pages/home');
        } else {
            router.push('/pages/login');
        }
    }, [router]);

    return null;
}