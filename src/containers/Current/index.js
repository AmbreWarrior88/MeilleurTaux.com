import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Current = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  // State of progress bar
  const [now, setNow] = useState(45);

  const history = useHistory();

  const tenant = "Locataire";
  const owner = "Propriétaire";
  const staffHouse = "Bénéficiaire d'un logement de fonction";
  const freeHosted = "Hébergé à titre gratuit";

  // State that stores the user's choice
  const [current, setCurrent] = useState("");

  // Constant which will validate the form
  let isEnabled = false;

  if (
    current === tenant ||
    current === owner ||
    current === staffHouse ||
    current === freeHosted
  ) {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* HEADER */}

        <div className="title ">
          <h1>Votre situation actuelle</h1>
          <p className="info">i</p>
        </div>

        {/* FORM */}

        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              Cookie.set("Current", current, { expires: 7 });
              newIsSelected.push(current);
              setIsSelected(newIsSelected);

              history.push("/Where");
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            {/* Button Tenant */}

            <button
              className={current === tenant ? "button-on" : "button-off"}
              type="button"
              value={tenant}
              onClick={event => {
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Locataire
            </button>

            {/* Button Owner */}

            <button
              className={current === owner ? "button-on" : "button-off"}
              type="button"
              value={owner}
              onClick={event => {
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Propriétaire
            </button>

            {/* Button Staff House */}

            <button
              className={current === staffHouse ? "button-on" : "button-off"}
              type="button"
              value={staffHouse}
              onClick={event => {
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Bénéficiaire d'un logement de fonction
            </button>

            {/* Button Free Hosted */}

            <button
              className={current === freeHosted ? "button-on" : "button-off"}
              type="button"
              value={freeHosted}
              onClick={event => {
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Hébergé à titre gratuit
            </button>
          </div>

          {/* FOOTER */}

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Use");
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
                    now === 45
                      ? { marginLeft: "225px" }
                      : { marginLeft: "300px" }
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

export default Current;
