"use client"
import { PageRoutes } from '@/common/constants';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const router = useRouter();
  
  useEffect(() => {
    const adminFromLocalStorage = localStorage.getItem("active_admin");
    if(!adminFromLocalStorage){
      router.push(PageRoutes.HOME);
    }
  }, [])

  if(!localStorage.getItem("active_admin")){
    return null;
  }  
  return (
    <>
    <h1>Welcome to Dashboard</h1>
    </>
  )
}

export default Page