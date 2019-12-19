import React from "react";

const Finished = () => {
  const getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <section>
      <article className="container">
        <h1>ET VOILÀ, LE FORMULAIRE EST TERMINÉ !</h1>

        <div style={{ display: "flex" }}>
          <p>Votre numéro de dossier est le :</p>
          <p style={{ marginLeft: "10px", fontWeight: "bold" }}>
            {getRandom(10000000)}
          </p>
        </div>
        <p>Mentions légales</p>
      </article>
    </section>
  );
};

export default Finished;
