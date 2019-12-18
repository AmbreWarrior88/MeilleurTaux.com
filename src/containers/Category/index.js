import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../../components/Footer/index";
import ProgressBar from "react-bootstrap/ProgressBar";
import Cookie from "js-cookie";

const Category = props => {
  // const now = 5;
  const [now, setNow] = useState(0);
  const [home, setHome] = useState("Maison");
  const [apartment, setApartment] = useState("Appartement");

  const [category, setCategory] = useState("");
  // let isSelected = false;

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
            Cookie.set("Category", category);
            console.log(Cookie);
          }}
        >
          <div className="items">
            <button
              className={props.isSelected === home ? "button-on" : "button-off"}
              type="submit"
              value={home}
              onClick={event => {
                props.setIsSelected(home);
                setCategory(event.target.value);

                setNow(5);
              }}
            >
              Maison
            </button>

            <button
              className={
                props.isSelected === apartment ? "button-on" : "button-off"
              }
              type="submit"
              value={apartment}
              onClick={event => {
                props.setIsSelected(apartment);
                setCategory(event.target.value);

                setNow(5);
              }}
            >
              Appartement
            </button>
          </div>

          <div className="bottom-element">
            <p>Précédent</p>
            <ProgressBar now={now} label={`${now}%`} />
            <Link to="/State">
              <button className="next" type="submit">
                Suivant
              </button>
            </Link>
          </div>
        </form>

        {/* FOOTER */}

        <Footer />
      </article>
    </section>
  );
};

export default Category;
