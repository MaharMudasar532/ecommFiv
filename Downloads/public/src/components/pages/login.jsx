import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section ClassName="logon">
        <div ClassName="contain">
          <div ClassName="log_blk">
            <form action="" method="">
              <h3>Sign In</h3>
              <div ClassName="form_blk">
                <label for="" ClassName="move">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id=""
                  ClassName="input"
                  required=""
                />
              </div>
              <div ClassName="form_blk pass_blk">
                <label for="" ClassName="move">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id=""
                  ClassName="input"
                  required=""
                />
                <i ClassName="icon-eye"></i>
              </div>
              <div ClassName="form_blk flex">
                <div ClassName="lbl_btn">
                  <input
                    type="checkbox"
                    name="remeberMe"
                    id="remember"
                    checked=""
                  />
                  <label for="remember">Remember me</label>
                </div>
                <a href="password.php" id="pass">
                  Forgot Password?
                </a>
              </div>
              <div ClassName="btn_blk text-center">
                <button type="submit" ClassName="webBtn default-btn">
                  Sign in <i ClassName="spinner hidden"></i>
                </button>
              </div>
            </form>
            <div ClassName="br"></div>
            <div ClassName="have_account text-center">
              <span>Don’t have an account?</span>
              <NavLink href="signup.php">Sign up</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
