import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" className="login__input" />
          <h5>Password</h5>
          <input type="password" className="login__input" />
          <button type="submit" className="login__btn">
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
        <div className="login__newuser">
          <p>New to amazon ?</p>
          <button  className="login__register">
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
