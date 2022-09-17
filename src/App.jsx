import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connexion from "./views/Connexion";
import Accueil from "./views/Accueil";
import List from "./views/List";
import Modification from "./views/Modification";
import Ajout from "./views/Ajout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="*" element={<Connexion />} />
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/List" element={<List />} />
          <Route path="/Modification" element={<Modification />} />
          <Route path="/Ajout" element={<Ajout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
