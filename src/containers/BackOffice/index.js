import React, { useState } from "react";
import Cookie from "js-cookie";

const BackOffice = () => {
  const Category = Cookie.get("Category");
  const State = Cookie.get("State");
  const Use = Cookie.get("Use");
  const Current = Cookie.get("Current");
  const Country = Cookie.get("Country");
  const City = Cookie.get("City");
  const Amount = Cookie.get("Amount");
  const Email = Cookie.get("Email");
  const File = Cookie.get("File");

  const [remove, setRemove] = useState(false);

  if (remove === true) {
    Cookie.remove("Category");
    Cookie.remove("State");
    Cookie.remove("Use");
    Cookie.remove("Current");
    Cookie.remove("Country");
    Cookie.remove("City");
    Cookie.remove("Amount");
    Cookie.remove("Email");
    Cookie.remove("File");
  }

  return (
    <section>
      <article className="container">
        <p style={{ display: "flex", justifyContent: "center" }}>
          Récapitulatif
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p>Supprimer</p>
            <input
              type="checkbox"
              checked={remove}
              onChange={event => {
                setRemove(event.target.checked);
              }}
            />
          </div>

          <div>
            <p>N°de dossier</p>
            <p>{File}</p>
          </div>
          <div>
            <p>Catégorie</p>
            <p> {Category} </p>
          </div>
          <div>
            <p>Etat</p>
            <p> {State} </p>
          </div>
          <div>
            <p>Utilisation</p>
            <p> {Use} </p>
          </div>
          <div>
            <p>Statue</p>
            <p> {Current} </p>
          </div>
          <div>
            <p>Pays</p>
            <p> {Country} </p>
          </div>
          <div>
            <p>Ville</p>
            <p> {City} </p>
          </div>
          <div>
            <p>Budget</p>
            <p> {Amount} </p>
          </div>
          <div>
            <p>Email</p>
            <p> {Email} </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BackOffice;
