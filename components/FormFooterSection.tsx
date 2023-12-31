import React from 'react'
import facebookIcon from "@/public/images/icons/facebook.svg";
import googleIcon from "@/public/images/icons/google-icon.svg";
import Link from 'next/link';
import { PageRoutes } from '@/constants';

interface FormFooterProps{
    description:string;
    link:string;
    text:string;
}
const FormFooterSection = ({description,link,text}:FormFooterProps) => {
  return (
    <>
         <div className='d-flex justify-content-between align-items-center login-options mt-1'>
           <hr /> <span className='options-title d-flex align-items-center flex-shrink-0'>Or Login with</span> <hr />
        </div>
        <div className='d-flex justify-content-center gap-2'>
            <img src={facebookIcon.src}></img>
            <img src={googleIcon.src}></img>
        </div>
        <p className='text-center mb-0 mt-1'> {description} <span className='fw-bold'><Link href={link}>{text}</Link></span></p>
    </>
  )
}

export default FormFooterSection