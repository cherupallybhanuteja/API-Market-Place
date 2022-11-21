import React from "react";
import "./RowColoumn.css";
import image from "./card.jpg";
import Skeleton from "./ShimmerEffect/Skeleton"
import Card from "./Card/Card"
const RowColoum = (props) => {
  console.log(props)
  return (
   
    <div className="dashboard-container">
       {props.skeleton &&<Skeleton/>}
       <div className="card-container">
        {props.cards.map((prop) => (
          <Card id={prop._id} onUpdate={props.onUpdate} apiName={prop.apiName} description={prop.description} file={prop.file} author={prop.author}/>
        ))}
      </div>
    </div>
  );
};

export default RowColoum;
