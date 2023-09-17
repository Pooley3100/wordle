import './Box.css';

function Box(props) {
    return(
        <li className='letter_li'>
            <div className='inner_box' style={{backgroundColor : props.color}}>
                <p className='letter'>
                    {props.letter}
                </p>
            </div>
        </li>
    );
}

export default Box;