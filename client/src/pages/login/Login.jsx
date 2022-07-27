import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <Link to={"/"} className="login-logo">
          BD Store
        </Link>
        <div className="login-wrapper">
          <h1 className="login-title">SIGN IN</h1>
          <form className="login-form">
            <input
              type="text"
              placeholder="E-Mail"
              className="login-formInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-formInput"
            />
            <button className="login-formButton">LOGIN</button>
            <a href="/" className="login-formLink">
              Do not you remember your password?
            </a>
            <a href="/register" className="login-formLink">
              Don't have account? Sign Up!
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
