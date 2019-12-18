import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";

const Use = () => {
  // const now = 11;
  const [now, setNow] = useState(8);
  const history = useHistory();

  return (
    <section>
      <article className="container">
        <div className="title ">
          <h1>USAGE DU BIEN</h1>
          <p className="info">i</p>
        </div>
        <div className="items">
          <button
            onClick={() => {
              setNow(11);
            }}
          >
            Résidence principale
          </button>
          <button
            onClick={() => {
              setNow(11);
            }}
          >
            Résidence secondaire
          </button>
          <button
            onClick={() => {
              setNow(11);
            }}
          >
            Investissement locatif
          </button>
        </div>
        <div className="bottom-element">
          <Link
            onClick={() => {
              history.push("./State");
            }}
          >
            Précédent
          </Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/Current">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default Use;
