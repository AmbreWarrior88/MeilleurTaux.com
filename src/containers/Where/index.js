import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Where = () => {
  const now = 26;

  return (
    <div>
      <h1>OÙ SE SITUE LE BIEN À FINANCER?</h1>
      <p>Dans quel pays se situe votre projet?*</p>
      <input type="text" placeholder="FRANCE" />
      <p>Ville ou code postal*</p>
      <input type="number" placeholder="Ville ou code postal" />
      <p>
        La connaissance du code postal du bien permettra de calculer les frais
        de notaire selon les conditions en vigueur dans le département concerné.
      </p>
      <p>
        Si vous êtes en recherche de biens sur plusieurs communes, indiquez une
        commune ciblée.
      </p>
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/Amount">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Where;
