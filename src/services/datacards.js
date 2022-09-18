import axios from "axios";

export async function Datas(url, token) {
  let configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.get(url, configuration).then((res) => {

    return res;
  });
}
