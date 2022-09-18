import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { Datas } from "../services/datacards";

function List() {
  let Url = "http://localhost:7000/api/collaborateurs ";
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

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

  const onChange = (data) => {
    if (data.choice === "name" && data.choicecat === "Marketing") {
      const filter = Datafilter.filter((filterpeople) => {
        let name = filterpeople.firstname + filterpeople.lastname;
        return (
          name.toLowerCase().includes(data.q) &&
          filterpeople.service === "Marketing"
        );
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "city" && data.choicecat === "Marketing") {
      const filter = Datafilter.filter((filterpeople) => {
        return (
          filterpeople.city.toLowerCase().includes(data.q) &&
          filterpeople.service === "Marketing"
        );
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "name" && data.choicecat === "Technique") {
      const filter = Datafilter.filter((filterpeople) => {
        let name = filterpeople.firstname + filterpeople.lastname;
        return (
          name.toLowerCase().includes(data.q) &&
          filterpeople.service === "Technique"
        );
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "city" && data.choicecat === "Technique") {
      const filter = Datafilter.filter((filterpeople) => {
        return (
          filterpeople.city.toLowerCase().includes(data.q) &&
          filterpeople.service === "Technique"
        );
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "name" && data.choicecat === "Client") {
      const filter = Datafilter.filter((filterpeople) => {
        let name = filterpeople.firstname + filterpeople.lastname;
        return (
          name.toLowerCase().includes(data.q) &&
          filterpeople.service === "Client"
        );
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "city" && data.choicecat === "Client") {
      const filter = Datafilter.filter((filterpeople) => {
        return (
          filterpeople.city.toLowerCase().includes(data.q) &&
          filterpeople.service === "Client"
        );
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "name" && data.choicecat === "choice") {
      const filter = Datafilter.filter((filterpeople) => {
        let name = filterpeople.firstname + filterpeople.lastname;
        return name.toLowerCase().includes(data.q);
      });
      SetDataPeoples(filter);
    }
    if (data.choice === "city" && data.choicecat === "choice") {
      const filter = Datafilter.filter((filterpeople) => {
        return filterpeople.city.toLowerCase().includes(data.q);
      });
      SetDataPeoples(filter);
    }

  };

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
            <form className="Search" onChange={handleSubmit(onChange)}>
              <input
                type="text"
                id="site-search"
                name="q"
                {...register("q")}
                placeholder="Recherche..."
              />

              <select name="choice" id="choice-select" {...register("choice")}>
                <option value="name">Nom</option>
                <option value="city">Ville</option>
              </select>
              <label>Catégorie:</label>
              <select
                name="choicecat"
                id="choice-select"
                {...register("choicecat")}
              >
                <option value="choice">--Catégorie--</option>
                <option
                  onClick={() => SwitchCategorie("Marketing")}
                  value="Marketing"
                >
                  Marketing
                </option>
                <option
                  onClick={() => SwitchCategorie("Technique")}
                  value="Technique"
                >
                  Technique
                </option>
                <option
                  onClick={() => SwitchCategorie("Client")}
                  value="Client"
                >
                  Client
                </option>
              </select>
            </form>
          </div>
        )}
        <div className="listperso">
          {DatasPeoples?.map((people) => {
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
                id={people.id}
                stateUser = {SetDataPeoples}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;``
