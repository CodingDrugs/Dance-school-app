import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../helpers/AxiosInstance'
import { toast } from 'react-toastify'

const AcademyController = () => {

  let {id} = useParams()
  let token = localStorage.getItem("token")
  let [academyDetails,setAcademyDetails] = useState({
    academyName : "",
    contact : "",
    description : "",
    email : "",
    id: id
  })

  let handleData = (e)=>{
      setAcademyDetails({...academyDetails,[e.target.name] : e.target.value})
  }
console.log(academyDetails)

  let handleSubmit =(e)=>{
    e.preventDefault()

    let getData = axiosInstance.post(`/academies/saveacademy/?managerId=${id}`,academyDetails,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    console.log(getData);
    toast.success(`${academyDetails.academyName} Academy Added!`)
  }

 
  return (
    <>
      <div className="container-academy-controller">
        <h1>Academy Controller</h1>
        <form action="" onSubmit={handleSubmit}>
          <TextField id="standard-basic academyName" label="AcademyName" onChange={handleData} variant="standard" type="text" name='academyName'/>
          <TextField id="standard-basic contact" label="Contact" onChange={handleData} variant="standard" type="text" name='contact'/>
          <TextField id="standard-basic description" label="Description" onChange={handleData} variant="standard" type="text" name='description'/>
          <TextField id="standard-basic email" label="Email" onChange={handleData} variant="standard" type="text" name='email'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default AcademyController