import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Use = () => {
  const now = 11;

  return (
    <div>
      <h1>USAGE DU BIEN</h1>
      <div>
        <button>Résidence principale</button>
        <button>Résidence secondaire</button>
        <button>Investissement locatif</button>
      </div>
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/Current">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Use;
