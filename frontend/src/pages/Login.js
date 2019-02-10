import React, { Component } from "react";

import twitterLogo from "../twitter.svg";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Twitter Logo" />
        <form>
          <input placeholder="Nome de usuário" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
