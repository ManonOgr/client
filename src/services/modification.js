import axios from "axios";


export async function modification(token, url, datainfo) {
    let config = {headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type' : 'application/json'
    }}
    return await axios.put(url, datainfo, config)
    .then((response) =>{
        console.log(response)
        return response})
}