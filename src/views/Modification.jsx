import React from "react";
import { useState, useEffect } from "react";
import { Datas } from "../services/datacards";
import { useNavigate } from "react-router-dom";



import NavBar from "../components/NavBar";
import Formulaire from "../components/Formulaire";




function Modification() {

  let token = localStorage.getItem('token');
  let id = localStorage.getItem('id');
  let navigate = useNavigate();
  let [DataPeople, SetDataPeople] = useState()

  useEffect(() => {
    let Url = `http://localhost:7000/api/collaborateurs/${id}`
    Datas(Url, token).then((res) => {
      SetDataPeople(res.data);
    });
    if (token === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="Modification">
      <NavBar />

      <div className="containermodification">
        <h1>Modifications</h1>
        <p>Ici vous pouvez modifier vos données.</p>
      <Formulaire 
      civilité = {DataPeople?.gender}
      categories = {DataPeople?.service}
      nom = {DataPeople?.firstname}
      prenom = {DataPeople?.lastname}
      mail = {DataPeople?.email}
      tel = {DataPeople?.phone}
      anniv = {DataPeople?.birthdate}
      ville = {DataPeople?.city}
      pays = {DataPeople?.country}
      urlphoto = {DataPeople?.photo}
      
      />
      </div>
    </div>
  );
}

export default Modification;
