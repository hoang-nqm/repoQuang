import "./login.style.scss";

import React, { useState, useEffect, useRef } from "react";
import { Checkbox, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleLogin from "react-google-login";
import { auth, ggProvider } from "../../Firebase/config";
import { signInWithPopup } from "firebase/auth";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let button = useRef(null);

  const login = () => {
    console.log("username: " + username);
    console.log("password: " + password);
  };

  useEffect(() => {
    document.title = "Login Page";
  });

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    width: "100%",
    border: "1px solid",
    margin: "20px 0px 5px 42px !important",
    lineHeight: 1.7,
    backgroundColor: "#53AA51",
    borderColor: "#7E7373",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#53AA51",
      borderColor: "#7E7373",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#53AA51",
      borderColor: "#7E7373",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });
   const [account,setAccount]=useState([]);
  const handleLoginGoogle = async () => {
    const user = await signInWithPopup(auth, ggProvider);
    let userInfo = user.user;
    const { displayName, email, photoURL, uid, providerData, accessToken } = userInfo;
    console.log(photoURL);
    console.log(userInfo);
    setAccount(userInfo);
  };
  return (
    <div className="login">
      <div className="login-form">
        <div className="left-login">
          <h3>Welcome</h3>
          <div className="input-text">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Please enter your email address"
              variant="outlined"
            />
          </div>
          <div className="password">
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="bottom-input">
            <div className="remember">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <h4>Remember password</h4>
            </div>
            <div className="forgot">
              <a href="">Forgot password</a>
            </div>
          </div>
          <div className="button-group">
            <div className="sign-in">
              <BootstrapButton variant="contained" disableRipple>
                Sign in
              </BootstrapButton>
            </div>
          </div>
          <div className="login__form__social">
            <h1></h1>
            <label
              className="icon-google"
              for="login-button"
              onClick={() => {
                handleLoginGoogle();
              }}
            >
              <img
                ref={button}
                src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png"
                alt=""
              />
              <span>Sign in with @fpt.edu.vn</span>
            </label>
          </div>
          <h4>
            Don't have account? <a href="">Sign up</a>
          </h4>
        </div>
        <div className="right-login">
          <div className="top-right"></div>
          <div className="bottom-right"></div>
          <div className="logo">
            <img src="https://s3-alpha-sig.figma.com/img/570f/a41c/32c099253878545090c9e8e1536911e3?Expires=1664150400&Signature=W5rykOkRCf-7iuWBi~wCZsYX5Mn1ZxBioIOXF8PYfAWCbkPrF~uYt6A44OuF4XXZG2k9a0GSEVT8wCnzQi2KA~W1mgnbxlf8BjmRyyvnvEk4y-9Qysp-ElQkmu75fB4U2909wrkCo2eRdTnn~DU5yWDBL3FjF7xsjFhrUnKInucqGzpOACmIF65Cf8DHKs6BLc12wK1jkjoIX~Eig7KBCPyGuMM8dkbt~avVEgHJ0OKgUh9qpVGUBjLGtpCVin9xgQbAF8Jl3idvbSdho3V4XlGqhQ~2CgUp9EEUaAiB6VYyAAydPu1KgVMdsTf0U2VsJ3Bmd2BLy~Mmzply49Sv7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
