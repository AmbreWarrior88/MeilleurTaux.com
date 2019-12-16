import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import VisuelDesktopEmail from "../../assets/visuel-desktop-email.jpg";

const Contact = () => {
  const now = 96;
  const [offer, setOffer] = useState(false);

  return (
    <div>
      <h1>COORDONNÉES</h1>
      <p>
        Un devis vous sera envoyé par mail avec un récapitulatif de votre
        demande
      </p>
      <img src={VisuelDesktopEmail} alt="Visuel Desktop Email" />
      <p>Adresse e-mail emprunteur*</p>
      <input type="email" placeholder="Votre e-mail" />
      <input
        type="checkbox"
        onChange={() => {
          setOffer(true);
        }}
      />
      <p>J'accepte de recevoir par email des propositions de MeileurTaux.</p>
      <Link>Précédent</Link>
      <ProgressBar now={now} label={`${now}%`} />
      <Link to="/Finished">
        <button>Suivant</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Contact;
