"use client"
import { PageRoutes } from '@/common/constants';
import { useRouter } from 'next/navigation';
import React from 'react'
import { User } from 'react-feather'


const DasboardHeader = () => {

 const router =useRouter();
 const handleLogout = () => {
    if (confirm("Are you sure you want to logout ?")) {
     localStorage.removeItem("active_admin");
     router.push(PageRoutes.HOME);
    }
} 
 
  return (
    <div className='bg-info cursor-pointer text-white d-flex justify-content-end p-2 sticky-top' >
      <div className='col-sm-1' onClick={()=>handleLogout()}><User/>User</div>
    </div>
  )
}

export default DasboardHeader