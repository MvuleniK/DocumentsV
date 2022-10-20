import React from 'react'
import './body.css';

import { useNavigate } from "react-router-dom";
import pic from '../../images/istockphoto-1254347556-612x612.jpg';
function Body(){
  const navigate = useNavigate();     
    return (
        <>
        <div className='backgroundimg'>
        <div className='cbgffdf'>
        <h1>Docuify</h1>
        <p>Blockchain Based Application</p>
        <button onClick={() => navigate("/Authentication")} className='Login1'>
            Login
         </button>
        </div>
        
        </div>
        <div className='border'>
        <div className='box'>
        <h2> We provide you</h2>
        <div className='line'/>
        <p className='p2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
       
        </div>
        <div> 
          <img className='pic'   src={pic} alt="pic"/>
          </div>

        <div className='box1'>
        <h2> We will collaborate with you</h2>
        <div className='line'/>
        <p className='p2'>
        We make sure to listen our customers by giving them the best service and maintaining the confidentiality of your personal documents.
We are prepare to give timely responses to questions, concerns and ensure follow up to our clients needs.
 
        </p>
        </div>
         </div>
         
    </>
  )
}

export default Body