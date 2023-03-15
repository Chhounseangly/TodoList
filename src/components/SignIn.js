import React from "react";
import "../style/SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import SMS from "../assets/icon/sms.svg";
import Lock from "../assets/icon/lock.svg";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="conatiner-signin-page">
      <div className="header">
        <img src={Logo} alt="" className="logo-img" />
        <p>
          Welcome to <span>DO IT NOW</span>{" "}
        </p>
      </div>

      <div className="conatiner-sign">
        <form>
          <p className="signin-title">Sign in</p>
          <label className="email-box">
            <img src={SMS} alt="" />
            <div className="block-bar"></div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              autoFocus
            />
          </label>

          <label className="password-box">
            <img src={Lock} alt="" />
            <div className="block-bar"></div>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </label>

          <Link to="/forgotpassword" className="forgot-pas">
            Forgot password?
          </Link>
          <button
            type="submit"
            className="btn-signin"
            onClick={() => navigate("/")}
          >
            Sign in
          </button>
        </form>

        <p className="create-new">
          Didn't have account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
