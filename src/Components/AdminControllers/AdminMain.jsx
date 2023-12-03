import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMain = () => {
  return (
    <div className='admin-main'>
        <Outlet/>
        
    </div>
  )
}

export default AdminMain