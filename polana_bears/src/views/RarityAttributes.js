import React, { useState } from 'react'
import RarityAttributesControls from './RarityAttributesControls'
import RarityAttributesDisplay from './RarityAttributesDisplay'
import './rarityattributes.css'
import transparentbg from '../assets/img/Rarity/transparentbg.png'

import common1 from '../assets/img/Rarity/Backgrounds/common1.png'
import Night from '../assets/img/Rarity/Bear/nightbear.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { Button } from '@material-ui/core'


const RarityAttributes = (props) => {

    const [filteredOption, setFilterOption] = useState('Background')

    const filterChangeHandler = (selectedOption) => {
      setFilterOption(selectedOption)
    }

    const filteredData = props.data.filter(data => {
        return data.category === filteredOption
    })

    const [currentBG, setBG] = useState(common1)
    const [currentBear, setBear] = useState(Night)
    const [currentClothing, setClothing] = useState(transparentbg)
    const [currentEyes, setEyes] = useState(transparentbg)
    const [currentHat, setHat] = useState(transparentbg)
    const [currentMouth, setMouth] = useState(transparentbg)
    const [currentNecklace, setNecklace] = useState(transparentbg)
    const [currentWeapon, setWeapon] = useState(transparentbg)

    // const [currentBGRarity, setBGRarity] = useState(5)
    // const [currentBearRarity, setBearRarity] = useState(11)
    // const [currentClothingRarity, setClothingRarity] = useState('')
    // const [currentEyesRarity, setEyesRarity] = useState('')
    // const [currentHatRarity, setHatRarity] = useState('')
    // const [currentMouthRarity, setMouthRarity] = useState('')
    // const [currentNecklaceRarity, setNecklaceRarity] = useState('')
    // const [currentWeaponRarity, setWeaponRarity] = useState('')

    // const [currentResult, setResult] = useState('')


    const saveImageData = (imageData) => {
        if(filteredOption === 'Background') {
            setBG(imageData.target.src)
            // setBGRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Bear') {
            setBear(imageData.target.src)
            // setBearRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Clothing') {
            setClothing(imageData.target.src)
            // setClothingRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Eyes') {
            setEyes(imageData.target.src)
            // setEyesRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Hat') {
            setHat(imageData.target.src)
            // setHatRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)
        
        } if(filteredOption === 'Mouth') {
            setMouth(imageData.target.src)
            // setMouthRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Necklace') {
            setNecklace(imageData.target.src)
            // setNecklaceRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        }if(filteredOption === 'Weapons') {
            setWeapon(imageData.target.src)
            // setWeaponRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)
        }
    }

    // const generateRarityScore = () => {
    //     const totalScore = currentBGRarity + currentBearRarity + currentClothingRarity + 
    //     currentEyesRarity + currentHatRarity + currentMouthRarity + currentNecklaceRarity + currentWeaponRarity
        
    //     return (
    //         setResult(
    //             <p>The total score for your bear is {totalScore}. Congratualations</p>
    //         )
    //     )
    // }

    // const styling = {
    //     desktopCalculator: {
    //         width: '96%',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         textAlign: 'center',
    //         color: '#Fdeae1',
    //         margin: '50px auto 50px',
    //         paddingBottom: '30px',
    //         height: 'auto',
    //         borderRadius: '10px',
    //         backgroundColor: '#2f3339'
    //     },
    //     desktopCalContent: {
    //         width: '70%',
    //         margin: '0px auto 0px'
    //     },
    //     mobileCalculator: {
    //         width: '90%',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         textAlign: 'center',
    //         color: 'white',
    //         margin: '50px auto 50px',
    //         paddingBottom: '30px',
    //         height: 'auto',
    //         borderRadius: '10px',
    //         backgroundColor: '#2f3339',
    //     },
    //     mobileCalContent: {
    //         width: '85%',
    //         margin: '0px auto 0px'
    //     },
    //     button: {
    //         width: '125px',
    //         height: '35px',
    //         margin: '30px auto 0px',
    //         borderRadius: '5px',
    //         backgroundColor: 'white',
    //         cursor: 'pointer',
    //         fontWeight: 'bold'
    //     }
    // }

    return (
        <div>
            <div className='RAInstructions'>
                <p>Click on the images to equip it onto your bear!</p>
                <p>View other layers by using the menu below.</p>
            </div>
            <div className='RAContainer'>
                <div>
                    <img src={currentBG} className='bearImage' alt='bg'></img>
                    <img src={currentBear} className='bearImage' alt='bear'></img>
                    <img src={currentWeapon} className='bearImage' alt='weapon'></img>
                    <img src={currentClothing} className='bearImage' alt='clothing'></img>
                    <img src={currentEyes} className='bearImage' alt='eyes'></img>
                    <img src={currentHat} className='bearImage' alt='hat'></img>
                    <img src={currentMouth} className='bearImage' alt='mouth'></img>
                    <img src={currentNecklace} className='bearImage' alt='necklace'></img>
                </div>
                <div>
                    <RarityAttributesControls default={filteredOption} onChangeFilter={filterChangeHandler} />
                    <div className='RContainer'>
                        {filteredData.map((data) => (
                            <RarityAttributesDisplay onSaveImageData={saveImageData}
                            image={data.image}
                            description={data.description}
                            attribute={data.attribute}
                            css={data.css}
                            rarity={data.rarity}
                            key={data.id} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className='calculator' style={styling.mobileCalculator}>
                <h1 style={{marginTop: '40px'}}>Polana Calculator</h1>
                <div style={styling.mobileCalContent}>
                    <p>Done selecting the different attributes?</p>
                    <p>Click the button below <FontAwesomeIcon icon={faHandPointDown}></FontAwesomeIcon> to generate your Bear's total score <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></p>
                </div>
                <Button style={styling.button} onClick={generateRarityScore}>Generate</Button>
                <div style={{marginTop: '30px'}}>{currentResult}</div>
            </div> */}

            <div className='FaqContainer'>
                <h1 className='FaqTitle'>Rarity faq</h1>
                <div className='FaqContent'>
                    <h2>What are rankings?</h2>
                    <p>The Rank you see listed next to your Bear is how high it scores relative to the total score, 100.
                        A top ranking indicates a high overall score.
                    </p>
                </div>
                <div className='FaqContent'>
                    <h2>How are attribute scores calculated?</h2>
                    <p>Every attribute is given a rarity percentage  ( The higher the rarity percentage, the rarer the attribute ) ,
                        attribute scores are then calculated by multipling the rarity percentage by 100.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RarityAttributes