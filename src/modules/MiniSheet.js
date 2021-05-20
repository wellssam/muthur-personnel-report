const MiniSheet = ({characterIndex, characterDetails, expandClick, removeSheet}) => {

    
    // minified sheet, populates from data in the characters state. Calls the handleExpandClick function when the expand button is clicked

    return (
        <>
            <li className="miniSheet">
                <ul>
                    <li>Name: {characterDetails.name}</li>
                    <li>Player Name: {characterDetails.playerName} </li>
                    <li>Career: {characterDetails.career}</li>
                    <li>Status: {characterDetails.status}</li>
                    <li><button onClick={()=>{
                        expandClick(characterIndex)
                    }
                        }>Expand</button>
                        <button onClick={()=>{
                            removeSheet(characterDetails.name)
                        }}>Remove</button></li>
                    
                </ul>
            </li>
        </>
    )
}

export default MiniSheet