import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpForm.css";
var Spinner = require("react-spinkit");
const SignUpForm = (props) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...user, [name]: value };
    setUser(newdata);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("clicked");
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      await axios.post(
        "https://apiplace.herokuapp.com/api/register",
        user,
        config
      );
      navigate("/");
    } catch (error) {
      alert("Enter the creadentials which are no registered");
    }

    setUser({
      fullname: "",
      email: "",
      password: "",
    });
    setLoading(false);
  };

  const onchange = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <form className="form">
      <h3>Signup to experience the previlages</h3>
      <input
        type="text"
        placeholder="Full Name"
        onChange={onChangeHandler}
        name="fullname"
        value={user.fullname}
        className="form-control"
      />

      <input
        type="email"
        placeholder="Email"
        onChange={onChangeHandler}
        name="email"
        value={user.email}
        className="form-control"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={onChangeHandler}
        name="password"
        value={user.password}
        className="form-control"
      />

      {!loading && (
        <button className="login-btn" onClick={submitHandler}>
          Register
        </button>
      )}
      {!loading && <p className="or">OR</p>}
      {!loading && (
        <button className="login-btn" onClick={onchange}>
          Login
        </button>
      )}
      <div className="loading">
        {loading && (
          <Spinner
            name="line-scale"
            color="#142683"
            style={{ margin: "auto" }}
          />
        )}
      </div>
    </form>
  );
};

export default SignUpForm;
