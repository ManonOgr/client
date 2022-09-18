import { DeleteUser } from "../services/delete";
import { Datas } from "../services/datacards";

function Card(props) {

  let admin = JSON.parse(localStorage.getItem("admin"));
  let token =  localStorage.getItem("token");

const colorService = (pole) =>{
if (pole === "Marketing") {
  return '#107E7D'
}else if(pole === "Technique"){
  return '#645E9D'
} else if(pole === "Client"){
  return '#95190C'
}
}

const userDelete = (id) =>{
  let url = `http://localhost:7000/api/collaborateurs/${id}`
  console.log("click")
  DeleteUser(url, token).then(res =>{
    Datas('http://localhost:7000/api/collaborateurs/', token).then(response =>{
      props.stateUser(response.data)
    })
  })
}

  return (
    <div className="cards">
      <div className="containercardperso">
        <div className="persoimg">
          <img src={props.img} alt="img collaborateur" />
        </div>

        <div className="containerinfoperso">
          <div className="containerpole" >
          <button className="btndelete" style={{ display: admin ? "block" : "none" }} onClick={()=>userDelete(props.id)}><img src="https://img.icons8.com/ios-filled/20/000000/delete--v1.png"/></button>
            <div className="pole" style={{backgroundColor: colorService(props.pole)}} >
            <p> {props.pole} </p>
 
            </div>

          </div>
        

          <div className="name">
            {props.name} {props.age}
          </div>
        
          <div className="ville"> {props.ville}</div>
          <div className="email">
            <img src="https://img.icons8.com/ios-filled/15/000000/email.png" />{" "}
            <p> : {props.mail}</p>
          </div>
          <div className="tel">
            <img src="https://img.icons8.com/ios-filled/15/000000/phone.png" />{" "}
            <p>: {props.tel}</p>
          </div>
          <div className="anniv">
            <img src="https://img.icons8.com/ios-filled/15/000000/birthday-cake.png" />{" "}
            : <p>{props.birthday}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
