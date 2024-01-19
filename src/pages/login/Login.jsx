import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {TbProgress} from "react-icons/tb"
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <>

    <div className="login">
    <h3 className="loginLogo">Passion Church</h3>
      <div className="loginWrapper">
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <TbProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button className="loginRegisterButton">
              {isFetching ? (
                <TbProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
