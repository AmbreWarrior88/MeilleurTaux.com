import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const State = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  // State of progress bar
  const [now, setNow] = useState(15);

  const history = useHistory();

  const oldState = "Ancien";
  const newState = "Neuf";

  // State that stores the user's choice
  const [state, setState] = useState("");

  // Constant which will validate the form
  let isEnabled = false;

  if (state === oldState || state === newState) {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* HEADER */}

        <div className="title">
          <h1>ETAT DU BIEN</h1>
          <p className="info">i</p>
        </div>

        {/* FORM */}

        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              Cookie.set("State", state, { expires: 7 });
              history.push("/Use");
              newIsSelected.push(state);
              setIsSelected(newIsSelected);
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            {/* Button Old state */}

            <button
              className={state === oldState ? "button-on" : "button-off"}
              type="button"
              value={oldState}
              onClick={event => {
                setState(event.target.value);

                setNow(30);
              }}
            >
              Ancien
            </button>

            {/* button New state */}

            <button
              className={state === newState ? "button-on" : "button-off"}
              type="button"
              value={newState}
              onClick={event => {
                setState(event.target.value);

                setNow(30);
              }}
            >
              Neuf
            </button>
          </div>

          {/* FOOTER */}

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("/");
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
                    now === 15
                      ? { marginLeft: "75px" }
                      : { marginLeft: "150px" }
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

export default State;
