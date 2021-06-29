import MiniSheet from "./MiniSheet.js"
import FullSheet from "./FullSheet.js";
import SheetEditor from "./SheetEditor.js"

const CharacterList = ({ characterData, expandClick, focusSheet, miniClick, editClick, editSheet, editSubmit, removeSheet }) => {
    return (
        <section>
            {/* minimized character sheet */}
            <ul className="sheetList">
                {characterData.map((character) => {
                    if (character.key === editSheet) {
                        return (
                            <SheetEditor key={character.key} editSubmit={editSubmit} characterIndex={character.key} characterDetails={character.data} />
                        )
                    } else if (character.key === focusSheet) {
                        return (
                            <FullSheet key={character.key} characterIndex={character.key} characterDetails={character.data} miniClick={miniClick} editClick={editClick} editSheet={editSheet} />
                        )
                    } else {
                        return (
                            <MiniSheet key={character.key} characterIndex={character.key} characterDetails={character.data} expandClick={expandClick} removeSheet={removeSheet} />
                        )
                    }
                })}
            </ul>
        </section >
    )
}

export default CharacterList