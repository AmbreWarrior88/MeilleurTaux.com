import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Amount = () => {
  const now = 29;

  return (
    <div>
      <h1>DÉFINISSONS LE MONTANT DE VOTRE PROJET</h1>
      <p>Montant estimé de votre acquisition*</p>
      <input type="number" placeholder="euros" />
      <p>Montant estimé des travaux</p>
      <input type="number" placeholder="euros" />
      <p>Frais de notaire*</p>
      <input type="number" placeholder="euros" />
      <p>Budget total estimé du projet*</p>
      <input type="number" placeholder="euros" />
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/Contact">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Amount;
