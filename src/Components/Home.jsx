import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let token = localStorage.getItem("token")

  console.log(token);
    if(token){
      return (
        <div>Home</div>
      )
    }
    

}

export default Home