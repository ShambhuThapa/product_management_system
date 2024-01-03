"use client"
import { PageRoutes } from '@/common/constants';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LogOut, User } from 'react-feather'


const DasboardHeader = () => {

 const router =useRouter();
 const handleLogout = () => {
    if (confirm("Are you sure you want to logout ?")) {
     localStorage.removeItem("active_admin");
     router.push(PageRoutes.HOME);
    }
} 
 
  return (
    <div className='bg-info cursor-pointer text-white d-flex justify-content-end align-items-center sticky-top' >
      <div className='col-sm-2 d-flex justify-content-end  align-items-center m-1 gap-1' ><Badge><User/>User</Badge>
      <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip" className="position-fixed">
              Logout
            </Tooltip>
          }
        >
         <LogOut onClick={()=>handleLogout()}/>
      </OverlayTrigger>   
         </div>
    </div>
  )
}

export default DasboardHeader