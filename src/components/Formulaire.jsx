import React from "react";
import { useState } from "react";
import { modification } from "../services/modification";
import { useForm } from "react-hook-form";
import { ajout } from "../services/ajout";
import { useLocation, useNavigate } from "react-router-dom";

function Formulaire(props) {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");
  let location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

  const registernew = (data) => {
    let Url = `http://localhost:7000/api/collaborateurs/${id}`;
    if (location.pathname === "/Ajout") {
      let UrlAdd = `http://localhost:7000/api/collaborateurs`;
      ajout(
        token,
        UrlAdd,
        data.civilité,
        data.prenom,
        data.nom,
        data.mail,
        data.password,
        data.tel,
        data.anniv,
        data.ville,
        data.pays,
        data.urlphoto,
        data.categories
      ).then((res) => {
        navigate("/List");
      });
    } else if (location.pathname === "/Modification") {
      modification(
        token,
        Url,
        data.civilité,
        data.prenom,
        data.nom,
        data.mail,
        data.password,
        data.tel,
        data.anniv,
        data.ville,
        data.pays,
        data.urlphoto,
        data.categories
      ).then((res) => {
        navigate("/List");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(registernew)} className="formmodif">
      <select
        defaultValue={props.civilité}
        {...register("civilité")}
        name="civilité"
        id="choice"
      >
        <option value="male">Homme</option>
        <option value="female">Femme</option>
      </select>
      <select
        defaultValue={props.categories}
        {...register("categories")}
        name="categories"
        id="choice-select"
      >
        <option value="Marketing">Marketing</option>
        <option value="Technique">Technique</option>
        <option value="Client">Client</option>
      </select>
      <label>
        Nom:
        <input
          defaultValue={props.nom}
          {...register("nom")}
          name="nom"
          type="text"
        />
      </label>
      <label>
        Prenom:
        <input
          defaultValue={props.prenom}
          {...register("prenom")}
          name="prenom"
          type="text"
        />
      </label>
      <label>
        Email:
        <input
          defaultValue={props.mail}
          {...register("mail")}
          name="mail"
          type="email"
        />
      </label>
      <label>
        Mot de passe:
        <input type="password" {...register("password")} name="password" />
      </label>
      <label>
        Confirmation:
        <input
          name="passwordconfirm"
          {...register("passwordconfirm", {
            validate: (val) => val === getValues("password"),
          })}
          type="password"
        />
      </label>

      <label>
        Téléphone:
        <input
          defaultValue={props.tel}
          {...register("tel")}
          name="tel"
          type="tel"
        />
      </label>
      <label>
        Date de naissance:
        <input
          defaultValue={props.anniv}
          {...register("anniv")}
          name="anniv"
          type="date"
        />
      </label>
      <label>
        Ville:
        <input
          defaultValue={props.ville}
          {...register("ville")}
          name="ville"
          type="text"
        />
      </label>
      <label>
        Pays:
        <input
          defaultValue={props.pays}
          {...register("pays")}
          name="pays"
          type="text"
        />
      </label>
      <label>
        URL de la photo:
        <input
          defaultValue={props.urlphoto}
          {...register("urlphoto")}
          name="urlphoto"
          type="url"
        />
      </label>

      <button className="button">Enregistrer</button>
    </form>
  );
}

export default Formulaire;
