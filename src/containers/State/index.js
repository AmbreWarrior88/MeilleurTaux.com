import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const State = () => {
  const now = 8;

  return (
    <div>
      <h1>ETAT DU BIEN</h1>
      <div>
        <button>Ancien</button>
        <button>Neuf</button>
      </div>
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/Use">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default State;
