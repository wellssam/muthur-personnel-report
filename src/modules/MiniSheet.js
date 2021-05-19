const MiniSheet = ({characterIndex, characterDetails, expandClick}) => {

    


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
                        }>Expand</button></li>
                </ul>
            </li>
        </>
    )
}

export default MiniSheet