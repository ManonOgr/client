import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Datas } from "../services/datacards";

import Card from "../components/Card";
import NavBar from "../components/NavBar";

function Accueil() {
  let Url = "http://localhost:7000/api/collaborateurs/random ";
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  let [DatasRandom, SetDataRandom] = useState();

  useEffect(() => {
    Datas(Url, token).then((res) => {
      SetDataRandom(res.data);
      console.log(res.data);
    });
    if (token === null) {
      navigate("/");
    }
  }, []);

  function age(date) {
    let years = date.substr(0, 5);
    let age = 2022 - parseFloat(years);
    return age;
  }

  function random() {
    Datas(Url, token).then((res) => {
      SetDataRandom(res.data);
    });
  }

  return (
    <div className="Accueil">
      <NavBar />

      <div className="containeracceuil">
        <h1>
          Bienvenue sur l'intranet de <span>Dan's</span>
        </h1>
        <p className="textresponsive">
          La plate-forme qui vous permettra de retrouver tous les collaborateurs
          de l'entreprise.
        </p>
        <h2>Connaissez-vous : </h2>

        {DatasRandom && (
          <Card
            name={DatasRandom.firstname + " " + DatasRandom.lastname}
            pole={DatasRandom.service}
            tel={DatasRandom.phone}
            mail={DatasRandom.email}
            birthday={DatasRandom.birthdate}
            img={DatasRandom.photo}
            ville={DatasRandom.city}
            age={age(DatasRandom.birthdate) + " ans"}
          />
        )}

        <button onClick={random} className="more">
          Voir un autre collaborateur
        </button>
      </div>
    </div>
  );
}

export default Accueil;
