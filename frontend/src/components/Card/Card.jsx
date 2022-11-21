import React from 'react';
import trash_can from './trash-can.svg'
import { useNavigate } from 'react-router-dom';
import './Card.css'
import axios from 'axios';
const Card = (prop) => {
  const userInfo =  localStorage.getItem("userInfo")
  const author=JSON.parse(userInfo).token
  const navigate = useNavigate();
    const onDelete = async() =>{
      const data = await axios.post("https://apiplace.herokuapp.com/api/deleteAPI",{apiName:prop.apiName});
      if(data){
        prop.onUpdate();
      }
    }
    const onClickHandler = (e) =>{
       navigate('/api',{id:"61fc245542fa0a0820364b60"})
    const data = {
      id:prop.id,
      apiName:prop.apiName,
      image:`data:image/png;base64,${prop.file}`,
      description:prop.description
    }
      console.log(e.target.name)
      alert(e.target.name)
      navigate('/api',data)
    }
    return (
        <div className="card" key = {prop.id}>
          {(prop.author===author) && <img className='delete-btn' src={trash_can}  alt="X" onClick={onDelete}/>}
            <img className="card-image"  name = {prop.id}  src={`data:image/png;base64,${prop.file}`} alt="API"  onClick = {onClickHandler}/>
            <p className="card-title"   name = {prop.id} onClick = {onClickHandler}>{prop.apiName}</p>
            <p className="card-description" name = {prop.id}  onClick = {onClickHandler}>{prop.description}</p>
        </div>
  )
}

export default Card