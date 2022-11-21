import React, { useState } from 'react';
import './NewAPIModal.css'
import defaultApiImage from './API.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
var Spinner = require('react-spinkit');
const NewAPIModal = () => {

  const navigate = new useNavigate()
  const x = localStorage.getItem("userInfo")
  const author = JSON.parse(x).token
  console.log(author)
  const onClick_X = () =>{
    navigate('/dash-board')
  }
  const[loading,setLoading] = useState(false)
  const[img,setImg]=useState(defaultApiImage)
  const[input,setInput]=useState({
    ApiName:"",
    ApiEndPoint:"",
    Description:"",
    author:author,
    public:false
  })

  const onChangeInput = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...input, [name]: value };
    setInput(newdata);
  }

const imageHandler = async(event)=>{
  const x = await event.target.files[0]
  setImg(x);
}

const onSubmitHandler = async(event)=>{
  event.preventDefault()
  setLoading(true)
  console.log("Submit")
  const formdata = new FormData();
  formdata.append("apiName",input.ApiName)
  formdata.append("apiEndPoint",input.ApiEndPoint)
  formdata.append("description",input.Description)
  formdata.append("author",author)
  formdata.append("public",input.public)
  formdata.append("photo",img)
  const response = await axios.post("https://apiplace.herokuapp.com/api/addAPI",formdata)
 // const response = await axios.post(+"addAPI",formdata)
  if(response){
    console.log("API added")
    navigate('/my-api')
  }
  else{
    console.log("Error")
  }
  setLoading(false)
}

  return (
  <div className='modal-container'>
    <div  className='modal-input-container' >
    <div className='x-btn' >
      <button onClick={onClick_X}>X</button>
    </div>
    <div className='modal-title'>
      <h2>Add new API</h2>
    </div>
    <div>
      <form onSubmit={onSubmitHandler}>
      <input type="text" placeholder='API Name'onChange={onChangeInput} name='ApiName' value={input.ApiName}  className='modal-input' />
      <input type="text" placeholder='API End Point'onChange={onChangeInput} name='ApiEndPoint' value={input.ApiEndPoint}  className='modal-input' />
      <input type="text" placeholder='Description'onChange={onChangeInput} name='Description' value={input.Description} className='modal-input' />
      <input type='file' onChange={imageHandler}/>
      {!loading &&<button className='add-api-btn'  type='submit'>Add API</button>}
      {loading && <Spinner name="line-scale" color="#142683"  style={{margin:"auto"}}/>}
      </form>
    </div>
    </div>
  </div>)
};

export default NewAPIModal;
