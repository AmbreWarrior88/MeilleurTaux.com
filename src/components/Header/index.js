import React from "react";
import "../../App.css";
import "./style.css";
import Logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className="container mt-20 bottom-bar ">
      <div className="ml-60 header">
        <img src={Logo} alt="MeilleurTaux.com" />
        <p className="ff caption ">
          Crédit immobilier: 5mn pour obtenir le meilleur taux
        </p>
      </div>
    </header>
  );
};

export default Header;
