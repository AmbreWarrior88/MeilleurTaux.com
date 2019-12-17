import React from "react";

const Finished = () => {
  return (
    <section>
      <article className="container">
        <h1>ET VOILÀ, LE FORMULAIRE EST TERMINÉ !</h1>
        <div style={{ display: "flex" }}>
          <p>Votre numéro de dossier est le :</p>
          <p style={{ marginLeft: "10px", fontWeight: "bold" }}>
            1234567 (numéro de dossier attribué)
          </p>
        </div>
        <p>Mentions légales</p>
      </article>
    </section>
  );
};

export default Finished;
