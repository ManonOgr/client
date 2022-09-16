import { removeLocalStorageToken } from '../services/localStorage';
import { useNavigate } from 'react-router-dom';


function Disconnect() {

    const navigate = useNavigate();
    function disconnect(){
        removeLocalStorageToken()
        navigate('/')
      }


    return (
        <div>
    <button className='btnnav' onClick={disconnect}> <img src="https://img.icons8.com/ios-filled/20/000000/logout-rounded.png"/> <span className='txtdeco'>Déconnexion</span></button> 
</div>
    )};


    export default Disconnect;

    



