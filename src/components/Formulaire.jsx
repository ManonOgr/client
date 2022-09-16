import React from "react";
import { useState } from "react";
import { modification } from "../services/modification";

function Formulaire(props) {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");
  let [DatasUsers, SetDatasUsers] = useState({
    civilité: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    birthdate: "",
    city: "",
    country: "",
    photo: "",
    service: "",
  });

  const Change = (prop) => (event) => {
      console.log('ok')
    SetDatasUsers({ ...DatasUsers, [prop]: event.target.value });
  };
  console.log(DatasUsers);
  function register() {
    
  }

  return (
    <div className="formmodif">
      <select name="choice" id="choice">
        <option selected={props.civilité === "male" ? true : false} onClick={() => {console.log('ok')}} >
          Homme
        </option>
        <option selected={props.civilité === "female" ? true : false}>
          Femme
        </option>
      </select>
      <select name="choice" id="choice-select">
        <option value="choice">--Choisissez une catégorie--</option>
        <option selected={props.categories === "Marketing" ? true : false}>
          Marketing
        </option>
        <option selected={props.categories === "Technique" ? true : false}>
          Technique
        </option>
        <option selected={props.categories === "Client" ? true : false}>
          Client
        </option>
      </select>
      <label>
        Nom:
        <input defaultValue={props.nom} type="text" />
      </label>
      <label>
        Prenom:
        <input defaultValue={props.prenom} type="text" />
      </label>
      <label>
        Email:
        <input defaultValue={props.mail} type="email" />
      </label>
      <label>
        Mot de passe:
        <input type="password" />
      </label>
      <label>
        Confirmation:
        <input type="password" />
      </label>
      <label>
        Téléphone:
        <input defaultValue={props.tel} type="tel" />
      </label>
      <label>
        Date de naissance:
        <input defaultValue={props.anniv} type="date" />
      </label>
      <label>
        Ville:
        <input defaultValue={props.ville} type="text" />
      </label>
      <label>
        Pays:
        <input defaultValue={props.pays} type="text" />
      </label>
      <label>
        URL de la photo:
        <input defaultValue={props.urlphoto} type="url" />
      </label>

      <button onClick={() => register()}>Enregistrer</button>
    </div>
  );
}

export default Formulaire;
