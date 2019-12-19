import React, { useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Where = props => {
  const [now, setNow] = useState(60);
  const history = useHistory();

  // const { cities } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [where, setWhere] = useState("");

  let isEnabled = false;

  if (country !== "" && city !== "") {
    isEnabled = true;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://vicopo.selfbuild.fr/search/" + cities
  //     );

  //     setCity(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <section>
      <article className="container">
        {/* TITLE */}

        <h1>OÙ SE SITUE LE BIEN À FINANCER?</h1>

        {/* FORM */}

        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              history.push("/Amount");
            } else {
              alert("Remplissez les champs.");
            }
          }}
        >
          <div className="input-element grey">
            <p className="description">
              Dans quel pays se situe votre projet?*
            </p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className="input"
                type="text"
                placeholder="FRANCE"
                value={country}
                onChange={async event => {
                  await setCountry(event.target.value);
                  Cookie.set("Country", country);
                  props.setIsSelected(country);
                  setNow(65);
                }}
              />
            </div>
          </div>

          <div className="input-element">
            <p className="description">Ville ou code postal*</p>
            <div className="input-item">
              <p className="info">i</p>

              <input
                className="input"
                type="text"
                placeholder="Ville ou code postal"
                value={city}
                onChange={async event => {
                  await setCity(event.target.value);
                  Cookie.set("City", city);
                  props.setIsSelected(city);
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

          <div className="bottom-element">
            <li
              onClick={() => {
                history.push("./Current");
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

export default Where;
