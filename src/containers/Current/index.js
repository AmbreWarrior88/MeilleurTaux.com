import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Current = () => {
  const now = 16;

  return (
    <div>
      <h1>Votre situation actuelle</h1>
      <div>
        <button>Locataire</button>
        <button>Propriétaire</button>
        <button>Bénéficiaire d'un logement de fonction</button>
        <button>Hébergé à titre gratuit</button>
      </div>
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/Where">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Current;
