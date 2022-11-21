import React from 'react';
import Title from '../../components/UI/Title';
import './MyAccount.css'
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../../components/Navbar/Navbar2';
const MyAccount = () => {
  const navigate = useNavigate();
  const login =JSON.parse(localStorage.getItem('userInfo'))
  if(login.token === ''){
    navigate('/');
  }
  const onClickHandler = ()=>{
    localStorage.clear();
    navigate('/')
  }
 
  return <div>
    <Navbar2/>
      <Title title = "MY ACCOUNT"/>
      <div className='account' >
      <h3>Full Name : {login.fullname}</h3>
      <h3>Email : {login.email}</h3>
      <button className='logout-btn' onClick={onClickHandler} >Logout</button>
      </div>
  </div>;
};

export default MyAccount;
