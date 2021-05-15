import '../styles/css/styles.min.css';
import firebase from '../firebase.js'

// namespace
const namespace = {}

namespace.dbRef = firebase.database().ref();


function App() {
  return (
    <>
      {/* header module */}
      <header>
        <h1>MU//TH//UR Personnel Report</h1>
        <button>New Hire [+] Add Character</button>
      </header>
      <section>
        <h2>Personnel:</h2>
        {/* minimized character sheet */}
        <ul>
          <li>
            <ul>
              <li>NAME: [NAME HERE]</li>
              <li>PLAYER NAME: [PLAYER NAME HERE]</li>
              <li>CAREER: [CAREER HERE]</li>
              <li>SATUS: [STATUS HERE]</li>
              <li><button>[+]</button></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>NAME: [NAME HERE]</li>
              <li>PLAYER NAME: [PLAYER NAME HERE]</li>
              <li>CAREER: [CAREER HERE]</li>
              <li>SATUS: [STATUS HERE]</li>
              <li><button>[+]</button></li>
            </ul>
          </li>
        </ul>
    </section>



    </>
  );
}

export default App;
