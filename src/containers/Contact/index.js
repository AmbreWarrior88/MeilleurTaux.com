import React, { useState } from "react";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import VisualDesktopEmail from "../../assets/visuel-desktop-email.jpg";
import Confidential from "../../assets/Confidential.png";
import "../Contact/style.css";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [now, setNow] = useState(85);

  const history = useHistory();

  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");

  let isEnabled = false;

  if (email !== "" && agree === true) {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* TITLE */}

        <h1>COORDONNÉES</h1>

        {/* PICTURE AND CAPTION */}

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

        {/* FORM */}
        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              history.push("/Finished");
            } else {
              alert("Remplissez l'email et acceptez la proposition.");
            }
          }}
        >
          <div className="input-element grey">
            <p className="description">Adresse e-mail emprunteur*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className={email ? "input-on" : "input"}
                type="email"
                placeholder="Votre e-mail"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
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
                setAgree(true);
              }}
            />
            <p>
              J'accepte de recevoir par email des propositions de MeileurTaux.
            </p>
          </div>

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Amount");
              }}
            >
              Précédent
            </li>

            <ProgressBar now={now} label={`${now}%`} />

            <button
              className={isEnabled ? "next" : "nextDisabled"}
              type="submit"
            >
              Suivant
            </button>
          </div>
        </form>

        {/* FOOTER */}

        <Footer />
      </article>
    </section>
  );
};

export default Contact;
