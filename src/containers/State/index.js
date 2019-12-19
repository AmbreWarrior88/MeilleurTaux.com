import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const State = props => {
  const [now, setNow] = useState(15);

  const history = useHistory();

  const oldState = "Ancien";
  const newState = "Neuf";

  const [state, setState] = useState("");
  console.log(state);

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
              Cookie.set("State", state);
              history.push("/Use");
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            <button
              className={
                props.isSelected === oldState ? "button-on" : "button-off"
              }
              type="button"
              value={oldState}
              onClick={event => {
                props.setIsSelected(oldState);
                setState(event.target.value);
                setNow(30);
              }}
            >
              Ancien
            </button>

            <button
              className={
                props.isSelected === newState ? "button-on" : "button-off"
              }
              type="button"
              value={newState}
              onClick={event => {
                props.setIsSelected(newState);
                setState(event.target.value);
                setNow(30);
              }}
            >
              Neuf
            </button>
          </div>

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("/");
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

export default State;
