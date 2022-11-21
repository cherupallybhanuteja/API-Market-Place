import React from "react";
import "./Skeleton.css";
const Skeleton = (prop) => {
  return (
    <div>
      <div className="skeleton-card">
        <div className="skeleton-image skeleton"></div>
        <div className="skeleton-title skeleton-text skeleton "></div>
        <div className="skeleton-text skeleton"></div>
        <div className="skeleton-ending-text skeleton"></div>
      </div>
    </div>
  );
};

export default Skeleton;
