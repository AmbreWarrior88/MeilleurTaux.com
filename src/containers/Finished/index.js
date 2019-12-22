import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Finished = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  const [password, setPassword] = useState("");

  const history = useHistory();

  // Generate a random number
  const getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // State for random number
  const [file, setFile] = useState(getRandom(10000000));

  Cookie.set("File", file, { expires: 7 });

  // Send state "isSelected" in DB
  useEffect(() => {
    newIsSelected.push(file);
    setIsSelected(newIsSelected);
    const fetchData = async () => {
      const response = await axios.post(
        "https://meilleurtaux-backend.herokuapp.com//add-quote",
        {
          isSelected: isSelected
        }
      );
      console.log("response.data =>", response.data);

      setIsSelected(response.data);

      // Cookie.set("token", response.data.token); => undefined
    };
    fetchData();
  }, []);

  return (
    <section>
      <article className="container">
        {/* HEADER */}

        <h1>ET VOILÀ, LE FORMULAIRE EST TERMINÉ !</h1>

        {/* File number */}

        <div style={{ display: "flex" }}>
          <p>Votre numéro de dossier est le :</p>
          <p style={{ marginLeft: "10px", fontWeight: "bold" }}>{file}</p>
        </div>

        <p className="td-u">Mentions légales</p>

        {/* Access to BackOffice */}

        <form
          onSubmit={event => {
            event.preventDefault();
            if (password === "tothemoon") {
              history.push("/BackOffice");
            } else {
              return alert("Mauvais mot de passe");
            }
          }}
        >
          <p style={{ marginTop: "100px" }}>Accès Back Office</p>
          <div className="df">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <input type="submit" value={"Valider"} />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Finished;
