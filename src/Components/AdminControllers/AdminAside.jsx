import React from 'react'
import { Link } from 'react-router-dom';

const AdminAside = () => {
  return (
    <div className='admin-aside'>
        
        <h1>Dashboard</h1>
        <ul>
            <li><Link to={"/admin-dashboard/academy-manager-controller"}>Add Academy Manager </Link></li>
            <li><Link to={"/admin-dashboard/view-manager"}>View Manager</Link></li>
            <li><Link to={"/admin-dashboard/view-academy"}>View Academy</Link></li>
            <li><Link to={"/admin-dashboard/view-branch"}>View Branch</Link></li>
            <li><Link to={"/admin-dashboard/view-course"}>View Course</Link></li>
            {/* <li><Link to={"/admin-dashboard/academy-controller"}>Academy Controller</Link></li> */}
        </ul>
    </div>


  )
}

export default AdminAside