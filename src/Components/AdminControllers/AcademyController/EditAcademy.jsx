import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../helpers/AxiosInstance';
import { toast } from 'react-toastify';

const EditAcademy = () => {

    let navigate = useNavigate()
    let {id} = useParams()
    let token = localStorage.getItem("token")
    let [academyDetails,setAcademyDetails] = useState({
      academyName : "",
      contact : "",
      description : "",
      email : "",
      id: id
    })
  
    let {academyName,contact,description,email} = academyDetails

    let handleData = (e)=>{
        setAcademyDetails({...academyDetails,[e.target.name] : e.target.value})
    }
  console.log(academyDetails)


  useEffect(()=>{
        let fetchData=async()=>{
            let {data} =await axiosInstance.get(`/academies/get/${id}`,{
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log(data.data);
            setAcademyDetails(data.data)
          
        }
        fetchData()
       
  },[])

  
    let handleSubmit =(e)=>{
      e.preventDefault()
  
      let getData = axiosInstance.put("/academies/update",academyDetails,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      console.log(getData);
      
      toast.success(`${academyDetails.academyName} Academy updated!`)
      window.location.assign("/admin-dashboard/view-academy")
    }
  
   
    return (
      <>
        <div className="container-academy-controller">
          <h1>Academy Controller</h1>
          <form action="" onSubmit={handleSubmit}>
            <TextField id="standard-basic academyName" value={academyName} label="AcademyName" onChange={handleData} variant="standard" type="text" name='academyName'/>
            <TextField id="standard-basic contact" value={contact} label="Contact" onChange={handleData} variant="standard" type="text" name='contact'/>
            <TextField id="standard-basic description" value={description} label="Description" onChange={handleData} variant="standard" type="text" name='description'/>
            <TextField id="standard-basic email" value={email} label="Email" onChange={handleData} variant="standard" type="text" name='email'/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </>
    )
}

export default EditAcademy