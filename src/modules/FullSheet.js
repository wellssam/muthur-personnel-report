const FullSheet = ({ characterIndex, miniClick, editClick, characterDetails }) => {
    return (
        <li className="fullSheet">
            <ul>
                <li>Name: {characterDetails.name}</li>
                <li>Player Name: {characterDetails.playerName} </li>
                <li>Career: {characterDetails.career}</li>
                <li>Status: {characterDetails.status}</li>
                <li>Appearance: {characterDetails.appearance}</li>
                <li>Agenda: {characterDetails.agenda}</li>
                <li>Talents: {characterDetails.talents}</li>
                <li>Relationships
                <ul>
                        <li>Buddy: {characterDetails.buddy}</li>
                        <li>Rival: {characterDetails.rival}</li>
                    </ul>
                </li>
                <li>Status Scores
                <ul>
                        <li>Stress: {characterDetails.stress}</li>
                        <li>Health: {characterDetails.health}</li>
                        <li>Experience: {characterDetails.experience}</li>
                        <li>Story: {characterDetails.story}</li>
                        <li>Radiation: {characterDetails.radiation}</li>
                        <li>Critical Injuries: {characterDetails.critInj}</li>
                    </ul>
                </li>
                <li><p>Conditions:</p>
                    <ul>
                        <li>Starving: {characterDetails.starving ? `yes` : `no`}</li>
                        <li>Starving: {characterDetails.dehydrated ? `yes` : `no`}</li>
                        <li>Starving: {characterDetails.exhausted ? `yes` : `no`}</li>
                        <li>Starving: {characterDetails.freezing ? `yes` : `no`}</li>
                    </ul>
                </li>
                <li>
                    <p>Attributes:</p>
                    <ul>
                        <li>Strength: {characterDetails.strength}</li>
                        <li>Wits: {characterDetails.wits}</li>
                        <li>Empathy: {characterDetails.empathy}</li>
                        <li>Agility: {characterDetails.agility}</li>
                    </ul>
                </li>
                <li>
                    <p>Skills:</p>
                    <ul>
                        <li>
                            <ul>
                                <li>Strength Skills</li>
                                <li>Heavy Machinery: {characterDetails.heavyMachinery}</li>
                                <li>Close Combat: {characterDetails.closeCombat}</li>
                                <li>Stamina: {characterDetails.stamina}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Wits Skills</li>
                                <li>Observation: {characterDetails.observation}</li>
                                <li>Survival: {characterDetails.survival}</li>
                                <li>ComTech: {characterDetails.comtech}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Empathy Skills</li>
                                <li>Medical Aid: {characterDetails.medicalAid}</li>
                                <li>Manipulation: {characterDetails.manipulation}</li>
                                <li>Command: {characterDetails.command}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Agility Skills</li>
                                <li>Ranged Combat: {characterDetails.rangedCombat}</li>
                                <li>Mobility: {characterDetails.mobility}</li>
                                <li>Piloting: {characterDetails.piloting}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            Inventory:
                    </li>
                        <li>Armor: {characterDetails.armor}</li>
                        <li>Weapons: {characterDetails.weapons}</li>
                        <li>Gear: {characterDetails.gear}</li>
                        <li>Tiny Items: {characterDetails.tinyItems}</li>
                        <li>Signature Item: {characterDetails.signatureItem}</li>
                        <li>
                            <ul>
                                <li>Consummables:</li>
                                <li>Air: {characterDetails.air}</li>
                                <li>Food: {characterDetails.food}</li>
                                <li>Power: {characterDetails.power}</li>
                                <li>Water: {characterDetails.water}</li>
                            </ul>
                        </li>
                        <li>Encumbrance: {characterDetails.encumbrance}</li>
                    </ul>
                </li>

                <li>
                    <button onClick={miniClick}>Minimize</button>
                    <button onClick={() => {
                        editClick(characterIndex)
                    }}>Edit</button>
                </li>
            </ul>
        </li>
    )
}



export default FullSheet




