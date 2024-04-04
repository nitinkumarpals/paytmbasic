import { Button, InputBox, BottomWarning, Heading, SubHeading } from "../components/index";
import React, { useState } from 'react'
import axios from 'axios';
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label="Sign Up" />
        <SubHeading label="Enter your infromation to create an account" />
        <InputBox onChange={ e=> {
          setFirstName(e.target.value);
        }} 
        label={"First Name"} placeholder="John" type={"text"} />

        <InputBox onChange={e =>{
          setLastName(e.target.value);
        }} 
        label={"Last Name"} placeholder="Doe"  type={"text"}/>

        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} 
        label={"Email"} placeholder="johndoe@example.com" type={"email"}/>

        <InputBox onChange={e => {
          setPassword(e.target.value);
        }} 
        label={"Password"}  type={"password"}/>

        <div className="pt-4">
        <Button onClick={ async () => {
          const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,
            password,
            firstName,
            lastName
          } );
          localStorage.setItem("token", response.data.token);
        }} 
        label={"Sign Up"} />
        <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
