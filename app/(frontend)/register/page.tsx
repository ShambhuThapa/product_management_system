'use client';
import ErrorMessageComponent from '@/components/ErrorMessageComponent';
import FormFooterSection from '@/components/FormFooterSection';
import { PageRoutes } from '@/constants';
import bgImage from '@/public/images/bg-img.jpg';
import { showToast } from '@/utils/toast';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
 type RegisterProps={
 email:string;
 full_name:string;
 password:string;
 confirm_password:string;
}

type User={
    email:string;
    full_name:string;
    password:string;
   }

const Page = () => {
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm<RegisterProps>(
      {
        criteriaMode: "all",
      }
    );
    const router = useRouter();
    const [initialUserData, setInitialUserData] = useState<User[]>([]);
    const fetchData = useCallback(() => {
        const storedData = localStorage.getItem('users');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (Array.isArray(parsedData)) {
            setInitialUserData((prevUserData) => [...prevUserData, ...parsedData]);
          }
        }
      }, []);
    
      useEffect(() => {
        fetchData();
      }, [fetchData]);
    
    const onSubmit: SubmitHandler<RegisterProps> = async(event: RegisterProps) => {
        let initialUserData=[];
        const storedData = localStorage.getItem('users');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (Array.isArray(parsedData)) {
            initialUserData=parsedData;
          }
        }
       
        if(event.password.toLowerCase()!=event.confirm_password.toLowerCase()){
            setError('confirm_password', { type: 'manual', message: "Password doesn't match." },{ shouldFocus: true });
        } else {
            setError('confirm_password', {
                type: 'manual',
                message: '',
              });
              const { confirm_password, ...rest } = event;
            localStorage.setItem('users', JSON.stringify([...initialUserData,rest]));
            showToast("success","Account created .Login now",{position:"top-center"});
            router.push(PageRoutes.HOME);
          }
      };
  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center  hero-section' style={{backgroundImage:`url(${bgImage.src})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <div className='col-lg-4 col-md-6 mt-5 mb-5  m-md-5 sm-mt-4'>
    <div className='bg-white col-md-12 p-2 p-md-4 '>
        <h3 className="text-center fw-bold" >Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label htmlFor="email" className='mt-2'>Email</Form.Label>
        <Form.Control
        type="text"
        id="email"
        aria-describedby="email"
        {...register("email", {
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
          })}
        />
        <ErrorMessageComponent errors={errors} name="email" />
        <Form.Label htmlFor="full_name" className='mt-2'>Fullname</Form.Label>
        <Form.Control
        type="text"
        id="fullname"
        aria-describedby="fullname"
        {...register("full_name", {
            required: "Required",
          })}
        />
        <ErrorMessageComponent errors={errors} name="full_name" />
        <Form.Label htmlFor="password" className='mt-2'>Password</Form.Label>
        <Form.Control
         type="password"
         id="password"
         aria-describedby="password"
         {...register("password", {
            required: "Required",
          })}
        />
       <ErrorMessageComponent errors={errors} name="password" />
       <Form.Label htmlFor="confirm_password" className='mt-2'>Confirm Password</Form.Label>
        <Form.Control
         type="password"
         id="confirm_password"
         aria-describedby="confirm_password"
         {...register("confirm_password", {
            required: "Required",
          })}
        />
       {errors['confirm_password'] && <p className='text-danger'>{errors['confirm_password']?.message}</p>}
        <div className="d-flex flex-wrap align-items-center justify-content-between  mt-3 mb-3">
                    <Form.Check
                      type="checkbox"
                      id="exampleCheck1"
                      label=" Remember Me"
                    />
                  <div>
                    <span className="text-end self-align-end">
                      <a
                        href="/forget-password"
                        className="text-dark text-decoration-none"
                      >
                        Forget Password?
                      </a>
                    </span>
                  </div>
        </div>
        <div className="d-grid gap-2">
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
        </div>
        <FormFooterSection description='Already have an account?' link={PageRoutes.HOME} text={'Login'} />
        </form>
      </div>  

    </div>
    </div>
    </>
  )
}

export default Page