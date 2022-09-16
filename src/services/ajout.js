import axios from "axios";

export async function ajout(
  token,
  url,
  civilité,
  firstname,
  lastname,
  mail,
  password,
  phone,
  birthdate,
  city,
  country,
  photo,
  service
) {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };
  let datainfo = {
    "gender": civilité,
    "firstname": firstname,
    "lastname": lastname,
    "email": mail,
    "password": password,
    "phone": phone,
    "birthdate": birthdate,
    "city": city,
    "country": country,
    "photo": photo,
    "service": service,
  };
  return await axios.post(url, datainfo, config).then((response) => {
    console.log(response);
    return response;
  });
}
