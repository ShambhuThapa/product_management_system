"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Button, Form } from 'react-bootstrap';
// import bgImage from '@/public/images/bg-img.png'
import HeroSection from '@/components/HeroSection';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import facebookIcon from "@/public/images/icons/facebook.svg";
import googleIcon from "@/public/images/icons/google-icon.svg";
import { PageRoutes } from '@/constants';
import Link from 'next/link';
type Inputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>(
    {
      criteriaMode: "all",
    }
  );
  
const handleLogin: SubmitHandler<Inputs> = (event: any) => {
    console.log(event);
    localStorage.setItem("users",JSON.stringify(event));
  };
  return (
    <>
      <div className='bg-white col-md-12 p-2 p-md-4 '>
        <h3 className="text-center fw-bold" >Log In</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
        <Form.Label htmlFor="username" className='mt-2'>Username</Form.Label>
        <Form.Control
        type="text"
        id="username"
        aria-describedby="username"
        {...register("username", {
            required: "Required",
          })}
        />
        <ErrorMessage
        errors={errors}
        name="username"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className='text-danger'>*{message}</p>
          ))
        }
        />
        <Form.Label htmlFor="password" className='mt-2'>Password</Form.Label>
        <Form.Control
         type="text"
         id="password"
         aria-describedby="password"
         {...register("password", {
            required: "Required",
          })}
        />
        <ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className='text-danger'>*{message}</p>
          ))
        }/>
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
            <Button type="submit" variant="primary" >
              Continue
            </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center login-options mt-1'>
           <hr /> <span className='options-title d-flex align-items-center flex-shrink-0'>Or Login with</span> <hr />
        </div>
        <div className='d-flex justify-content-center gap-2'>
            <img src={facebookIcon.src}></img>
            <img src={googleIcon.src}></img>
        </div>
        <p className='text-center mb-0 mt-1'> Dont have an account yet ? <span className='fw-bold'><Link href={PageRoutes.REGISTER}>Sign Up</Link></span></p>
        </form>
      </div>  
    </>
  )
};

export default LoginPage;
