import './Box.css';

function Box(props) {
    // props set shows whether result is shown, flip is to do reveal animation
    let changeColor = false;
    if(props.flip || props.set){
        changeColor = true;
    }
    return(
        <li className={`letter_li ${props.flip ? 'li-flip' : ''}`}>
            <div className='inner_box' style={{backgroundColor : changeColor ? props.color : ''}}>
                <p className='letter'>
                    {props.letter}
                </p>
            </div>
        </li>
    );
}

export default Box;