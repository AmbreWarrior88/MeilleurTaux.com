import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Category = () => {
  // const now = 5;
  const [now, setNow] = useState(0);

  return (
    <section>
      <article className="container">
        <div className="title ">
          <h1>TYPE DE BIEN</h1>
          <p className="info">i</p>
        </div>

        <div className="items">
          <button
            onClick={() => {
              setNow(5);
            }}
          >
            Maison
          </button>

          <button
            onClick={() => {
              setNow(5);
            }}
          >
            Appartement
          </button>
        </div>

        <div className="bottom-element">
          <Link>Précédent</Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/State">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default Category;
