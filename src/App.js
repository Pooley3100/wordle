import './App.css';
import BoxGrid from './Boxes/BoxGrid';
import { useState } from 'react';
import { select, isWord } from './Control/GetWord';

function App() {
  const [correctWord, setCorrectWord] = useState(select());
  const [notWord, setNotWord] = useState(false)
  const [currentIn, setCurrentIn] = useState('');
  const [currentList, setCurrentList] = useState([]);

  //Function called when letter pressed on div spanning div
  function handleLetterInput(event) {
    if ((event.key.length === 1 && (event.key.toUpperCase() !== event.key.toLowerCase()))) {
      changeCurrentIn(event.key.toUpperCase(), true);
    }
    else if (event.key === "Backspace") {
      changeCurrentIn('', false);
    } else if (event.key === "Enter") {
      submitWord();
    }
  }

  //Attempt to submit currentin word to current list, checks if word.
  function submitWord() {
    var wordResult = isWord(currentIn)
    if (currentIn.length === 5 && wordResult) {
      const newList = [...currentList, currentIn];
      setCurrentList(newList);
      setCurrentIn('');
    } else if (currentIn.length === 5 && !wordResult) {
      setNotWord(true);
    }
  }

  //Appends typed in letters to current in
  function changeCurrentIn(letter, mod) {
    setNotWord(false);
    if (currentIn.length < 5 && mod === true) {
      setCurrentIn(currentIn + letter);
    } else if (mod === false && currentIn.length > 0) {
      setCurrentIn(currentIn.slice(0, currentIn.length - 1));
    };
  }

  // Main Wordle with page div for key input, containing header and 5x6 box grid.
  return (
    <div className='page' onKeyDown={handleLetterInput} tabIndex={'0'}>
      <h2 className='navBox'> Wordle Rip-Off</h2>
      <BoxGrid currentInput={currentIn} currentList={currentList} correctWord={correctWord}>
        <p className={`alert-box ${notWord ? 'alert-box-transition' : ''}`}>Not in Dictionary</p>
      </BoxGrid>
    </div>
  );
}

export default App;
