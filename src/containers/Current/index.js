import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";

const Current = () => {
  // const now = 16;
  const [now, setNow] = useState(11);
  const history = useHistory();

  return (
    <section>
      <article className="container">
        <div className="title ">
          <h1>Votre situation actuelle</h1>
          <p className="info">i</p>
        </div>

        <div className="items">
          <button
            onClick={() => {
              setNow(16);
            }}
          >
            Locataire
          </button>
          <button
            onClick={() => {
              setNow(16);
            }}
          >
            Propriétaire
          </button>
          <button
            onClick={() => {
              setNow(16);
            }}
          >
            Bénéficiaire d'un logement de fonction
          </button>
          <button
            onClick={() => {
              setNow(16);
            }}
          >
            Hébergé à titre gratuit
          </button>
        </div>

        <div className="bottom-element">
          <Link
            onClick={() => {
              history.push("./Use");
            }}
          >
            Précédent
          </Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/Where">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default Current;
