import './Account.css';
import {login} from '../Server/comms';
import { useState } from 'react';
import LoginPage from './LoginPage';

function Account(props) {
    const [showPage, setShowPage] = useState(false)

    let login_send = (userSettings) => {
        let currentList = login(userSettings);
        props.setList(currentList);
        props.setKeyboard();
        setShowPage(false);
    }

    let reveal = () => {
        props.setKeyboard();
        setShowPage(true);
    }

    return (
        <div>
        <div className='login_container'><button className='login_button' onClick={reveal}> Login </button></div>
        {showPage ? <LoginPage settings={login_send}></LoginPage> : '' }
        </div>
    );
};

export default Account;