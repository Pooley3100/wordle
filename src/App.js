import './App.css';
import BoxGrid from './Boxes/BoxGrid';
import { useState, useEffect, useRef } from 'react';
import { select, isWord } from './Control/GetWord';
import Results from './Results/Results';
import Keyboard from './Keyboard/Keyboard';

function App() {
  var correctWord = useRef(select());
  const [showPage, setShowPage] = useState(0);
  const [flip, setFlip] = useState(false);
  const [notWord, setNotWord] = useState(false)
  const [currentIn, setCurrentIn] = useState('');
  const [currentList, setCurrentList] = useState([]);

  //Load currentlist from file, has to check that it was saved on the same day
  useEffect(() => {
    let current_date = new Date();
    var set_date = new Date(JSON.parse(localStorage.getItem('date')));
    var items = JSON.parse(localStorage.getItem('wordItems'));
    var page = Number(JSON.parse(localStorage.getItem('showPage')));
    if (items){
      if(set_date.toDateString() === current_date.toDateString()){
        setCurrentList(items);
        setShowPage(page);
      }
    };
  }, [])

  //Data to save words to local storage
  useEffect(() => {
    let current_date = new Date();
    const cleanup = () => {
      localStorage.setItem('date', JSON.stringify(current_date));
      localStorage.setItem('wordItems', JSON.stringify(currentList));
      localStorage.setItem('showPage', JSON.stringify(showPage));
    }
  
    window.addEventListener('beforeunload', cleanup);
  
    return () => {
      window.removeEventListener('beforeunload', cleanup);
    }
  }, [currentList, showPage]);

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
      // Set Timeout here to add a delay such that box flip reveal can be animated
      setTimeout(() => {
        setCurrentList(newList);
        setCurrentIn('');
        setFlip(false);
        if(currentIn === correctWord.current){
          setShowPage(1);
        } else if(currentList.length === 5){
          setShowPage(2);
        }
      }, 2500);
      setFlip(true);
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
      <BoxGrid currentInput={currentIn} currentList={currentList} correctWord={correctWord.current} shake={notWord} flip={flip}>
        <p className={`alert-box ${notWord ? 'alert-box-transition' : ''}`}>Not in Dictionary</p>
      </BoxGrid>
      <Results showPage={showPage} correctWord={correctWord.current}/>
      <Keyboard currentList={currentList} correctWord={correctWord.current}></Keyboard>
    </div>
  );
}

export default App;
