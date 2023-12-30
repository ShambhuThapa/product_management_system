import React from 'react'
import bgImage from '@/public/images/bg-img.jpg'

import LoginPage from './LoginForm'

const HeroSection = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center  hero-section' style={{backgroundImage:`url(${bgImage.src})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <div className='col-lg-4 col-md-6 mt-5 mb-5  m-md-5 sm-mt-4'>
    <LoginPage/>
    </div>
    </div>
    </>
  )
}

export default HeroSection