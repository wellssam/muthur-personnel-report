const SheetEditor = ({editSubmit}) => {
    return (
        <li className="fullSheet">
            <form action="submit" onSubmit={(event)=>{
                editSubmit(event)
            }}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="[name]" />
                <label htmlFor="playerName">Player Name: </label>
                <input type="text" id="playerName" placeholder="[player name]" />
                <label htmlFor="career">Career </label>
                <input type="text" id="career" placeholder="[career]" />
                <label htmlFor="status">Status: </label>
                <input type="text" id="status" placeholder="[current status]" />
                <label htmlFor="appearance">Appearance: </label>
                <textarea id="appearance" placeholder="[appearance]" />
                <label htmlFor="talents">Talents: </label>
                <textarea id="talents" placeholder="[talent1, talent2, talent3]" />
                <ul>
                    <li>Relationships</li>
                    <li>
                        <label htmlFor="buddy">Buddy: </label>
                        <input type="text" id="buddy" placeholder="[buddy]" />
                    </li>
                    <li>
                        <label htmlFor="rival">Rival: </label>
                        <input type="text" id="rival" placeholder="[rival]" />
                    </li>
                </ul>

                <ul>
                    <li>
                        <label htmlFor="stress">Stress </label>
                        <input type="number" id="stress" placeholder="0" />
                    </li>
                    <li><label htmlFor="Health">Health: </label>
                        <input type="number" id="stress" placeholder="0" /></li>
                    <li><label htmlFor="experience">Experience: </label>
                        <input type="number" id="stress" placeholder="0" /></li>
                    <li><label htmlFor="story">Story: </label>
                        <input type="number" id="story" placeholder="0" /></li>
                    <li><label htmlFor="radiation">Radiation: </label>
                        <input type="number" id="radiation" placeholder="0" /></li>
                    <li><label htmlFor="critInj">Critical Injuries: </label>
                        <textarea id="critInj" placeholder="[critical injuries]" /></li>
                    <li>
                        <p>Conditions:</p>
                        <fieldset>
                            <label htmlFor="starving">Starving</label>
                            <input type="checkbox" id="starving" />
                            <label htmlFor="dehydrated">Dehydrated</label>
                            <input type="checkbox" id="dehydrated" />
                            <label htmlFor="exhausted">Exhausted</label>
                            <input type="checkbox" id="exhausted" />
                            <label htmlFor="freezing">Freezing</label>
                            <input type="checkbox" id="freezing" />
                        </fieldset>

                    </li>
                </ul>

                <ul>
                    <li>Attributes</li>
                    <li>
                        <label htmlFor="strength">Strength: </label>
                        <input type="number" id="strength" placeholder="0" />
                    </li>
                    <li>
                        <label htmlFor="wits">Wits: </label>
                        <input type="number" id="wits" placeholder="0" />
                    </li>
                    <li>
                        <label htmlFor="empathy">Empathy: </label>
                        <input type="number" id="empathy" placeholder="0" />
                    </li>
                    <li>
                        <label htmlFor="agility">Agility: </label>
                        <input type="number" id="agility" placeholder="0" />
                    </li>
                </ul>
                <ul>
                    <li>Skills</li>
                    <li>
                        <ul>
                            <li>Strength Skills</li>
                            <li><label htmlFor="heavyMachinery">Heavy Machinery:  </label>
                                <input type="number" id="heavyMachinery" placeholder="0" /></li>
                            <li><label htmlFor="closeCombat">Close Combat: </label>
                                <input type="number" id="closeCombat" placeholder="0" /></li>
                            <li><label htmlFor="stamina">Stamina: </label>
                                <input type="number" id="stamina" placeholder="0" /></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Wits Skills</li>
                            <li><label htmlFor="observation">Observation: </label>
                                <input type="number" id="observation" placeholder="0" /></li>
                            <li><label htmlFor="survival">Survival: </label>
                                <input type="number" id="survival" placeholder="0" /></li>
                            <li><label htmlFor="comtech">ComTech: </label>
                                <input type="number" id="comtech" placeholder="0" /></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Empathy Skills </li>
                            <li><label htmlFor="medicalAid">Medical Aid: </label>
                                <input type="number" id="medicalAid" placeholder="0" /></li>
                            <li><label htmlFor="manipulation">Manipulation: </label>
                                <input type="number" id="manipulation" placeholder="0" /></li>
                            <li><label htmlFor="command">Command: </label>
                                <input type="number" id="command" placeholder="0" /></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Agility Skills</li>
                            <li><label htmlFor="rangedCombat">Ranged Combat: </label>
                                <input type="number" id="rangedCombat" placeholder="0" /></li>
                            <li><label htmlFor="mobility">Mobility:  </label>
                                <input type="number" id="mobility" placeholder="0" /></li>
                            <li><label htmlFor="piloting">Piloting: </label>
                                <input type="number" id="piloting" placeholder="0" /></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>Inventory:</li>
                    <li><label htmlFor="armor">Armor: </label>
                        <input type="number" id="armor" placeholder="0" /></li>
                    <li><label htmlFor="weapons">Weapons </label>
                        <textarea id="weapons" placeholder="[Weapon 1, Weapon 2]" /></li>
                    <li><label htmlFor="gear">Gear: </label>
                        <textarea id="gear" placeholder="[gear]" /></li>
                    <li><label htmlFor="tinyItems"> Tiny Items: </label>
                        <textarea id="tinyItems" placeholder="[critical injuries]" /></li>
                    <label htmlFor="signatureItem">Signature Item:</label>
                    <input type="text" id="signatureItem" placeholder="[Signature Item]" />
                    <ul>
                        <li>Consummables</li>
                        <li><label htmlFor="air">Air: </label>
                            <input type="number" id="air" placeholder="0" />
                        </li>
                        <li><label htmlFor="food">Food: </label>
                            <input type="number" id="food" placeholder="0" />
                        </li>
                        <li><label htmlFor="power">Power: </label>
                            <input type="number" id="power" placeholder="0" />
                        </li>
                        <li><label htmlFor="water">Water: </label>
                            <input type="number" id="water" placeholder="0" />
                        </li>
                    </ul>

                    <li><label htmlFor="encumbrance">Encumbrance: </label>
                        <input type="number" id="encumbrance" placeholder="0" /></li>
                </ul>
                <button type="submit">Edit</button>
            </form>
        </li>
    )
}

export default SheetEditor