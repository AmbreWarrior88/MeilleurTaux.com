import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import VisualDesktopEmail from "../../assets/visuel-desktop-email.jpg";
import Confidential from "../../assets/Confidential.png";
import "../Contact/style.css";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [offer, setOffer] = useState(false);
  const [now, setNow] = useState(85);
  const history = useHistory();

  return (
    <section>
      <article className="container">
        <h1>COORDONNÉES</h1>

        <div className=" email-picture">
          <div className="orange-box">
            <p className="text">
              Un devis vous sera envoyé par mail avec un récapitulatif de votre
              demande.
            </p>
          </div>
          <img
            className="visual-desktop"
            src={VisualDesktopEmail}
            alt="Visuel Desktop Email"
          />
        </div>

        <div className="input-element grey">
          <p className="description">Adresse e-mail emprunteur*</p>
          <div className="input-item">
            <p className="info">i</p>
            <input
              id="input"
              type="email"
              placeholder="Votre e-mail"
              onClick={() => {
                setNow(100);
              }}
            />
            <img
              src={Confidential}
              alt="Confidential"
              className="logo-confidential"
            />
          </div>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            onChange={() => {
              setOffer(true);
            }}
          />
          <label for="checkbox">
            J'accepte de recevoir par email des propositions de MeileurTaux.
          </label>
        </div>

        <div className="bottom-element">
          <Link
            onClick={() => {
              history.push("./Amount");
            }}
          >
            Précédent
          </Link>
          <ProgressBar now={now} label={`${now}%`} />
          <Link to="/Finished">
            <p className="next">Suivant</p>
          </Link>
        </div>
        <Footer />
      </article>
    </section>
  );
};

export default Contact;
