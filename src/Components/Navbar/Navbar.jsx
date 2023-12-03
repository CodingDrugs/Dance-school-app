import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/dance-logo.png'

const Navbar = () => {

  let token = localStorage.getItem("token")

  let role = localStorage.getItem("role")
  console.log(role);
 
  
 
  return (
    <>
        <section className='nav-header'>
            <nav>
                <div className="logo"><img src={logo} alt="" /></div>
                <ul id="menu">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Gallery</Link></li>
                    {role==="ROLE_ADMIN" ? <li><Link to="/admin-dashboard">Dashboard</Link></li> : <></>}
                    {token ? <li><Link onClick={()=>{
                      localStorage.clear()
                      window.location.assign("/login")
                      }}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>}
                     
                    {token ? <span></span> : <li> <Link to="/register">Register</Link></li>}
                   
                  
                </ul>
            </nav> 
        </section>
    </>
  )
}

export default Navbar