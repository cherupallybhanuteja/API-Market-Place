import React, { useState } from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import './BackgroundRemoverScreen.css'
import image from './background.jpeg'
import Navbar2 from '../../components/Navbar/Navbar2';
const BackgroundRemoverScreen = () => {
//    return <UploadImage/>
  const[remove,setRemove] = useState(false);
  const[backgroundImage,setBackgroundImage] = useState(image)

  const onRemoveBackground = (reqImage)=>{
    console.log(reqImage.data)
    const x = reqImage
    //setBackgroundImage(`data:image/png;base64,${x.toString('base64')}`)
    setBackgroundImage(`data:image/png;base64,${x}`)
    setRemove(true)
  }

  const clearImageHandler = (event) =>{
    setBackgroundImage(image)
    setRemove(false)
  }

  const downloadHandler = (event) => {
      alert("Successfully Downloaded")
  }

  return <>
  <Navbar2/>
  <div className='container' >
      <div className='upload-left-container'  >
        <h1>Remove image background</h1>
        <p>100% automatic and free</p>
        <div className='background-image-container'>
          <img src={backgroundImage} alt='background'/>
        </div>
        <div className='buttons' >
        {remove? <button onClick={clearImageHandler}  >Clear Image</button>:<p></p>}
        {remove? <button onClick={downloadHandler}>Download</button>:<p></p>}
        </div>
        </div>
      <div className='right-container' >
       <UploadImage  onRemoveBackground={onRemoveBackground} />
       </div>
  </div>
  </>
;
};

export default BackgroundRemoverScreen;
