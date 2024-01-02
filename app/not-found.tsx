"use client"
import Lottie from 'lottie-react'
import React from 'react'
import errorAnimation from "@/public/lottie/error.json";
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { PageRoutes } from '@/common/constants';

const page = () => {
  return (
    <div className='continer d-flex flex-column justify-content-center align-items-center'>
     <div className='text-center col-md-6 mt-4'>
     <h2 className='fw-bold' >Page Not Found !</h2>
     <p>The page you requested could not found</p>
     <Link href={PageRoutes.HOME}>
     <Button className='btn cursor-pointer'>Back to Home</Button>
     </Link>
     </div>
     <Lottie className='col-md-6' animationData={errorAnimation} />
    </div>
  )
}
export default page
