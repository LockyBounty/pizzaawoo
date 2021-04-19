import "../styles.css";
import { useState } from "react";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  Input,
  InputLabel,
  InputAdornment,
  OutlinedInput
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    password: "",
    showPassword: false
  });

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log("test");
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>Login zone</div>
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Connexion
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Authentification</DialogTitle>
          <DialogContent className="login-form-zone">
            <FormControl variant="outlined" className="auth-input-box">
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                autoFocus
                id="email"
                type="email"
                fullWidth
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    ></IconButton>
                  </InputAdornment>
                }
                labelWidth={50}
              />
            </FormControl>

            <FormControl className="auth-input-box" variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                id="pass"
                type="password"
                fullWidth
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    ></IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </DialogContent>
          <div className="forgotten-password">Mot de passe oublié ?</div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Créer un compte
            </Button>
            <Button onClick={handleClose} color="secondary" variant="contained">
              Connexion
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
export default Login;
