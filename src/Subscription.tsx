import React, { useState, useReducer } from "react";

function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target[0].value);
}

function Subscription() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };
  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <div>
      <div>
        <a href="/">Retour</a>
      </div>
      <h2>INSCRIPTION</h2>
      Déjà un compte ? <a href="./Login">Se connecter</a>
      <form onSubmit={handleSubmit} method="post" name="login1">
        <div className="email-block">
          <input
            type="email"
            name="email"
            id="email2"
            placeholder="Email"
            onChange={onChangeMail}
            value={mail}
            required
          />
        </div>
        <div className="pass-block">
          <input
            type="password"
            name="pass"
            id="pass2"
            placeholder="Mot de passe"
            onChange={onChangePass}
            value={pass}
            min={6}
            required
          />
        </div>
        <div className="pass-check-block">
          <input
            type="password"
            name="confirmPass"
            id="confirmPass2"
            placeholder="Confirmez le mot de passe"
            required
          />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Subscription;
