import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
            Cookie.set("Use", use);
          }}
        >
          <div className="items">
            <button
              className={
                props.isSelected === firstHome ? "button-on" : "button-off"
              }
              type="submit"
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
              type="submit"
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
              type="submit"
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
            <Link
              onClick={() => {
                history.push("./State");
              }}
            >
              Précédent
            </Link>

            <ProgressBar now={now} label={`${now}%`} />

            <button
              className={isEnabled ? "next" : "nextDisabled"}
              type="submit"
              onClick={() => {
                if (isEnabled === true) {
                  history.push("/Current");
                } else {
                  alert("Choisissez une proposition.");
                }
              }}
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
