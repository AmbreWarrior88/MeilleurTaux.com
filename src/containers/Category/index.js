import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Category = props => {
  // State of progress bar
  const [now, setNow] = useState(0);

  const history = useHistory();

  const home = "Maison";
  const apartment = "Appartement";

  // State that stores the user's choice
  const [category, setCategory] = useState("");
  console.log(category);

  let isEnabled = false;

  if (category === home || category === apartment) {
    isEnabled = true;
  }

  return (
    <section>
      <article className="container">
        {/* HEADER */}

        <div className="title ">
          <h1>TYPE DE BIEN</h1>
          <p className="info">i</p>
        </div>

        {/* FORM */}

        <form
          onSubmit={async event => {
            event.preventDefault();

            if (isEnabled === true) {
              Cookie.set("Category", category);
              history.push("/State");
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            <button
              className={props.isSelected === home ? "button-on" : "button-off"}
              type="button"
              value={home}
              onClick={event => {
                props.setIsSelected(home);
                setCategory(event.target.value);

                setNow(15);
              }}
            >
              Maison
            </button>

            <button
              className={
                props.isSelected === apartment ? "button-on" : "button-off"
              }
              type="button"
              value={apartment}
              onClick={event => {
                props.setIsSelected(apartment);
                setCategory(event.target.value);

                setNow(15);
              }}
            >
              Appartement
            </button>
          </div>

          <div className="bottom-element">
            <p>Précédent</p>
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

export default Category;
