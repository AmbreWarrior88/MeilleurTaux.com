import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";

const Amount = () => {
  const [now, setNow] = useState(70);
  const history = useHistory();

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
                setNow(75);
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
                setNow(80);
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
                setNow(85);
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
          <Link
            onClick={() => {
              history.push("./Where");
            }}
          >
            Précédent
          </Link>
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
