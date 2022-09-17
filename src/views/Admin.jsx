import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/connexion_service";

function Connexion() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const navigate = useNavigate();

  const OnchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const OnchangeMdp = (event) => {
    setMdp(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/Accueil");
    }
  }, []);

  function Submit() {
    console.log(email, mdp);
    login(email, mdp).then((res) => {
      navigate("/Accueil");
    });
  }

  return (
    <div className="connexion">
      <h1>Connexion</h1>
      <form method="POST">
        <img src="#" alt="logo" />
        <label>
          Email:
          <input type="email" id="mail" required onChange={OnchangeEmail} />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            id="password"
            required
            onChange={OnchangeMdp}
          />
        </label>

        <div className="button" onClick={Submit}>
          Connexion
        </div>
      </form>
    </div>
  );
}

export default Connexion;
