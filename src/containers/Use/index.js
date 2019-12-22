import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Use = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  // State of progress bar
  const [now, setNow] = useState(30);

  const history = useHistory();

  const firstHome = "Résidence principale";
  const secondHome = "Résidence secondaire";
  const rentalInvestment = "Investissement locatif";

  // State that stores the user's choice
  const [use, setUse] = useState("");

  // Constant which will validate the form
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
              Cookie.set("Use", use, { expires: 7 });
              newIsSelected.push(use);
              setIsSelected(newIsSelected);
              history.push("/Current");
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            {/* Button First Home */}

            <button
              className={use === firstHome ? "button-on" : "button-off"}
              type="button"
              value={firstHome}
              onClick={event => {
                setUse(event.target.value);

                setNow(45);
              }}
            >
              Résidence principale
            </button>

            {/* Button Second Home */}

            <button
              className={use === secondHome ? "button-on" : "button-off"}
              type="button"
              value={secondHome}
              onClick={event => {
                setUse(event.target.value);
                setNow(45);
              }}
            >
              Résidence secondaire
            </button>

            {/* Button Rental Investissement */}

            <button
              className={use === rentalInvestment ? "button-on" : "button-off"}
              type="button"
              value={rentalInvestment}
              onClick={event => {
                setUse(event.target.value);
                setNow(45);
              }}
            >
              Investissement locatif
            </button>
          </div>

          {/* FOOTER */}

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./State");
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
                    now === 30
                      ? { marginLeft: "150px" }
                      : { marginLeft: "225px" }
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

export default Use;
