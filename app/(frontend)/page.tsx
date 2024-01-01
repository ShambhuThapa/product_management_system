"use client"
import HeroSection from '@/components/HeroSection'
import { PageRoutes } from '@/constants';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const adminFromLocalStorage = localStorage.getItem("active_admin");
    if(adminFromLocalStorage){
      router.push(PageRoutes.ADMIN);
    }
  }, [])
  
  return (
 <main>
     <HeroSection/>
 </main>
  )
}
