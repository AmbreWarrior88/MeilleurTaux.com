import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";

const Category = () => {
  const now = 5;

  return (
    <div>
      <h1>TYPE DE BIEN</h1>
      <div>
        <button>Maison</button>
        <button>Appartement</button>
      </div>
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/State">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Category;
