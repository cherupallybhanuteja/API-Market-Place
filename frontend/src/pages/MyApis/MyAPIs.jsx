import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect ,useState } from "react";
import RowColoum from "../../components/RowColoum";
import Title from "../../components/UI/Title";
import axios from "axios";
import Navbar2 from "../../components/Navbar/Navbar2";
const MyAPIs = () => {
  const navigate = useNavigate();
  const[cards,setCards]=useState([])
  const[skeleton,setSkeleton] = useState(true)
  const loginData = localStorage.getItem("userInfo")
  const d = JSON.parse(loginData)
  useEffect(()=>{
    const fetchData = async() =>{
      if (d===null){
        navigate("/");
      }
      const user = {
        author:d['token']
      }
      const x = await axios.post('https://apiplace.herokuapp.com/api/myAPIs',user);
      setSkeleton(false)
      setCards(x.data);
    }
    fetchData();
  },[])


console.log(cards)

  return (
    <div>
      <Navbar2/>
      <Title title="All APIs"></Title>
      <RowColoum title="All APIs" cards={cards} skeleton={skeleton}/>
    </div>
  );
}
export default MyAPIs;