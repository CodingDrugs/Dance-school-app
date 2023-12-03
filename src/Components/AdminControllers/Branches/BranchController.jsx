import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../helpers/AxiosInstance'


const BranchController = () => {


  let {id}=useParams()
  let token = localStorage.getItem("token")
  let [branchDetails,setBranchDetails]= useState({
    academy: {
      academyName : "",
      contact : "",
      description : "",
      email : "",
      id: id
    },
    address:"",
    city:"",
    phone:"",
    pincode:"",
  })

  // let {academyName,contact,description,email} = branchDetails

  let handleBranch = (e)=>{
    setBranchDetails({...branchDetails,[e.target.name] : e.target.value})
   
  }

  useEffect(()=>{
      let fetchData =async ()=>{
          let {data}= await axiosInstance.get(`/academies/get/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(data.data);
      

      }
      fetchData()
  },[])

  let handleSubmit =(e)=>{
    // e.preventDefault()
    
    // let getData = axiosInstance.post("/branches/save",branchDetails,{
    //   headers: {
    //     Authorization : `Bearer ${token}`
    //   }
    // })
    // console.log(getData);
  }
  
  return (
    <div className='branch'>
        
        <form action="" onSubmit={handleSubmit}>
        <h1>Branch</h1>
            <TextField id="standard-basic address"  label="Address"  variant="standard" onChange={handleBranch} type="text" name='address'/>
            <TextField id="standard-basic city"  label="City" onChange={handleBranch} variant="standard" type="text" name='city'/>
            <TextField id="standard-basic phone"  label="Phone" onChange={handleBranch} variant="standard" type="text" name='phone'/>
            <TextField id="standard-basic pincode"  label="Pincode" onChange={handleBranch} variant="standard" type="text" name='pincode'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BranchController