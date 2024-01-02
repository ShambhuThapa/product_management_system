import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { Icon } from 'react-feather';
interface SidebarItemProps{
    icon:Icon;
    label:string;
    href:string;
}

const SidebarItem = ({icon:Icon,label,href}:SidebarItemProps) => {
    const pathname=usePathname();
    const router =useRouter();
    const isActive= (pathname==="/admin" && href==="/admin") || pathname=== href ;
    const onClick=()=>{
        router.push(href);
    }
    return (
    <div>
        <div onClick={onClick} className={`d-flex cursor-pointer align-items-center my-1 p-1 ${isActive?"activeNavLink":"navLink"}`}>
            <Icon color={"white" } size={22} className='me-1 nav-icon' />
          {label}
        </div>
    </div>
  )
}

export default SidebarItem