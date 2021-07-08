import '../styles/css/styles.min.css';
import firebase from '../config/firebase.js'
import Header from './Header.js'
import CharacterList from './CharacterList';
import { useEffect, useState } from "react"
import LoginModule from './LoginModule.js'
import SignupModule from './SignupModule.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  // initialize dbRef
  const dbRef = firebase.database().ref();
  // initialize state for the total list of characters, which sheet is focused on, and which sheet is in edit mode 
  const [characters, setCharacters] = useState([]);
  const [focusSheet, setFocusSheet] = useState("");
  const [editSheet, setEditSheet] = useState("");
  // initialize a state to hold submitted info from the form

  useEffect(() => {
    dbRef.on('value', (response) => {
      // initialize an array for the new data
      const newDataArray = [];
      // set data to a variable
      const data = response.val();
      // iterate through data object
      for (let key in data) { 
        // setting the value as a new object
        const characterObj = { key: key, data: data[key] };
        // loop through the newDataArray and make sure there are no duplicate keys or names
        if(newDataArray){
          let keyDuplicate = false;
          for (const dataPoint of newDataArray) {
            if (characterObj.key === dataPoint.key) {
              keyDuplicate = true;
            } 
          }
          if (!keyDuplicate) {
            newDataArray.push(characterObj);
          }
        } else{
          newDataArray.push(characterObj);
        }
      }
      setCharacters(newDataArray)
    });
  }, []);
  
  // handler for the when the expand button is clicked
  const handleExpandClick = (characterIndex) => {
    setFocusSheet(characterIndex)
  }
  // handler for when the minify button is clicked
  const handleMiniClick = () => {
    setFocusSheet("")
  }
  // handler for when the edit button is clicked
  const handleEditClick = (characterIndex) => {
    setEditSheet(characterIndex)
  }
  // handler for when the edit form is submitted (this does not work)
  const updateSheet = (editedSheet) => {
    setEditSheet("")
    for (const character of characters){
      if(character.data.name === editedSheet.name){
        const characterRef = firebase.database().ref("/"+character.key);
        characterRef.set(editedSheet);
      } 
    }
  }

  const handleNewHireClick = () => {
    const newName = prompt("Character Name:")
    const newCharacter = {name: newName};
    dbRef.push(newCharacter);
  }

  const removeFromDb = (name)=>{
    for (const character of characters) {
      if(character.data.name === name){
        const characterRef =firebase.database().ref(character.key);
        characterRef.remove();
      }
    }
  }
  
  return (
    <Router>
      <div className="wrapper">
      <Route exact path="/login" component={LoginModule}/>
      <Route path="/signup" component={SignupModule}/>

      <Route path="/app/:user" render={ () => 
        <>
          <Header newHire={handleNewHireClick}/>
          <CharacterList characterData={characters} expandClick={handleExpandClick} miniClick={handleMiniClick} focusSheet={focusSheet} editClick={handleEditClick} editSheet={editSheet} editSubmit={updateSheet} removeSheet={removeFromDb}/>
        </>
      }
        />
        </div>
        </Router>
  );
}

export default App;


