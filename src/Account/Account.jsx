import './Account.css';
import {login} from '../Server/comms';

function Account(props) {
    let login_send = () => {
        let currentList = login();
        props.setList(currentList);
    }

    return (
        <div className='login_container'><button className='login_button' onClick={login_send}> Login </button></div>
    );
};

export default Account;