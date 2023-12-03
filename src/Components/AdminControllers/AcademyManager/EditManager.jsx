import React, { useEffect, useRef, useState } from 'react'
import axiosInstance from '../../../helpers/AxiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditManager = () => {
  
    let [userData, setuserData]=useState({
        userName: "",
        email:"",
        password:"",
        phone:"",
        dob:"",
        gender:""
      })

      let {userName,email,password,phone,dob,gender} = userData
      
    let {id} = useParams()
    let token = localStorage.getItem("token")
    let refMale = useRef()
    let refFemale = useRef()
    let navigate = useNavigate()
      
    useEffect(()=>{
      let fetchData= async()=>{
        
        let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
       setuserData(data.data)
       console.log(gender);
       if(gender =="Male"){
        refMale.current.setAttribute("checked","")
      }else{
        refFemale.current.setAttribute("checked","")
      }
      }
      fetchData()
   
    },[])
    
     
  let handleRegister =async(e)=>{
    e.preventDefault()
    console.log(userData);
    let payload = userData
    let data =await axiosInstance.put("/academymanagers/update",payload,{
      headers: {
          Authorization : `Bearer ${token}`
      }
  })
    toast.success(`${userData.userName}'s data successfully updated`)
    navigate(`/admin-dashboard/view-each-manager/${id}`)
  }
      


      return (
        <>
        <div className="main-container">
        <div className="reg-container">
        <h1>Edit Manager's details</h1>
            <form action="" onSubmit={handleRegister}>
           
                    <label htmlFor="">User Name :</label>
                    <input type="text" name="userName" value={userName} id='username' onChange={(e)=>{
                      setuserData({...userData,[e.target.name] :e.target.value} )
                      }}/>
                    <br />
                    <label htmlFor="">Email :</label>
                    <input type="email" name="email" value={email} id='email' onChange={(e)=>{
                      setuserData({...userData,[e.target.name] :e.target.value} )
                      }}/>
                    <br />
                    <label htmlFor="">Password :</label>
                    <input type="password" name="password" value={password} id='password' onChange={(e)=>{
                      setuserData({...userData,[e.target.name] :e.target.value} )
                      }}/>
                    <br />
                    <label htmlFor="">Date of Birth :</label>
                    <input type="date" name="dob" value={dob} id='dob' onChange={(e)=>{
                      setuserData({...userData,[e.target.name] :e.target.value} )
                      }}/>
                    <br />
                    <label htmlFor="">Phone No. :</label>
                    <input type="number" name="phone" value={phone} id='phone' onChange={(e)=>{
                      setuserData({...userData,[e.target.name] :e.target.value} )
                      }}/>
                    <br />
                    <label htmlFor="">Gender :</label>
                    <input type="radio" name='gender' ref={refMale} value={"Male"} onChange={(e)=>{
                      setuserData({...userData,[e.target.name] :e.target.value} )
                      }}/>Male
                    <input type="radio" name='gender' ref={refFemale} value={"Female"} onChange={(e)=>{
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

export default EditManager