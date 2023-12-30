"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loadingAnimation from "@/public/lottie/loading.json";

const Loading = () => {
  return (
    <div className='continer d-flex  justify-content-center align-items-center'>
      <div className='col-md-4'>
      <Lottie animationData={loadingAnimation} />
      </div>
    </div>
  )
}

export default Loading