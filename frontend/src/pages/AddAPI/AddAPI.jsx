import React from 'react'
import Navbar2 from '../../components/Navbar/Navbar2'
import NewAPIModal from '../../components/NewAPIModal/NewAPIModal'
import './AddAPI.css'
const AddAPI = () => {
  return (
    <div >
        <Navbar2/>
        <div className='addAPI'><NewAPIModal/></div>
        
    </div>
  )
}

export default AddAPI