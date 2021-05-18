const MiniSheet = ({characterIndex, characterDetails, expandClick}) => {

    


    return (
        <>
            <li className="miniSheet">
                <ul>
                    <li>name: {characterDetails.name}</li>
                    <li>player name: {characterDetails.playerName} </li>
                    <li>career here: {characterDetails.career}</li>
                    <li>status: {characterDetails.status}</li>
                    <li><button onClick={()=>{
                        expandClick(characterIndex)
                    }
                        }>Expand</button></li>
                </ul>
            </li>
        </>
    )
}

export default MiniSheet