import './Key.css'

function Key(props) {
    // Gets passed correctword and currentlist (to edit background color) and keyletter and clickhandler.
    let color = '';
    function setColor(color_set){
        if(color_set === 'green'){
            color = 'green';
        } else if(color_set === 'orange' && color !== 'green'){
            color = 'orange';
        } else if(color_set === 'grey' && color !== 'green' && color !== 'orange'){
            color = 'grey';
        } else if(color_set === 'white' && color === ''){
            color = 'white';
        }
    }
    if (props.currentList.length > 0) {
        for (var i = 0, word; word = props.currentList[i]; i++) {
            if (word.includes(props.key_letter) && props.correctWord.includes(props.key_letter)) {
                if (word.indexOf(props.key_letter) === props.correctWord.indexOf(props.key_letter)) {
                    setColor('green');
                } else {
                    setColor('orange');
                }
            } else if (word.includes(props.key_letter)) {
                setColor('grey');
            } else {
                setColor('white');
            }
        };
    } else{
        setColor('white');
    }

    return (    
        <button className='key' onClick={props.handleInput} value={props.key_letter} style={{ backgroundColor: color }}>{props.key_letter}</button>
    );
}

export default Key;