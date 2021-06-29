const SheetEditor = ({editSubmit, characterDetails}) => {
    
    

    const handleEditSubmit = (event) => {
        // prevent refresh
        event.preventDefault()
        // create a variable based on the form's user input
        const userInputs = event.target
        // create an empty new character object
        const newCharacterObject = {};
        // loop through the viable parameters of the user's input and save them to the userInputs object
        for (let i = 0; i < 42 ; i++){
            // this if statement is error handling ( i kept getting an empty key param and didn't know why)
            if (userInputs[i].id){
                userInputs[i].value 
                    ? (newCharacterObject[userInputs[i].id] = userInputs[i].value) 
                    : (newCharacterObject[userInputs[i].id] = userInputs[i].placeholder) 
            }
        }
        // call the handleEditSubmit function with the object created from the user input
        editSubmit(newCharacterObject)
    }

    return (
        <li className="editSheet">
            <form action="submit" onSubmit={handleEditSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder={characterDetails.name} />
                <label htmlFor="playerName">Player Name: </label>
                <input type="text" id="playerName" placeholder={characterDetails.playerName} />
                <label htmlFor="career">Career </label>
                <input type="text" id="career" placeholder={characterDetails.career} />
                <label htmlFor="status">Status: </label>
                <input type="text" id="status" placeholder={characterDetails.status} />
                <label htmlFor="appearance">Appearance: </label>
                <textarea id="appearance" placeholder={characterDetails.appearance} />
                <label htmlFor="talents">Talents: </label>
                <textarea id="talents" placeholder={characterDetails.talents} />
                <ul>
                    <li>Relationships</li>
                    <li>
                        <label htmlFor="buddy">Buddy: </label>
                        <input type="text" id="buddy" placeholder={characterDetails.buddy} />
                    </li>
                    <li>
                        <label htmlFor="rival">Rival: </label>
                        <input type="text" id="rival" placeholder={characterDetails.rival} />
                    </li>
                </ul>

                <ul>
                    <li>
                        <label htmlFor="stress">Stress </label>
                        <input type="number" id="stress" placeholder={characterDetails.stress} />
                    </li>
                    <li><label htmlFor="Health">Health: </label>
                        <input type="number" id="health" placeholder={characterDetails.health} /></li>
                    <li><label htmlFor="experience">Experience: </label>
                        <input type="number" id="experience" placeholder={characterDetails.experience} /></li>
                    <li><label htmlFor="story">Story: </label>
                        <input type="number" id="story" placeholder={characterDetails.number}  /></li>
                    <li><label htmlFor="radiation">Radiation: </label>
                        <input type="number" id="radiation" placeholder={characterDetails.radiation}  /></li>
                    <li><label htmlFor="critInj">Critical Injuries: </label>
                        <textarea id="cr=" strength">Strength: </label>
                        <input type="nritInj" placeholder={characterDetails.critInj}  /></li>
                    <li>
                        <label htmlFor="conditions">Conditions: </label>
                        <textarea id="conditions" placeholder={characterDetails.conditions}  />
                    </li>
                </ul>
                <ul>
                    <li>Attributes</li>
                    <li>
                        <label htmlFor="strength">Strength: </label>
                        <input type="number" id="strength" placeholder={characterDetails.strength}  />
                    </li>
                    <li>
                        <label htmlFor="wits">Wits: </label>
                        <input type="number" id="wits" placeholder={characterDetails.wits}  />
                    </li>
                    <li>
                        <label htmlFor="empathy">Empathy: </label>
                        <input type="number" id="empathy" placeholder={characterDetails.empathy}  />
                    </li>
                    <li>
                        <label htmlFor="agility">Agility: </label>
                        <input type="number" id="agility" placeholder={characterDetails.agility}  />
                    </li>
                </ul>
                <ul>
                    <li>Skills</li>
                    <li>
                        <ul>
                            <li>Strength Skills</li>
                            <li><label htmlFor="heavyMachinery">Heavy Machinery:  </label>
                                <input type="number" id="heavyMachinery" placeholder={characterDetails.heavyMachinery}  /></li>
                            <li><label htmlFor="closeCombat">Close Combat: </label>
                                <input type="number" id="closeCombat" placeholder={characterDetails.closeCombat}  /></li>
                            <li><label htmlFor="stamina">Stamina: </label>
                                <input type="number" id="stamina" placeholder={characterDetails.stamina}  /></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Wits Skills</li>
                            <li><label htmlFor="observation">Observation: </label>
                                <input type="number" id="observation" placeholder={characterDetails.observation}  /></li>
                            <li><label htmlFor="survival">Survival: </label>
                                <input type="number" id="survival" placeholder={characterDetails.survival}  /></li>
                            <li><label htmlFor="comtech">ComTech: </label>
                                <input type="number" id="comtech" placeholder={characterDetails.comTech}  /></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Empathy Skills </li>
                            <li><label htmlFor="medicalAid">Medical Aid: </label>
                                <input type="number" id="medicalAid" placeholder={characterDetails.medicalAid}  /></li>
                            <li><label htmlFor="manipulation">Manipulation: </label>
                                <input type="number" id="manipulation" placeholder={characterDetails.manipulation}  /></li>
                            <li><label htmlFor="command">Command: </label>
                                <input type="number" id="command" placeholder={characterDetails.command}  /></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Agility Skills</li>
                            <li><label htmlFor="rangedCombat">Ranged Combat: </label>
                                <input type="number" id="rangedCombat" placeholder={characterDetails.rangedCombat}  /></li>
                            <li><label htmlFor="mobility">Mobility:  </label>
                                <input type="number" id="mobility" placeholder={characterDetails.mobility}  /></li>
                            <li><label htmlFor="piloting">Piloting: </label>
                                <input type="number" id="piloting" placeholder={characterDetails.piloting}  /></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>Inventory:</li>
                    <li><label htmlFor="armor">Armor: </label>
                        <input type="number" id="armor" placeholder={characterDetails.armor}  /></li>
                    <li><label htmlFor="weapons">Weapons </label>
                        <textarea id="weapons" placeholder={characterDetails.weapons}  /></li>
                    <li><label htmlFor="gear">Gear: </label>
                        <textarea id="gear" placeholder={characterDetails.gear}  /></li>
                    <li><label htmlFor="tinyItems"> Tiny Items: </label>
                        <textarea id="tinyItems" placeholder={characterDetails.tinyItems}  /></li>
                    <label htmlFor="signatureItem">Signature Item:</label>
                    <input type="text" id="signatureItem" placeholder={characterDetails.signatureItem}  />
                    <ul>
                        <li>Consummables</li>
                        <li><label htmlFor="air">Air: </label>
                            <input type="number" id="air" placeholder={characterDetails.air}  />
                        </li>
                        <li><label htmlFor="food">Food: </label>
                            <input type="number" id="food" placeholder={characterDetails.food}  />
                        </li>
                        <li><label htmlFor="power">Power: </label>
                            <input type="number" id="power" placeholder={characterDetails.power}  />
                        </li>
                        <li><label htmlFor="water">Water: </label>
                            <input type="number" id="water" placeholder={characterDetails.water}  />
                        </li>
                    </ul>

                    <li><label htmlFor="encumbrance">Encumbrance: </label>
                        <input type="number" id="encumbrance" placeholder={characterDetails.encumbrance}/></li>
                </ul>
                <button type="submit">Confirm</button>
            </form>
        </li>
    )
}

export default SheetEditor