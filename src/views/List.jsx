import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { Datas } from "../services/datacards";

function List() {
  let Url = "http://localhost:7000/api/collaborateurs ";
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let input = useRef();


  let [DatasPeoples, SetDataPeoples] = useState();
  let [Datafilter, SetDataFilter] = useState();

  useEffect(() => {
    Datas(Url, token).then((res) => {
      SetDataPeoples(res.data);
      SetDataFilter(res.data);
    });
    if (token === null) {
      navigate("/");
    }
  }, []);

  function filter(){
    if(input.current.value !== ""){
      let filterDatas = DatasPeoples.filter((people) =>{
        return people.firstname.toLowerCase().includes(input.current.value)
      })
      SetDataFilter(filterDatas)
    } if(input.current.value === ""){
      SetDataFilter(DatasPeoples)
    }
  }

  function SwitchCategorie(cat){
switch(cat)
{
  case "Client": {
  let filterSearch = DatasPeoples.filter((people) =>{
  people.service == cat
  SetDataFilter(filterSearch)
  console.log(filterSearch)
  })
  break;
}
  case "Marketing": {
    let filterSearch = DatasPeoples.filter((people) =>{
      people.service == cat
      SetDataFilter(filterSearch)
      console.log(filterSearch)
  })
  break;
}
  case "Technique": {
    let filterSearch = DatasPeoples.filter((people) =>{
      people.service == cat
      SetDataFilter(filterSearch)
      console.log(filterSearch)
  })
  break;
}
  
}
  }







  function age(date) {
    let years = date.substr(0, 5);
    let age = 2022 - parseFloat(years);
    return age;
  }

  return (
    <div className="List">
      <NavBar />

      <div className="containerlist">

      {Datafilter && (

     
        <div className="containersearch">
          <div className="Search">
            <input
              onChange={filter} type="text"
              id="site-search"
              name="q"
              placeholder="Recherche..." ref={input} 
            />
  
            <select name="choice" id="choice-select">
              <option value="choice">--Choisissez une option--</option>
              <option value="name">Nom</option>
              <option value="localisation">Localisation</option>
            </select>
            <label>Catégorie:</label>
            <select name="choice" id="choice-select">
              <option value="choice">--Choisissez une catégorie--</option>
              <option onClick={() => SwitchCategorie('Marketing')} value="mark">Marketing</option>
              <option onClick={() => SwitchCategorie('Technique')} value="tech">Technique</option>
              <option onClick={() => SwitchCategorie('Client')} value="client">Client</option>
            </select>
          </div>
        </div>
      )}
        <div className="listperso">
          {Datafilter?.map((people) => {
            return (
              <Card
                key={people.id}
                pole={people.service}
                name={people.firstname + " " + people.lastname}
                tel={people.phone}
                mail={people.email}
                birthday={people.birthdate}
                img={people.photo}
                ville={people.city + " " + people.country}
                age={age(people.birthdate) + " ans"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
