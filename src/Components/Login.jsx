import React, { useState } from 'react'
import axiosInstance from '../helpers/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { TextField } from '@mui/material'


const Login = () => {


  
  let navigate = useNavigate()
  let [userEmail, setUserEmail] = useState("")
  let [password, setPassword] = useState("")

  let handleLogin=async(e)=>{
    e.preventDefault()
    try{

      
        
    let payload = {userEmail,password}

    let userData=await axiosInstance.post("/authenticate",payload)
    console.log(userData);

    localStorage.setItem("token",userData.data.token)
    localStorage.setItem("role",userData.data.role)
    toast.success(`Logged in Successful` )

    window.location.assign("/home")

    }catch{
      toast.error("User name or password mismatch")
    }
 
  }

  return (
    <>
    
    <div className="login-container">
    <h1>Login </h1>
    
      <form action="" onSubmit={handleLogin}>
        {/* <label htmlFor="">User Email</label> */}
       <div className="inputData">
       <TextField id="standard-basic userEmail" label="Email" variant="standard" type="text" name='userEmail' onChange={(e)=>{setUserEmail(e.target.value)}}/>
        {/* <label htmlFor="">Password</label> */}
        
        <TextField type="password" id='standard-basic password' label="Password" variant="standard" name='password' onChange={(e)=>{setPassword(e.target.value)}}  />
     
       </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    
    </>
   
  )
}

export default Login