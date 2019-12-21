import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Category = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];
  // State of progress bar
  const [now, setNow] = useState(0);

  const history = useHistory();

  const home = "Maison";
  const apartment = "Appartement";

  // State that stores the user's choice
  const [category, setCategory] = useState("");

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
              Cookie.set("Category", category, { expires: 7 });
              newIsSelected.push(category);
              setIsSelected(newIsSelected);
              history.push("/State");
            } else {
              alert("Choisissez une proposition.");
            }
          }}
        >
          <div className="items">
            <button
              className={category === home ? "button-on" : "button-off"}
              type="button"
              value={home}
              onClick={event => {
                setCategory(event.target.value);

                setNow(15);
              }}
            >
              Maison
            </button>

            <button
              className={category === apartment ? "button-on" : "button-off"}
              type="button"
              value={apartment}
              onClick={event => {
                setCategory(event.target.value);

                setNow(15);
              }}
            >
              Appartement
            </button>
          </div>

          <div className="bottom-element">
            <p>*Champs obligatoire - Mentions légales</p>
            <ProgressBar now={now} label={`${now}%`} />

            <button
              className={isEnabled ? "next" : "nextDisabled"}
              type="submit"
            >
              Suivant
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Category;
