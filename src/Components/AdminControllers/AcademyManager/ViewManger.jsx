import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../helpers/AxiosInstance'
import { Link } from 'react-router-dom'

const ViewManger = () => {

  let token = localStorage.getItem("token")
  let [manager,setManager] = useState([])
  useEffect(()=>{

    let fetchData= async()=>{
      let {data} = await axiosInstance.get("/academymanagers/getall",{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      setManager(data.data)
    }
    fetchData()
    


  },[])
  return (
    <>
    <div className="main-container">
      <div className="sub-container">
      {
          manager.map((data)=>{
            return(
              <div className="view-manager-details" key={data.id}>
                  <h1>{data.userName}</h1>
                  <button type=''><Link to={`/admin-dashboard/view-each-manager/${data.id}`}>{`View ${data.userName}`}</Link></button>
              </div>
            )
          })
      }
      </div>
   

    </div>
    
    </>
  )
}

export default ViewManger