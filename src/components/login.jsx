import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setAuth } from "./reduxToolkit/reducer";
function Login() {
  const selector = useSelector((state) => state.color.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const validateData = (e) => {
    e.preventDefault();
    const Email = email.trim();
    const Password = password.trim();
    if (Email === "") {
      toast.error("UserName is Required");
    }
    if (Password === "") {
      toast.error("Password is Required");
    }
    if (Email !== "" && Password !== "") {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Email,
          password: Password,
          returnSecureToken: true,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.passOk);
          if (data.passOk === true) {
            dispatch(setAuth(true));
            Navigate("/");
          } else {
            toast.error(data.error.message);
          }
        }).catch(() => {
            toast.error("error");
        });
    }
  };
  return (
    <div className="logContainer">
      <ToastContainer />
      <div className="login">
        <form>
          <h1>Login</h1>
          <label>Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email or Phone"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={validateData}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
