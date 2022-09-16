import Formulaire from "../components/Formulaire"
import NavBar from "../components/NavBar";

function ajout() {
    return(
        <div className="ajout">
<NavBar/>
<div className="containerajout">
<h1>Ajout d'un collaborateur : </h1>
<Formulaire/>
</div>

        </div>

    )
}

export default ajout;