import React from 'react';
import './Button.css'
const Button = (props) => {

  const classes='btn '+props.className

  return <button className={classes} style={{backgroundColor:props.backColor,color:props.color}}>{props.text}</button>;
};

export default Button;
