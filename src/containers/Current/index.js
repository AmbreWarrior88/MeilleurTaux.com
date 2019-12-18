import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Current = props => {
  const [now, setNow] = useState(45);
  const history = useHistory();

  const tenant = "Locataire";
  const owner = "Propriétaire";
  const staffHouse = "Bénéficiaire d'un logement de fonction";
  const freeHosted = "Hébergé à titre gratuit";

  const [current, setCurrent] = useState("");

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
            Cookie.set("Current", current);
          }}
        >
          <div className="items">
            <button
              className={
                props.isSelected === tenant ? "button-on" : "button-off"
              }
              type="submit"
              value={tenant}
              onClick={event => {
                props.setIsSelected(tenant);
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Locataire
            </button>

            <button
              className={
                props.isSelected === owner ? "button-on" : "button-off"
              }
              type="submit"
              value={owner}
              onClick={event => {
                props.setIsSelected(owner);
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Propriétaire
            </button>

            <button
              className={
                props.isSelected === staffHouse ? "button-on" : "button-off"
              }
              type="submit"
              value={staffHouse}
              onClick={event => {
                props.setIsSelected(staffHouse);
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Bénéficiaire d'un logement de fonction
            </button>

            <button
              className={
                props.isSelected === freeHosted ? "button-on" : "button-off"
              }
              type="submit"
              value={freeHosted}
              onClick={event => {
                props.setIsSelected(freeHosted);
                setCurrent(event.target.value);
                setNow(60);
              }}
            >
              Hébergé à titre gratuit
            </button>
          </div>

          <div className="bottom-element">
            <Link
              onClick={() => {
                history.push("./Use");
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
                  history.push("/Where");
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

export default Current;
