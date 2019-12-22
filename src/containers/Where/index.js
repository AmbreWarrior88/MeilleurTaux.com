import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Where = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  // State of progress bar
  const [now, setNow] = useState(60);
  const history = useHistory();

  // State that stores the user's choice
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Constant which will validate the form
  let isEnabled = false;

  if (country !== "" && city !== "") {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* HEADER */}

        <h1>OÙ SE SITUE LE BIEN À FINANCER?</h1>

        {/* FORM */}

        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              newIsSelected.push(country);
              newIsSelected.push(city);
              setIsSelected(newIsSelected);
              history.push("/Amount");
            } else {
              alert("Remplissez les champs.");
            }
          }}
        >
          {/* Input Country */}

          <div className="input-element grey">
            <p className="description">
              Dans quel pays se situe votre projet?*
            </p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className={country !== "" ? "input-on" : "input"}
                type="text"
                placeholder="FRANCE"
                value={country}
                onChange={async event => {
                  await setCountry(event.target.value);
                  Cookie.set("Country", country, { expires: 7 });

                  setNow(65);
                }}
              />
            </div>
          </div>

          {/* Input City */}

          <div className="input-element">
            <p className="description">Ville ou code postal*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className={city !== "" ? "input-on" : "input"}
                type="text"
                placeholder="Ville ou code postal"
                value={city}
                onChange={async event => {
                  await setCity(event.target.value);
                  Cookie.set("City", city, { expires: 7 });

                  setNow(70);
                }}
              />
            </div>
          </div>

          <p>
            La connaissance du code postal du bien permettra de calculer les
            frais de notaire selon les conditions en vigueur dans le département
            concerné.
          </p>
          <p>
            Si vous êtes en recherche de biens sur plusieurs communes, indiquez
            une commune ciblée.
          </p>

          {/* FOOTER */}

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Current");
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
                    now === 60
                      ? { marginLeft: "330px" }
                      : { marginLeft: "350px" }
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

export default Where;
