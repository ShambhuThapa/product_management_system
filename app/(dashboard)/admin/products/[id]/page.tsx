"use client"
import { getProduct } from '@/app/(dashboard)/_api/productsApi'
import { product } from '@/common/types'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'

const Page = () => {
  const params = useParams();
  const product_id=params.id;
  const [productDetail, setProductDetail] = useState<product>();
  useEffect(() => {
    getProduct(Number(product_id))
      .then((response:any)=>{
      setProductDetail(response);
      })
      .catch((error:any)=>{
      console.log(error)
      })
    },[product_id])

    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      brand,
      category,
      thumbnail,
      images
  } = productDetail ||{};
  console.log(images);
  return (
      <div className="container">
  
        <div className="row">
          <div className="col-md-6 mb-1">
            <img src={thumbnail} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4">
  
              <div className="mb-3">
                <a href="">
                <Badge pill bg="primary" className='me-1'>{category}</Badge>
                </a>
                <a href="">
                <Badge pill bg="secondary" className='me-1'>Brand :{brand}</Badge>
                </a>
                <a href="">
                <Badge pill bg="info" className='me-1'>Rating:{rating}</Badge>
                </a>
                <a href="">
                <Badge pill bg="info" className='me-1'>Discount:{rating}</Badge>
                </a>
              </div>
  
              <p className="lead">
                {title}
                <br/>              
                <span>NRs.{price}</span>
              </p>
  
              <h5 className="fw-bold">Description</h5>
  
              <p>{description}</p>
            </div>
          </div>
        </div>

        <hr/>  
        <div className="row d-flex justify-content-center">        
          <div className="col-md-6 text-center">
            <h4 className="my-1 h4">Additional information</h4>
            <p>
              {description}
            </p>
  
          </div>
        
  
        </div>

        <div className="row wow fadeIn mt-2">
  
        {images?.map((image, index) => (
  <div key={index} className="col-lg-4 col-md-12 mb-4">
    <img src={image} className="img-fluid" alt={`product_image_${index}`} />
  </div>
))}

        </div>
  
      </div>
  )
}

export default Page