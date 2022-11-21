import React from "react";
import "./Banner.css";
import bannerImage from "./banner.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Banner = () => {
  const navigate = useNavigate()



  const onclickHandler =async (event)=>{
   
    // const user = await localStorage.getItem("userInfo")
    // console.log(user)
    // try {
    // await axios.delete("http://localhost:4000/api/delete-login",{email:user.email})
    // } catch (error) {
      
    // } 

    navigate('/background-remover')
  }
  

  return (
    
    <div className="banner">
      <img className="banner-img" src={bannerImage} alt="Banner" />
      <div className="banner-description">
      <h2>BACKGROUND IMAGE REMOVE</h2>
        <p>100% automatic and free</p>
      </div>
      <div className="banner-btn">
        <button onClick={onclickHandler}  >View API</button>
      </div>
    </div>
   
  );
};

export default Banner;
