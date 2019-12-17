import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Amount = () => {
  // const now = 29;
  const [now, setNow] = useState(26);

  return (
    <section>
      <article className="container">
        <h1>DÉFINISSONS LE MONTANT DE VOTRE PROJET</h1>

        <div className="input-element grey">
          <p className="description">Montant estimé de votre acquisition*</p>
          <div className="input-item">
            <p className="info">i</p>
            <input
              id="input"
              type="number"
              placeholder="euros"
              onClick={() => {
                setNow(27);
              }}
            />
          </div>
        </div>

        <div className="input-element">
          <p className="description">Montant estimé des travaux</p>
          <div className="input-item">
            <p className="info">i</p>
            <input
              id="input"
              type="number"
              placeholder="euros"
              onClick={() => {
                setNow(28);
              }}
            />
          </div>
        </div>

        <div className="input-element grey">
          <p className="description">Frais de notaire*</p>
          <div className="input-item">
            <p className="info">i</p>
            <input
              id="input"
              type="number"
              placeholder="euros"
              onClick={() => {
                setNow(29);
              }}
            />
          </div>
        </div>

        <div className="input-element">
          <p className="description">Budget total estimé du projet*</p>
          <div className="input-item">
            <p className="info">i</p>
            <input id="input" type="number" placeholder="euros" />
          </div>
        </div>

        <div className="bottom-element">
          <Link>Précédent</Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/Contact">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default Amount;
