function Card(props) {
  return (
    <div className="cards">
      <div className="containercardperso">
        <div className="persoimg">
          <img src={props.img} alt="img collaborateur" />
        </div>

        <div className="containerinfoperso">
          <div className="containerpole">
            <p className="pole"> {props.pole}</p>
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
