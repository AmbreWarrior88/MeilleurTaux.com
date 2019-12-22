import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Amount = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  // State of progress bar
  const [now, setNow] = useState(70);

  const history = useHistory();

  const [buy, setBuy] = useState("");
  const [work, setWork] = useState("");

  const [notary, setNotary] = useState("");

  // State that stores the user's choice
  const [amount, setAmount] = useState("");

  // Constant which will validate the form
  let isEnabled = false;

  if (buy !== "") {
    isEnabled = true;
  }
  const cookie = Cookie.get("State");

  return (
    <section>
      <article className="container">
        {/* HEADER*/}

        <h1>DÉFINISSONS LE MONTANT DE VOTRE PROJET</h1>

        {/* FORM */}
        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              Cookie.set("Amount", amount, { expires: 7 });
              newIsSelected.push(amount);
              setIsSelected(newIsSelected);

              history.push("/Contact");
            } else {
              alert("Remplissez les champs obligatoire.");
            }
          }}
        >
          {/* Input Buy */}

          <div className="input-element grey">
            <p className="description">Montant estimé de votre acquisition*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                style={{ textAlign: "right" }}
                className={buy ? "input-on" : "input"}
                type="number"
                placeholder="Tapez un nombre"
                value={buy}
                onChange={event => {
                  setBuy(Number(event.target.value));

                  setNow(75);
                }}
              />
              <span className="euro">€</span>
            </div>
          </div>

          {/* Input Work */}

          <div className="input-element">
            <p className="description">Montant estimé des travaux</p>
            <div className="input-item">
              <p className="info">i</p>
              <input
                style={{ textAlign: "right" }}
                className={work ? "input-on" : "input"}
                type="number"
                placeholder="Tapez un nombre"
                value={work}
                onChange={async event => {
                  await setWork(Number(event.target.value));

                  setNow(80);
                }}
              />
              <span className="euro">€</span>
            </div>
          </div>

          {/* Input Notary */}

          <div className="input-element grey">
            <p className="description">Frais de notaire*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                style={{ textAlign: "right" }}
                className={notary ? "input-on" : "input"}
                type="number"
                placeholder="Tapez 0 pour avoir le calcul"
                // disabled="disabled"
                value={notary}
                onChange={event => {
                  setNotary(
                    Math.round(
                      (event.target.value =
                        (buy + work) *
                        (cookie === "Neuf" ? 1.8 / 100 : 7.38 / 100))
                    )
                  );

                  setNow(85);
                }}
              />
              <span className="euro">€</span>
            </div>
          </div>

          {/* Input Amount */}

          <div className="input-element">
            <p className="description">Budget total estimé du projet*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                style={{ textAlign: "right" }}
                className={amount ? "input-on" : "input"}
                type="number"
                placeholder="Tapez 0 pour avoir le calcul"
                // disabled="disabled"
                value={amount}
                onChange={event => {
                  setAmount((event.target.value = buy + work + notary));
                }}
              />
              <span className="euro">€</span>
            </div>
          </div>

          {/* FOOTER */}

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Where");
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
                    now === 70
                      ? { marginLeft: "350px" }
                      : { marginLeft: "425px" }
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

export default Amount;
