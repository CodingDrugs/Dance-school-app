import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../helpers/AxiosInstance'
import { toast } from 'react-toastify'

const AdminRegister = () => {

    
  let [adminData, setAdminData]=useState({
    userName: "",
    email:"",
    password:"",
    phone:"",
    dob:"",
    gender:""
  })
  
  let navigate = useNavigate()

  let handleRegister =(e)=>{
    e.preventDefault()
    console.log(adminData);
    let payload = adminData
    let data = axiosInstance.post("/admins/save",payload)
    console.log(data);
    toast.success(`${adminData.userName} Registration successful`)
    
    
    navigate("/login")
  }
  
  return (
    <div className="reg-container">
    <h1> Admin Register form</h1>
        <form action="" onSubmit={handleRegister}>
       
                <label htmlFor="">User Name :</label>
                <input type="text" name="userName"  id='username' onChange={(e)=>{
                  setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>
                <br />
                <label htmlFor="">Email :</label>
                <input type="email" name="email"  id='email' onChange={(e)=>{
                   setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>
                <br />
                <label htmlFor="">Password :</label>
                <input type="password" name="password"  id='password' onChange={(e)=>{
                   setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>
                <br />
                <label htmlFor="">Date of Birth :</label>
                <input type="date" name="dob"  id='dob' onChange={(e)=>{
                  setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>
                <br />
                <label htmlFor="">Phone No. :</label>
                <input type="number" name="phone"  id='phone' onChange={(e)=>{
                   setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>
                <br />
                <label htmlFor="">Gender :</label>
                <input type="radio" name='gender' value={"Male"} onChange={(e)=>{
                    setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>Male
                <input type="radio" name='gender' value={"Female"} onChange={(e)=>{
                   setAdminData({...adminData,[e.target.name] :e.target.value} )
                  }}/>Female
                <br />
                <button type="submit" >Submit</button>

        </form>
    </div>
  )
}

export default AdminRegister