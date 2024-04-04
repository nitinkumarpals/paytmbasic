import React, {useState} from 'react'
import { Button, InputBox, BottomWarning, Heading, SubHeading } from "../components/index";
import axios from 'axios';
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox onChange={ e=> {
              setUsername(e.target.value);
            }}
            label={"Email"} placeholder={"johndoe@example.com"} type={"email"}/>
            <InputBox onChange={e => {
              setPassword(e.target.value);
            }}
             label={"Password"}  type={"password"}/>
            <div className='pt-4'>
            <Button onClick={ async () => {
              const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
              } );
              localStorage.setItem("token", response.data.token);
            }}
             label={"Sign In"} />
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin

