import { Button, InputBox, BottomWarning, Heading, SubHeading } from "../components/index";
import React from 'react'

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label="Sign Up" />
        <SubHeading label="Enter your infromation to create an account" />
        <InputBox label={"First Name"} placeholder="John" type={"text"} />
        <InputBox label={"Last Name"} placeholder="Doe"  type={"text"}/>
        <InputBox label={"Email"} placeholder="johndoe@example.com" type={"email"}/>
        <InputBox label={"Password"}  type={"password"}/>
        <div className="pt-4">
        <Button label={"Sign Up"} />
        <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
