import React, { useState } from 'react'
import axiosInstance from '../../../helpers/AxiosInstance'
import { Link, useParams } from 'react-router-dom'

const ViewEachManager = () => {

    let {id}= useParams()

    let token = localStorage.getItem("token")
    let [userName,setUserName]= useState("")
    let [phone,setPhone]= useState("")
    let [email,setEmail]= useState("")

    let fetchData= async()=>{
        
        let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
       setUserName(data.data.userName)
       setPhone(data.data.phone)
       setEmail(data.data.email)
      }
      fetchData()

    let handleDelete =()=>{
      axiosInstance.delete(`/academymanagers/delete/${id}`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      window.location.assign(`/admin-dashboard/view-manager`)
    }
     
  return (
    <div className="main-container">
      <div className="view-manager-details">

    
            <h1>{userName}</h1>
            <h1>{phone}</h1>
            <h1>{email}</h1>
            <div className="btns">
                <button ><Link to={`/admin-dashboard/edit-manager/${id}`}>Edit</Link></button>
                <button ><Link to={`/admin-dashboard/academy-controller/${id}`}>Add Academy</Link></button>
                <button onClick={handleDelete}>Delete</button>
            </div>
      </div>
    </div>
  )
}

export default ViewEachManager