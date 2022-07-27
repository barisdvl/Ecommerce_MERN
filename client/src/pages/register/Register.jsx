import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="register-container">
        <Link to={"/"} className="register-logo">
            BD Store
        </Link>
        <div className="register-wrapper">
          <h1 className="register-title">CREATE AN ACCOUNT</h1>
          <form action="" className="register-form">
            <input
              type="text"
              className="register-formInput"
              placeholder="E-mail"
            />
            <input
              type="password"
              className="register-formInput"
              placeholder="Password"
            />
            <button className="register-formButton">CREATE</button>
            <a href="/login" className="register-formLink">Do you have account? Sign In!</a>
          </form>
        </div>
      </div>
    </div>
  );
}
