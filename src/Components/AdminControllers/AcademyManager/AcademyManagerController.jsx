import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../helpers/AxiosInstance'
import { toast } from 'react-toastify'

const AcademyManagerController = () => {

    let token = localStorage.getItem("token")
    let [userData, setuserData]=useState({
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
        console.log(userData);
        let payload = userData
        let data = axiosInstance.post("/academymanagers/save",payload,{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        console.log(data);
        toast.success(`${userData.userName}'s Registration successful`)
        navigate("/admin-dashboard/view-manager")
      }
    
  return (
    <>
    <div className="main-container">
      <div className="reg-container">
      <h1>Academy Manager controller</h1>
          <form action="" onSubmit={handleRegister}>
         
              <label htmlFor="">User Name :</label>
                  <input type="text" name="userName"  id='username' onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>
                  <br />
                  <label htmlFor="">Email :</label>
                  <input type="email" name="email"  id='email' onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>
                  <br />
                  <label htmlFor="">Password :</label>
                  <input type="password" name="password"  id='password' onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>
                  <br />
                  <label htmlFor="">Date of Birth :</label>
                  <input type="date" name="dob"  id='dob' onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>
                  <br />
                  <label htmlFor="">Phone No. :</label>
                  <input type="number" name="phone"  id='phone' onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>
                  <br />
                  <label htmlFor="">Gender :</label>
                  <input type="radio" name='gender' value={"Male"} onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>Male
                  <input type="radio" name='gender' value={"Female"} onChange={(e)=>{
                    setuserData({...userData,[e.target.name] :e.target.value} )
                    }}/>Female
                  <br />
              <button type="submit" >Submit</button>
                  
          </form>
      </div>
    </div>
    
     
    </>
  )
    
}

export default AcademyManagerController