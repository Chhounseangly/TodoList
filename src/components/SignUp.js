import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/SignUp.scss";
import Logo from "../assets/img/Logo.png";
import SMS from "../assets/icon/sms.svg";
import USER from "../assets/icon/user.svg";
import Lock from "../assets/icon/lock.svg";
import { user } from "../Data/user";

const SignUp = () => {
  const [usernam, setUsernam] = useState(user.name);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [list, setList] = useState([]);

  const navigator = useNavigate();

  const handlechange = (e) => {
    setPassword({...usernam,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const data = { usernam, email, password };

    // if (usernam && email) {
    //   setList((ls) => [...ls, data]);
    //   setUsernam("");
    //   setEmail("");
    //   setPassword("");
    // }
  };
  return (
    <div className="conatiner-signup-page">
      <div className="header">
        <img src={Logo} alt="" className="logo-img" />
        <p>
          Welcome to <span>DO IT NOW</span>{" "}
        </p>
      </div>

      <div className="container-signup">
        <form onSubmit={handleSubmit}>
          <p className="signup-title">Sign up</p>
          <div className="email-box-signup">
            <img src={USER} alt="" />
            <div className="block-bar"></div>
            <input
              type="text"
              name="username"
              id=""
              placeholder="Username"
              value={usernam.name}
              // onChange={(e) => setUsernam(e.target.value)}
              onChange={handlechange}
              autoFocus
            />
          </div>

          <div className="email-box-signup">
            <img src={SMS} alt="" />
            <div className="block-bar"></div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="password-box-signup">
            <img src={Lock} alt="" />
            <div className="block-bar"></div>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="password-box-signup">
            <img src={Lock} alt="" />
            <div className="block-bar"></div>
            <input
              type="password"
              name="confirm-password"
              id=""
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-signup" onClick={() => navigator("/")}>
            Sign up
          </button>
        </form>

        <p className="already-exist">
          Have account already? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
