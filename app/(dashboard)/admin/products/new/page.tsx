"use client"
import { addProduct } from '@/app/(dashboard)/_api/productsApi';
import HeadingTitle from '@/app/(dashboard)/_components/HeadingTitle'
import { product } from '@/common/types';
import { showToast } from '@/common/utils/toast';
import ErrorMessageComponent from '@/components/ErrorMessageComponent';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<product>(
    {
      criteriaMode: "all",
    }
  );

   const handleProduct: SubmitHandler<product> =(event: product) =>{
    // var data = new FormData();
    // data.append("title", event.title);
    // data.append("description", event.description);
    // data.append("price", String(event.price));
    // data.append("brand", event.brand);
    // data.append("category", event.category);
    // data.append("thumbnail", event.thumbnail);
    console.log(event);
    addProduct(event).then(()=>{
      showToast("success","Product added Successfully",{position:"top-center",theme:"light"});
    })
    .catch(()=>{
      showToast("error","Something went wrong.",{position:"top-center",theme:"light"});
    })
   }
  return (
  <div className='col-sm-5'>
    <HeadingTitle title='Add Product'/>
    <form onSubmit={handleSubmit(handleProduct)}>
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
          <ErrorMessageComponent errors={errors} name="thumbnail" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
  )
}

export default Page