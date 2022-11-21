import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./newlogin.css";
var Spinner = require("react-spinkit");
const NewLogin = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("userInfo");
    if (logged) {
      navigate("/dash-board");
    }
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    loading: false,
    error: false,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...user, [name]: value };
    setUser(newdata);
  };
  const submitHandler = async (event) => {
    console.log("clicked");
    setLoading(true);
    event.preventDefault();
    // props.onSignIn(user);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setUser({ ...user, loading: true });
      const { data } = await axios.post(
        "https://apiplace.herokuapp.com/api/Login",
        {
          email: user.email,
          password: user.password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser({ ...user, loading: false });
      navigate("/dash-board");
    } catch (error) {
      setUser({ ...user, loading: false });
      setUser({ ...user, error: error.response.data.message });
      alert("Enter Registered Credentials");
    }

    setUser({
      fullname: "",
      email: "",
      password: "",
    });
    setLoading(false);
  };

  const onRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <form className="form">
      <h3>Login to your account</h3>
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
          Login
        </button>
      )}
      {!loading && <p className="or">OR</p>}
      {!loading && (
        <button className="login-btn" onClick={onRegister}>
          Register
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

export default NewLogin;
