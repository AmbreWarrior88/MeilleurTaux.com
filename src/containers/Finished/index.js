import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Finished = props => {
  const { isSelected } = props;
  const { setIsSelected } = props;
  const newIsSelected = [...isSelected];

  const history = useHistory();

  const getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const [file, setFile] = useState(getRandom(10000000));

  Cookie.set("File", file, { expires: 7 });

  useEffect(() => {
    newIsSelected.push(file);
    setIsSelected(newIsSelected);
    const fetchData = async () => {
      const response = await axios.post("http://localhost:4000/add-quote", {
        isSelected: isSelected
      });
      setIsSelected(response.data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <article className="container">
        <h1>ET VOILÀ, LE FORMULAIRE EST TERMINÉ !</h1>

        <div style={{ display: "flex" }}>
          <p>Votre numéro de dossier est le :</p>
          <p style={{ marginLeft: "10px", fontWeight: "bold" }}>{file}</p>
        </div>

        <p style={{ textDecoration: "underline" }}>Mentions légales</p>

        <li
          onClick={() => {
            history.push("/BackOffice");
          }}
        >
          Back Office
        </li>
      </article>
    </section>
  );
};

export default Finished;
