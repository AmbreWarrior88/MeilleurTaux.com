import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Amount = () => {
  // const now = 29;
  const [now, setNow] = useState(5);

  return (
    <section>
      <article className="container">
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
      </article>
    </section>
  );
};

export default Amount;
