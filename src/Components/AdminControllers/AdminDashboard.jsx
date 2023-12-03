import React from 'react'
import AdminAside from './AdminAside'
import AdminMain from './AdminMain'

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard-container'>
        <AdminAside/>
        <AdminMain/>
    </div>
  )
}

export default AdminDashboard