import '../styles/css/styles.min.css';
import firebase from '../config/firebase.js'
import Header from './Header.js'
import CharacterList from './CharacterList';
import { useEffect, useState } from "react"

// import MiniSheet from './MiniSheet.js'
// import FullSheet from './FullSheet.js'

// how do i cycle through a firebase database and check if there is already an existing version of that object

function App() {
  const dbRef = firebase.database().ref();

  const [characters, setCharacters] = useState([]);
  const [focusSheet, setFocusSheet] = useState("");
  const [editSheet, setEditSheet] = useState("");
  const [userInput,setUserInput] = useState("");

  useEffect(() => {
    const newDataArray = [];
    dbRef.on("value", (response)=>{
      const data = response.val();
      for (let key in data) {
        let characterObj = {key:key, data: data[key]};
        newDataArray.push(characterObj);
      }
      setCharacters(newDataArray)
    });
  }, []);

  const handleExpandClick = (characterIndex) => {
    setFocusSheet(characterIndex)
  }

  const handleMiniClick = () =>{
    setFocusSheet("")
  }

  const handleEditClick = (characterIndex) => {
    setEditSheet(characterIndex)
  } 
  
  const handleEditSubmit = (event) =>{
    event.preventDefault()
    setEditSheet("")

  }

  return (
    <>
      {/* header module */}
      <Header />
      <CharacterList characterData={characters} expandClick={handleExpandClick} miniClick={handleMiniClick} focusSheet={focusSheet} editClick={handleEditClick} editSheet={editSheet} editSubmit={handleEditSubmit}/>
    </>
  );
}

export default App;


