const Header = ({ newHire }) => {

    return (
        <>
            <header>
                <div className="headerWrapper">
                    <div className="titleWrapper">

                        <h1>MU//TH//UR Personnel Report</h1>
                        <h2>A Character Tracker for ALIEN: The Roleplaying Game</h2>
                    </div>
                    <button className="newCharacterButton" onClick={newHire}> + New Hire</button>
                </div>
                <p>
                 Made by Sam Wells at <a href="https://junocollege.com/">Juno College</a>.
                    Built with React and Firebase.
                </p>
                <p>Remember: Crew Expendable.</p>
            </header>
        </>
    )
}

export default Header