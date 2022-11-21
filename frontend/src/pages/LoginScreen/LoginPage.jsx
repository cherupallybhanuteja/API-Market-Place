import React from "react";
import person from "../person.jpeg";
import LoginForm from "../../components/Login/NewLogin";
import "./LoginPage.css"
import Navbar from "../../components/Navbar/Navbar";
import NewLogin from "../../components/Login/NewLogin";
const LoginPage = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
      <div className="left-container">
        <div className="login-img">
          <img src={person} alt="person" />
        </div>
        <div className="login-title">
          <h2>Welcome to your Dashboard</h2>
        </div>
        <div className="login-description">
          <p>
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>
      </div>
      <div className="right-container">
        <NewLogin/>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
