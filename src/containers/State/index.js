import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const State = props => {
  const [now, setNow] = useState(15);

  const history = useHistory();

  const oldState = "Ancien";
  const newState = "Neuf";

  const [state, setState] = useState("");

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
            Cookie.set("State", state);
          }}
        >
          <div className="items">
            <button
              className={
                props.isSelected === oldState ? "button-on" : "button-off"
              }
              type="submit"
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
              type="submit"
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
            <Link
              onClick={() => {
                history.push("/");
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
                  history.push("/Use");
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

export default State;
