"use client"
import {editProduct, getProduct } from '@/app/(dashboard)/_api/productsApi';
import HeadingTitle from '@/app/(dashboard)/_components/HeadingTitle'
import { product } from '@/common/types';
import { showToast } from '@/common/utils/toast';
import ErrorMessageComponent from '@/components/ErrorMessageComponent';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<product>(
    {
      criteriaMode: "all",
    }
  );
const params = useParams();
const product_id=params.id;
const [oldImage, setOldImage] = useState<string>();
  useEffect(() => {
    getProduct(Number(product_id))
      .then((response:any)=>{
      setValue("title",response.title);
      setValue("description",response.description);
      setValue("price",response.price);
      setValue("brand",response.brand);
      setValue("category",response.category);
      setValue("thumbnail",response.thumbnail);
      setOldImage(response?.thumbnail);
      })
      .catch((error:any)=>{
        showToast("error","Something went wrong.",{position:"top-center",theme:"light"});
      })
    },[product_id])

   const handleEditProduct: SubmitHandler<product> =(event: product) =>{
    editProduct(Number(product_id),event).then(()=>{
      showToast("success","Success",{position:"top-center",theme:"light"});
    })
    .catch(()=>{
    showToast("error","Error.",{position:"top-center",theme:"light"});
    })
   }


  return (
  <div className='col-sm-5'>
    <HeadingTitle title='Edit Product'/>
    <form onSubmit={handleSubmit(handleEditProduct)}>
        <label htmlFor="title" className="form-label">Title</label>
        <div className="mb-3">
        <input
            type="text"
            className="form-control"
            id="title"
            placeholder='Title'
            {...register('title', { required: "Required" })}
          />
          <ErrorMessageComponent errors={errors} name="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder='Description'
            {...register('description', { required: "Required" })}
          ></textarea>
          <ErrorMessageComponent errors={errors} name="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder='Price'
            {...register('price', { required: 'Required' })}
          />
          <ErrorMessageComponent errors={errors} name="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Brand</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder='Brand'
            {...register('brand', { required: "Required" })}
          />
          <ErrorMessageComponent errors={errors} name="brand" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder='Category'
            {...register('category', { required: "Required" })}
          />
          <ErrorMessageComponent errors={errors} name="category" />
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
          <input
            type="file"
            className="form-control"
            id="thumbnail"
            {...register('thumbnail', { required: "Required" })}
          />
          {
        
        oldImage && (
            <img
            src={oldImage}
            alt="thumbannail"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}/>
        )
        }


          <ErrorMessageComponent errors={errors} name="thumbnail" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default Page