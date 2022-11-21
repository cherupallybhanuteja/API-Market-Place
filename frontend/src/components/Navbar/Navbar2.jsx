import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar2.css';
import logo from './logo.svg'
import bars_solid from './bars-solid.svg'
import bars_staggered from './bars-staggered-solid.svg'
const Navbar2 = () => {

  const navigate = useNavigate()
  const[toggle,setToggle]=useState(false)
  const[toggle_btn,setToggle_btn]=useState(bars_solid)
  const [underLine,setUnderLine] = useState({
    myapi:false,
    myAccount:false
  })

  const onclickNewAPI = () =>{
    navigate('/new-api')
}

const onClickLogo=()=>{
  navigate('/dash-board')
}

  const onClickToggle = ()=>{
    setToggle(!toggle)
    if(toggle_btn===bars_solid)
    {
      setToggle_btn(bars_staggered)
    }
    else{
      setToggle_btn(bars_solid)
    }  
  }

  const linkHandler = (e) =>{
    const user = localStorage.getItem("userInfo")
    console.log(user)
    if(e.target.name==='myapi')
    {
      setUnderLine({
        myapi:true,
        myAccount:false
      })
    }
    else
    {
      setUnderLine({
        myapi:false,
        myAccount:true
      })
    }
  }

 
  return <nav>
      <img src={logo} style={{cursor:"pointer"}} alt="Cuvette" onClick={onClickLogo} />
      <img className='toggle' style={{float:"right" , height:"20px"}} onClick={onClickToggle} src={toggle_btn} alt='X'/>
       {toggle && <div className='animation'>
          {toggle && <div className='toggle center'><Link to='/my-api'name='myapi' className='links' onClick={linkHandler} >My APIs</Link></div>}
          {toggle && <div className='toggle center'><Link to='/my-account' className='links' name='myAccount' onClick={linkHandler} >My Account</Link></div>}
          {toggle && <div className='toggle center'><button  className='new-api-btn' onClick={onclickNewAPI}>+New API</button></div>}
      </div>}
      <ul className='list'>
          <li><Link to='/my-api'name='myapi' className={underLine.myapi?'links underline':'links' } onClick={linkHandler} >My APIs</Link></li>
          <li><Link to='/my-account' name='myAccount' className={underLine.myAccount?'links underline':'links' } onClick={linkHandler} >My Account</Link></li>
          <li><button  className='new-api-btn' onClick={onclickNewAPI} >+New API</button></li>
      </ul>
  </nav>
};

export default Navbar2;
