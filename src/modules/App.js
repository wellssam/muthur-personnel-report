import '../styles/css/styles.min.css';
import firebase from '../config/firebase.js'
import Header from './Header.js'
import CharacterList from './CharacterList';
import { useEffect, useState } from "react"

// import MiniSheet from './MiniSheet.js'
// import FullSheet from './FullSheet.js'

// how do i cycle through a firebase database and check if there is already an existing version of that object

function App() {
  // initialize dbRef
  const dbRef = firebase.database().ref();
  // initialize state for the total list of characters, which sheet is focused on, and which sheet is in edit mode 
  const [characters, setCharacters] = useState([]);
  const [focusSheet, setFocusSheet] = useState("");
  const [editSheet, setEditSheet] = useState("");
  // initialize a state to hold submitted info from the form
  const [changeIterator, setChangeIterator] = useState(0)

  useEffect(() => {
    // initialize an array for the new data
    const newDataArray = [];
    dbRef.on("value", (response) => {
      const data = response.val();
      for (let key in data) {
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
      
      // checkNew(characters)
    });
  }, [changeIterator, dbRef.toJSON()]);
  
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
        characterRef.set(editedSheet)
        setChangeIterator(changeIterator + 1)
      } 
    }

  }

  const handleNewHireClick = () => {
    const newName = prompt("Character Name:")
    const newCharacter = {name: newName};
    dbRef.push(newCharacter);
    // the changeIterator solution is to get the page re-rendering properly, because sometimes it just won't and i don't knwo why. I know there must be a better way. And yet here we are.
    setChangeIterator(changeIterator + 1)
  }


  const removeFromDb = (name)=>{
    for (const character of characters) {
      if(character.data.name === name){
        const characterRef =firebase.database().ref(character.key);
        characterRef.remove();
        setChangeIterator(changeIterator+1)
      }
    }
  }

  return (
    <>
      <div className="wrapper">

        {/* header module */}
        <Header newHire={handleNewHireClick}/>
        <CharacterList characterData={characters} expandClick={handleExpandClick} miniClick={handleMiniClick} focusSheet={focusSheet} editClick={handleEditClick} editSheet={editSheet} editSubmit={updateSheet} removeSheet={removeFromDb}/>
        <footer>
       
      </footer>
      </div>

    </>
  );
}

export default App;


