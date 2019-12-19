import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Use = props => {
  const [now, setNow] = useState(30);
  const history = useHistory();

  const firstHome = "Résidence principale";
  const secondHome = "Résidence secondaire";
  const rentalInvestment = "Investissement locatif";

  const [use, setUse] = useState("");
  console.log(use);

  let isEnabled = false;

  if (use === firstHome || use === secondHome || use === rentalInvestment) {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* HEADER */}

        <div className="title ">
          <h1>USAGE DU BIEN</h1>
          <p className="info">i</p>
        </div>

        {/* FORM */}

        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              Cookie.set("Use", use);
              history.push("/Current");
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            <button
              className={
                props.isSelected === firstHome ? "button-on" : "button-off"
              }
              type="button"
              value={firstHome}
              onClick={event => {
                props.setIsSelected(firstHome);
                setUse(event.target.value);
                setNow(45);
              }}
            >
              Résidence principale
            </button>

            <button
              className={
                props.isSelected === secondHome ? "button-on" : "button-off"
              }
              type="button"
              value={secondHome}
              onClick={event => {
                props.setIsSelected(secondHome);
                setUse(event.target.value);
                setNow(45);
              }}
            >
              Résidence secondaire
            </button>

            <button
              className={
                props.isSelected === rentalInvestment
                  ? "button-on"
                  : "button-off"
              }
              type="button"
              value={rentalInvestment}
              onClick={event => {
                props.setIsSelected(rentalInvestment);
                setUse(event.target.value);
                setNow(45);
              }}
            >
              Investissement locatif
            </button>
          </div>

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./State");
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

export default Use;
