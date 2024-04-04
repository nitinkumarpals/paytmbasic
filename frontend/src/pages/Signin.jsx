import React from 'react'
import { Button, InputBox, BottomWarning, Heading, SubHeading } from "../components/index";
const Signin = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} type={"email"}/>
            <InputBox label={"Password"}  type={"password"}/>
            <div className='pt-4'>
            <Button label={"Sign In"} />
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin

