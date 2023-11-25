var server = 'http://localhost:3001/';

function sendCurrent(currentList) {
    //console.log(currentList);
    commServer(JSON.stringify(currentList));
}

function commServer(sendList) {
    try {
        fetch(server, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: sendList,
        });
    } catch (error) {
        console.log('Error sending current entry data to server')
    }
}

// Need encrypted username send
async function login(name = 'test'){
    let response = '';
    try{
        response = await fetch(server + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: 'test'})
        })
    } catch(error){
        console.error('Error in logging in');
    }
    var results = await response.json();
    console.log('returned from server ' + results);
    return results;
}

export {login, sendCurrent};

