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
    mail: "",
    password: "",
    confirmpassword:"",
    phone: "",
    birthdate: "",
    city: "",
    country: "",
    photo: "",
    service: "",
  });

  const Change = (prop) => (event) => {
      console.log(DatasUsers)
    SetDatasUsers({ ...DatasUsers, [prop]: event.target.value });
  };
  console.log(DatasUsers);
  function register() {
    let Url = `http://localhost:7000/api/collaborateurs/${id}`
    if (DatasUsers?.password !== DatasUsers?.confirmpassword) {
       let errormsg = document.getElementById("errormsg")
       errormsg.innerHTML="Les mots de passe ne sont pas identiques "
    }else{
        modification(  token,
            Url,
            DatasUsers.civilité,
            DatasUsers.firstname,
            DatasUsers.lastname,
            DatasUsers.mail,
            DatasUsers.password,
            DatasUsers.phone,
            DatasUsers.birthdate,
            DatasUsers.city,
            DatasUsers.country,
            DatasUsers.photo,
            DatasUsers.service)
    }
  }

  return (
    <div className="formmodif">
      <select onChange={Change('civilité')}  name="choice" id="choice">
        <option selected={props.civilité === "male" ? true : false} value="male" >
          Homme
        </option>
        <option selected={props.civilité === "female" ? true : false} value="female">
          Femme
        </option>
      </select>
      <select onChange={Change('service')}  name="choice" id="choice-select">
        <option value="choice">--Choisissez une catégorie--</option>
        <option selected={props.categories === "Marketing" ? true : false} value="Marketing">
          Marketing
        </option>
        <option selected={props.categories === "Technique" ? true : false} value="Technique">
          Technique
        </option>
        <option selected={props.categories === "Client" ? true : false} value="Client">
          Client
        </option>
      </select>
      <label>
        Nom:
        <input  onChange={Change('lastname')}  defaultValue={props.nom} type="text" />
      </label>
      <label>
        Prenom:
        <input   onChange={Change('firstname')} defaultValue={props.prenom} type="text" />
      </label>
      <label>
        Email:
        <input   onChange={Change('mail')} defaultValue={props.mail} type="email" />
      </label>
      <label>
        Mot de passe:
        <input onChange={Change('password')} type="password" />
      </label>
      <label>
        Confirmation:
        <input onChange={Change('confirmpassword')} type="password" />
      </label>
      <span id="errormsg"></span>
      <label>
        Téléphone:
        <input  onChange={Change('phone')}  defaultValue={props.tel} type="tel" />
      </label>
      <label>
        Date de naissance:
        <input  onChange={Change('birthdate')}  defaultValue={props.anniv} type="date" />
      </label>
      <label>
        Ville:
        <input  onChange={Change('city')}  defaultValue={props.ville} type="text" />
      </label>
      <label>
        Pays:
        <input  onChange={Change('country')}  defaultValue={props.pays} type="text" />
      </label>
      <label>
        URL de la photo:
        <input  onChange={Change('photo')}  defaultValue={props.urlphoto} type="url" />
      </label>

      <button onClick={() => register()}>Enregistrer</button>
    </div>
  );
}

export default Formulaire;
