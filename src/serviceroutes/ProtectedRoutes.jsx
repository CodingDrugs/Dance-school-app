import React from 'react'
import { toast } from 'react-toastify'

const ProtectedRoutes = ({children}) => {
    let token = localStorage.getItem("token")
    if(token){
        return (
            <div>{children}</div>
          )
    }
    else{
        toast.error("Please login first...")
        
    }

}

export default ProtectedRoutes