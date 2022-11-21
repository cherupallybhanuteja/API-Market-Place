import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Dashboard/Banner";
import RowColoum from "../../components/RowColoum";
import image from "../../components/card.jpg";
import Title from "../../components/UI/Title";
import axios from "axios";
import Navbar2 from "../../components/Navbar/Navbar2";
const Dashboard =() => {
  const[skeleton,setSkeleton] = useState(true)
  const[cards,setCards]=useState([])
  const user=localStorage.getItem("userInfo")
  const d= JSON.parse(user)
  const navigate = useNavigate();
 
  console.log(d)
  useEffect(()=>{
    if (d===null){
      navigate("/");
    }
    const fetchData = async () =>{
     const data = await axios.get("https://apiplace.herokuapp.com/api/fetchALL",{});
     setSkeleton(false) 
     setCards(data.data)
      console.log(data)
    }
    fetchData();
  },[])


  return (
    <div>
      <Navbar2/> 
      <Banner />
      <Title title="All APIs"></Title>
      <RowColoum title="All APIs" cards={cards} skeleton={skeleton}/>
    </div>
  );
};

export default Dashboard;
