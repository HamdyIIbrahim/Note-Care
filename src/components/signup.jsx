import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirmation] = useState("");
  const validateData = () => {
    
    const Email = email.trim();
    const Password = password.trim();
    const PasswordConfirm = passwordConfirm.trim();
    if (Email === "") {
      toast.error("UserName is Required");
    } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(Email)) {
    } else {
      toast.error("You have entered an invalid email address!");
    }
    if (Password === "") {
      toast.error("Password is Required");
    }
    if (PasswordConfirm === "") {
      toast.error("Confirm Password is Required");
    }
    if (Password !== PasswordConfirm) {
      toast.error("Confirm Password is not equal to password");
    }
    if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(Email) &&
      Password === PasswordConfirm
    ) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then(() => {
          Navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  };
  function submitHandler(e) {
    e.preventDefault();
    validateData();
  }
  return (
    <div className="logContainer">
      <ToastContainer />
      <div className="login">
        <form>
          <h1>Sign up</h1>
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
            name="password"
            type='password'
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            name="password"
            type='password'
            placeholder="Password"
            className="input"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <p className="textToggle">Create account  <Link to='/login'>Login</Link></p>
          <button onClick={submitHandler}>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
