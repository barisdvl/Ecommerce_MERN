import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import "./login.css";
import { Alert, Snackbar } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isFetching, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [flash, setFlash] = useState({
    severity: "info",
    message: "info",
  });
  const [showFlash, setShowFlash] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, { email, password }).then(() => navigate("/"));
    if (error) {
      setFlash({
        severity: "error",
        message: "You entered wrong username or password.",
      });
      setShowFlash(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowFlash(false);
  };

  return (
    <div className="login">
      <div className="login-container">
        <Link to={"/"} className="login-logo">
          BD Store
        </Link>
        <div className="login-wrapper">
          <h1 className="login-title">SIGN IN</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="E-Mail"
              className="login-formInput"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-formInput"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-formButton" disabled={isFetching}>
              LOGIN
            </button>
            <a href="/" className="login-formLink">
              Do not you remember your password?
            </a>
            <a href="/register" className="login-formLink">
              Don't have account? Sign Up!
            </a>
            <Snackbar
              open={showFlash}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity={flash.severity}
                sx={{ width: "100%" }}
                variant="filled"
              >
                {flash.message}
              </Alert>
            </Snackbar>
          </form>
        </div>
      </div>
    </div>
  );
}
