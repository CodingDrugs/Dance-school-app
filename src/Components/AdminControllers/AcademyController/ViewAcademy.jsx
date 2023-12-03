import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../helpers/AxiosInstance'
import { Link } from 'react-router-dom'

const ViewAcademy = () => {

  let token = localStorage.getItem("token")
  let [academy, setAcademy] = useState([])

  useEffect(()=>{
      let fetchData =async()=>{
          let {data} = await axiosInstance.get("/academies/getall",{
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
          console.log(data.data);
          setAcademy(data.data)
          
      } 
      fetchData()
  },[])

  return (
    <>
        <table border={"2px"} cellPadding={"20px"} cellSpacing={"0px"} >
          <tr> 
            <th>Academy Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Description</th>
            <th>controllers</th>
          </tr>
    
            {
              academy.map((item)=>{
                return(
                  <tr>
                    <td>{item.academyName}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.description}</td>
                    <td>
                      <button><Link to={`/admin-dashboard/edit-controller/${item.id}`}>Edit</Link></button>
                      <button><Link to={`/admin-dashboard/branch-controller/${item.id}`}>Branch</Link> </button>
                      <button onClick={()=>{
                         axiosInstance.delete(`/academies/delete/${item.id}`,{
                          headers : {
                            Authorization : `Bearer ${token}`
                          }
                        })
                        window.location.assign("/admin-dashboard/view-academy")
                      }}>Delete </button>
                    </td>
                  </tr>
                )
              })
            }


        </table>
    
    </>
  )
}

export default ViewAcademy