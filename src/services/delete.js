import axios from 'axios';

export async function DeleteUser(url, token){
    let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        
    }}

    return await axios.delete(url,config)
    .then((response) =>{
        return response 

    })

}
