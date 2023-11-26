import './LoginPage.css'

function LoginPage(props){
    let getData = (data) => {
        data.preventDefault();
        const userSettings = [data.target.username.value, data.target.password.value];
        props.settings(userSettings);
    };

    return (
        <div className='login-page'>
            <h2>Login</h2>
            <form onSubmit={getData}>
            <label>Username</label>
            <input type='text' id='username'></input>
            <label>Password</label>
            <input type='text' id='password'></input><br/>
            <input type='submit'></input>
            </form>
        </div>)
}

export default LoginPage;