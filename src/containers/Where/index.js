import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Where = () => {
  // const now = 26;
  const [now, setNow] = useState(16);

  return (
    <section>
      <article className="container">
        <h1>OÙ SE SITUE LE BIEN À FINANCER?</h1>

        <div className="input-element grey">
          <p>Dans quel pays se situe votre projet?*</p>
          <div className="input-item">
            <p className="info">i</p>
            <input
              type="text"
              placeholder="FRANCE"
              onClick={() => {
                setNow(21);
              }}
            />
          </div>
        </div>

        <div className="input-element">
          <p>Ville ou code postal*</p>
          <div className="input-item">
            <p className="info">i</p>
            <input
              type="text"
              placeholder="Ville ou code postal"
              onClick={() => {
                setNow(26);
              }}
            />
          </div>
        </div>

        <p>
          La connaissance du code postal du bien permettra de calculer les frais
          de notaire selon les conditions en vigueur dans le département
          concerné.
        </p>
        <p>
          Si vous êtes en recherche de biens sur plusieurs communes, indiquez
          une commune ciblée.
        </p>

        <div className="bottom-element">
          <Link>Précédent</Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/Amount">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default Where;
