import React, { useState } from "react";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import VisualDesktopEmail from "../../assets/visuel-desktop-email.jpg";
import Confidential from "../../assets/Confidential.png";
import "../Contact/style.css";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";

const Contact = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  // State of progress bar
  const [now, setNow] = useState(85);

  const history = useHistory();

  const [agree, setAgree] = useState(false);

  // State that stores the user's choice
  const [email, setEmail] = useState("");

  // Constant which will validate the form
  let isEnabled = false;

  if (email !== "" && agree === true) {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* HEADER */}

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
              Cookie.set("Email", email, { expires: 7 });
              newIsSelected.push(email);
              setIsSelected(newIsSelected);
              history.push("/Finished");
            } else {
              alert("Remplissez l'email et acceptez la proposition.");
            }
          }}
        >
          {/* Input Email */}

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
                }}
              />
              <img
                src={Confidential}
                alt="Confidential"
                className="logo-confidential"
              />
            </div>
          </div>

          {/* Checkbox */}

          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              onChange={() => {
                setAgree(true);
                setNow(100);
              }}
            />
            <p>
              J'accepte de recevoir par email des propositions de MeileurTaux.
            </p>
          </div>

          {/* FOOTER */}

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Amount");
              }}
            >
              Précédent
            </li>

            {/* Progress Bar */}

            <div className="df number-bar">
              <div className="bar" />
              <div style={{ position: "absolute" }}>
                <ProgressBar
                  style={
                    now === 85
                      ? { marginLeft: "425px" }
                      : { marginLeft: "500px" }
                  }
                  now={now}
                  label={`${now}%`}
                />
              </div>
            </div>

            {/* Button validated from */}

            <button
              className={isEnabled ? "next" : "nextDisabled"}
              type="submit"
            >
              Suivant
            </button>
          </div>
        </form>

        <Footer />
      </article>
    </section>
  );
};

export default Contact;
