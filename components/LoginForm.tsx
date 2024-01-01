"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { PageRoutes } from '@/constants';
import FormFooterSection from './FormFooterSection';
import { showToast } from '@/utils/toast';
type User = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<User>(
    {
      criteriaMode: "all",
    }
  );
  
  const handleLogin: SubmitHandler<User> = async (data: User) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');  
    if (storedUsers.length > 0) {
      const findUser = () => {
        return new Promise<User | undefined>((resolve) => {
          const user = storedUsers.find(
            (user: User) =>
              user.email === data.email && user.password === data.password
          );
          resolve(user);
        });
      };
      const user = await findUser();  
      if (user) {
        localStorage.setItem("active_admin",JSON.stringify(user));
        router.push('/admin');
      } else {
        showToast("error","Invalid credentials",{position:"top-center",theme:"light"})
      }  
    }else {
      showToast("warning","Account doesn't exist.",{position:"top-center",theme:"light"})
    }   
  };
  
  return (
    <>
      <div className='bg-white col-md-12 p-2 p-md-4 '>
        <h3 className="text-center fw-bold" >Log In</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
        <Form.Label htmlFor="username" className='mt-2'>Username</Form.Label>
        <Form.Control
        type="email"
        id="username"
        aria-describedby="username"
        placeholder='Enter email here..'
        {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className='text-danger'>*{message}</p>
          ))
        }
        />
        <Form.Label htmlFor="password" className='mt-2'>Password</Form.Label>
        <Form.Control
         type="password"
         id="password"
        placeholder='password here..'
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
        <FormFooterSection description='Dont have an account yet ?' link={PageRoutes.REGISTER} text={'Sign Up'} />
        </form>
      </div>  
    </>
  )
};

export default LoginPage;
