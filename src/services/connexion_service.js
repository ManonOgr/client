import axios from "axios";
import { SetLocalStorage } from "./localStorage";

export async function login(email, password) {
  return await axios
    .post("http://localhost:7000/api/login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      SetLocalStorage(
        response.data.token,
        response.data.user.id,
        response.data.user.isAdmin
      );
    })
    .catch(function (error) {
      console.log(error);
    });
}
