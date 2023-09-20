import './Keyboard.css';
import Key from './Key';

var topRow = ['Q','W','E','R','T','Y','U','I','O','P','BACK'];
var middleRow = ['A','S','D','F','G','H','J','K','L','ENTER'];
var bottomRow = ['Z','X','C','V','B','N','M'];

function Keyboard(props){
    return(
        <div className='keyboard'>
            <div className='top-row'>
                {topRow.map((key) => (<Key key_letter={key} key={key} correctWord={props.correctWord} currentList={props.currentList} />))}
            </div>
            <div className='middle-row'>
                {middleRow.map((key) => (<Key key_letter={key} key={key} correctWord={props.correctWord} currentList={props.currentList}/>))}
            </div>
            <div className='bottom-row'>
                {bottomRow.map((key) => (<Key key_letter={key} key={key} correctWord={props.correctWord} currentList={props.currentList}/>))}
            </div>
        </div>
    )
}

export default Keyboard;