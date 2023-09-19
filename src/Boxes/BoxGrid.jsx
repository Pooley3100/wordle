import Box from './Box';
import './BoxGrid.css';

function BoxGrid(props) {
    // Pad out the current inputs with spaces if needed
    var currentInputEdit = props.currentInput;
    var remainder = 5 - currentInputEdit.length;
    currentInputEdit += ' '.repeat(remainder);
    var wordArray = currentInputEdit.split('');

    // Pad out the lower entries with empty lines if needed
    var padList = Array(0);
    if(props.currentList.length < 5){
        var listRemainder = 5 - props.currentList.length;
        var padWord = ' '.repeat(5);
        padList = Array(listRemainder).fill(padWord);
    }

    // Called to compare current in to correct word and append to css styles.
    function checkCorrectness(index, currentLetter){
        if(props.correctWord[index] === currentLetter){
            return 'green';
        } else if(props.correctWord.includes(currentLetter)){
            return 'orange';
        } else{
            return 'grey';
        }
    }

    //TODO #1 crashes on sixth entry
    //TODO #2 bug on key id for render
    //Contains three tenary controls, first is list of entered words, second is current input, third is empty lines
    return (<div className='box_form'>
        {props.children}
        {props.currentList.length > 0 &&
            props.currentList.map((words, indexY) => {
                return (
                    <ul className='box_form_ul'>
                        {words.split('').map((letterElement, indexX) => (<Box letter={letterElement} color={checkCorrectness(indexX, letterElement)} key={indexY +''+indexX+''+1} id={indexY +''+indexX+''+1} set={true}/>))}
                    </ul>
                );
            })
        }
        {(props.currentList.length <= 5) &&
        <ul className={`box_form_ul ${props.shake ? 'shake-row' : '' }`}>
            {wordArray.map((letterElement, index) => (<Box letter={letterElement} key={index +''+2} id={index+''+2} flip={props.flip} color={checkCorrectness(index, letterElement)}/>))}
        </ul> }
        {padList.length > 0 &&
            padList.map((words, indexY) => {
                return (
                    <ul className='box_form_ul'>
                        {words.split('').map((letterElement, indexX) => (<Box letter={letterElement} key={indexY +''+indexX+''+3} id={indexY +''+indexX+''+3} />))}
                    </ul>
                );
            })
        }
    </div>);
}

export default BoxGrid;