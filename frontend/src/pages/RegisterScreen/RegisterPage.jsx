import React from "react";
import SignUpForm from "../../components/signup/SignUpForm";
import person from "../person.jpeg";
import "./RegisterPage.css";
import Navbar2 from "../../components/Navbar/Navbar2";
const RegisterPage = () => {
  return (
    <div>
      <Navbar2 />
      <div className="container">
        <div className="left-container">
          <div className="login-img">
            <img className="image" src={person} alt="person" />
          </div>
          <div className="login-title">
            <h2>Get started with Cuvette</h2>
          </div>
          <div className="login-description">
            <p>You can download and upload APIs for free</p>
          </div>
        </div>
        <div className="right-container">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
