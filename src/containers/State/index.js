import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const State = () => {
  // const now = 8;
  const [now, setNow] = useState(5);

  return (
    <section>
      <article className="container">
        <div className="title">
          <h1>ETAT DU BIEN</h1>
          <p className="info">i</p>
        </div>
        <div className="items">
          <button
            onClick={() => {
              setNow(8);
            }}
          >
            Ancien
          </button>
          <button
            onClick={() => {
              setNow(8);
            }}
          >
            Neuf
          </button>
        </div>

        <div className="bottom-element">
          <Link>Précédent</Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/Use">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default State;
