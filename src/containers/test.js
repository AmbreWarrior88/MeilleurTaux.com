//************** TEST AUTOCOMPLETE ******************

import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ margin: "100px" }}>
      <form
        onSubmit={async event => {
          event.preventDefault();

          const response = await axios.get(
            ` https://vicopo.selfbuild.fr/search/${search}`
          );
          console.log(" => ", response.data);
          console.log(" => ", response.data.cities);
          setSearch(response.data);
        }}
      >
        <>
          <input
            id="ville"
            placeholder="Entrez un code postal ou une ville"
            value={search}
            onChange={event => {
              setSearch(event.target.value);
            }}
          />
          <ul>
            <li data-vicopo="#ville">
              <strong data-vicopo-code-postal></strong>
              <span data-vicopo-ville></span>
            </li>
          </ul>
        </>
        <input type="submit" value={"Valider"} />
      </form>
    </div>
  );
};

export default Test;
