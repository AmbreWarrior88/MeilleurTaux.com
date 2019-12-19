import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Amount = props => {
  const [now, setNow] = useState(70);
  const history = useHistory();

  const [buy, setBuy] = useState("");
  const [work, setWork] = useState("");

  const [amount, setAmount] = useState("");

  let isEnabled = false;

  if (buy !== "") {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* TITLE */}

        <h1>DÉFINISSONS LE MONTANT DE VOTRE PROJET</h1>

        {/* FORM */}
        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              // Cookie.set("Amount", amount);
              history.push("/Contact");
            } else {
              alert("Remplissez les champs obligatoire.");
            }
          }}
        >
          <div className="input-element grey">
            <p className="description">Montant estimé de votre acquisition*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className="input"
                type="number"
                placeholder="€"
                value={buy}
                onChange={event => {
                  setBuy(Number(event.target.value));

                  setNow(75);
                }}
              />
            </div>
          </div>

          <div className="input-element">
            <p className="description">Montant estimé des travaux</p>
            <div className="input-item">
              <p className="info">i</p>
              <input
                className="input"
                type="number"
                placeholder="€"
                value={work}
                onChange={async event => {
                  await setWork(Number(event.target.value));

                  setNow(80);
                }}
              />
            </div>
          </div>

          <div className="input-element grey">
            <p className="description">Frais de notaire*</p>
            <div className="input-item">
              <p className="info">i</p>
              <input
                className="input"
                type="number"
                placeholder="€"
                onChange={() => {
                  setNow(85);
                }}
              />
            </div>
          </div>

          <div className="input-element">
            <p className="description">Budget total estimé du projet*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className="input"
                type="number"
                placeholder="€"
                value={buy + work}
                onChange={event => {
                  setAmount(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Where");
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

export default Amount;
