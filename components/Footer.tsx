import React from 'react'
import logo from '@/public/images/logo/logo.svg'
import Image from 'next/image';
import facebook_icon from "@/public/images/icons/facebook.svg";
import instagram_icon from "@/public/images/icons/instagram.svg";
import twitter_icon from "@/public/images/icons/twitter.svg";
import phone_icon from "@/public/images/icons/phone.svg";
import mail_icon from "@/public/images/icons/mail.svg";
import Link from 'next/link';
import { PageRoutes } from '@/common/constants';
import { Facebook, Mail, Phone, PhoneCall } from 'react-feather';
const Footer = () => {
  return (
    <footer className=" bg-white w-100  flex-shrink-0">
        <div className="container ">
            <div className="row py-4 gx-5">
                <div className="col-lg-2 col-md-6">
                 <Link href={PageRoutes.HOME}>
                 <div style={{width:"100px",height:"auto"}}>
                  <Image src={logo} alt='logo' priority={true}/>
                 </div>
                 </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Smartphones</a></li>
                        <li><a href="#">Laptops</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className=" mb-3">Subscribe to our Newsletter</h5>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2"/>
                        </div>
                        <button className="btn btn-primary" type="button">Subscribe</button>
                    </form>
                </div>
                <div className="col-lg-3 col-md-6 d-flex flex-column flex-end">
                    <h5 className="mb-3">Contact Us</h5>
                    <ul className="list-unstyled text-muted">
                        <li className='flexStartEnd'><Phone className='me-1'/><a href="tel:+977 +9863437566">9863437566</a></li>
                        <li className='flexStartEnd'><Mail className='me-1' /><a href="mailto:example@gmail.com">example@gmail.com</a></li>
                    </ul>
                    <div className='d-flex gap-2'>
                        <img src={facebook_icon.src} alt='facebook' />
                        <img src={instagram_icon.src} alt='instagram' />
                        <img src={twitter_icon.src} alt='twitter'/>
                    </div>
                </div>
            </div>
         <hr/>
         <p className='text-center fw-bold mb-0'> &copy; 2023 . All rights reserved. </p>
        </div>
    </footer>
      
  )
}

export default Footer