"use client"
import React from 'react'
import SidebarItem from './SidebarItem'
import { Camera, Compass, User } from 'react-feather';
import logo from '@/public/images/logo/logo.svg';
import Image from 'next/image';

const dashboardRoutes=[{
    icon:Camera,
    label:"Dashboard",
    href:"/admin"},
    {
    icon:Compass,
    label:"Users",
    href:"/admin/users"
    },
    {
    icon:User,
    label:"Products",
    href:"/admin/products"
    },
]
const Sidebar = () => {
    const routes=dashboardRoutes;
  return (
    <div className='col-sm-2 vh-100 p-3 pe-0 bg-secondary'
     style={{
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      width: "200px",
      height: "100vh",
      overflowY: "auto"}}
      >
    <div className='d-flex flex-column'>
    <div style={{width:"90px",height:"auto"}} className='mb-2'>
        <Image src={logo} alt='logo' priority={true}/>
    </div>
    {routes.map((route)=>{
     return(
      <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href}>
      </SidebarItem>
     )
    })} 
    </div>
    </div>
  )
}

export default Sidebar