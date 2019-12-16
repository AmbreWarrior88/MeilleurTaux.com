import React from "react";
import "../../App.css";
import "./style.css";
import Logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className="line mt-20 bottom-bar ">
      <article className="container">
        <img src={Logo} alt="MeilleurTaux.com" />
        <p className="ff caption ">
          Crédit immobilier: 5mn pour obtenir le meilleur taux
        </p>
      </article>
    </header>
  );
};

export default Header;
