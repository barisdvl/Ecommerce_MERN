import { Lock, Person } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [flash, setFlash] = useState({
    severity: "info",
    message: "info",
  });
  const [showFlash, setShowFlash] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    if(error){
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
    <div className="containerLogin">
      <div className="contentCenter">
        <div className="card">
          <div className="cardHeader">
            <h3>LOGIN</h3>
          </div>
          <div className="cardBody">
            <Snackbar
              open={showFlash}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
            <form className="cardForm" onSubmit={handleSubmit}>
              <div className="formInputItem">
                <Person className="formInputIcon" />
                <input
                  type="text"
                  placeholder="email"
                  className="formInputText"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInputItem">
                <Lock className="formInputIcon" />
                <input
                  type="password"
                  placeholder="password"
                  className="formInputText"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="formSubmitBtn">
                <input
                  type="submit"
                  value="LOG IN"
                  className="loginBtn"
                  disabled={isFetching}
                />
              </div>              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
