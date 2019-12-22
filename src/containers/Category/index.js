import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";
import Footer from "../../components/Footer";

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

  // Constant which will validate the form
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
            {/* Button HOME */}

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

            {/* Button APARTMENT */}

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

          {/* FOOTER */}

          <div className="bottom-element">
            <Footer />

            {/* Progress Bar */}

            <div className="df number-bar">
              <div className="bar" />
              <div style={{ position: "absolute" }}>
                <ProgressBar
                  style={now === 15 ? { marginLeft: "75px" } : null}
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
      </article>
    </section>
  );
};

export default Category;
