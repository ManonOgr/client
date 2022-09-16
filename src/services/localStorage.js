export const SetLocalStorage = (token, id) =>{
    localStorage.setItem('token',token)
    localStorage.setItem('id',id)
}

export const removeLocalStorageToken = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
}


