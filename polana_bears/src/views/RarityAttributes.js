import React, { useState } from 'react'
import RarityAttributesControls from './RarityAttributesControls'
import RarityAttributesDisplay from './RarityAttributesDisplay'
import './rarityattributes.css'

import bg1 from '../assets/img/Rarity/Backgrounds/bg1.png'
import Night from '../assets/img/Rarity/Bear/night.png'
import CandyCane from '../assets/img/Rarity/Weapons/candycane.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@material-ui/core'


const styling = {
    bearImage: {
        position: 'absolute',
        width: '610px',
        height: '610px'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        marginBottom: '100px',
    },
    rarityContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        textAlign: 'center',
        overflowY: 'scroll',
        height: '525px',
        width: '100%',
        gridGap: '30px',
        marginTop: '25px',
    },
    calculator: {
        width: '96%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: '#Fdeae1',
        margin: '50px auto 50px',
        paddingBottom: '30px',
        height: 'auto',
        borderRadius: '10px',
        backgroundColor: '#2f3339'
    },
    faqContainer: {
        width: '75%',
        color: 'white',
        margin: '15px auto 0px',
        lineHeight: '30px',
        borderTop: 'dotted 3px white',
    },
    attributeInfo: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
        justifyContent: 'space-between',
        borderBottom: 'dotted 3px black',
    },
    button: {
        width: '125px',
        height: '35px',
        margin: '30px auto 0px',
        borderRadius: '5px',
        backgroundColor: '#Fdeae1',
        cursor: 'pointer'
    }
}




const RarityAttributes = (props) => {

    const [filteredOption, setFilterOption] = useState('Background')

    const filterChangeHandler = (selectedOption) => {
      setFilterOption(selectedOption)
    }

    const filteredData = props.data.filter(data => {
        return data.category === filteredOption
    })

    const [currentBG, setBG] = useState(bg1)
    const [currentBear, setBear] = useState(Night)
    const [currentClothing, setClothing] = useState('')
    const [currentEyes, setEyes] = useState('')
    const [currentHat, setHat] = useState('')
    const [currentMouth, setMouth] = useState('')
    const [currentNecklace, setNecklace] = useState('')
    const [currentWeapon, setWeapon] = useState(CandyCane)

    const [currentBGRarity, setBGRarity] = useState('')
    const [currentBearRarity, setBearRarity] = useState('')
    const [currentClothingRarity, setClothingRarity] = useState('')
    const [currentEyesRarity, setEyesRarity] = useState('')
    const [currentHatRarity, setHatRarity] = useState('')
    const [currentMouthRarity, setMouthRarity] = useState('')
    const [currentNecklaceRarity, setNecklaceRarity] = useState('')
    const [currentWeaponRarity, setWeaponRarity] = useState('')

    const [currentResult, setResult] = useState('')


    const saveImageData = (imageData) => {
        if(filteredOption === 'Background') {
            setBG(imageData.target.src)
            setBGRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Bear') {
            setBear(imageData.target.src)
            setBearRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Clothing') {
            setClothing(imageData.target.src)
            setClothingRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Eyes') {
            setEyes(imageData.target.src)
            setEyesRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Hat') {
            setHat(imageData.target.src)
            setHatRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)
        
        } if(filteredOption === 'Mouth') {
            setMouth(imageData.target.src)
            setMouthRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        } if(filteredOption === 'Necklace') {
            setNecklace(imageData.target.src)
            setNecklaceRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)

        }if(filteredOption === 'Weapons') {
            setWeapon(imageData.target.src)
            setWeaponRarity((imageData.target.nextSibling.nextSibling.innerText) * 100)
        }
    }

    const generateRarityScore = () => {
        const totalScore = currentBGRarity + currentBearRarity + currentClothingRarity + 
        currentEyesRarity + currentHatRarity + currentMouthRarity + currentNecklaceRarity + currentWeaponRarity
        
        return (
            setResult(
                <p>The total score for your bear is {totalScore}. Congratualations</p>
            )
        )
    }

    
    return (
        <div>
            <div className='container' style={styling.container}>
                <div className='bearImage' style={{paddingLeft: '30px'}}>
                    <img src={currentBG} style={styling.bearImage} alt='bg'></img>
                    <img src={currentBear} style={styling.bearImage} alt='bear'></img>
                    <img src={currentWeapon} style={styling.bearImage} alt='weapon'></img>
                    <img src={currentClothing} style={styling.bearImage} alt='clothing'></img>
                    <img src={currentEyes} style={styling.bearImage} alt='eyes'></img>
                    <img src={currentHat} style={styling.bearImage} alt='hat'></img>
                    <img src={currentMouth} style={styling.bearImage} alt='mouth'></img>
                    <img src={currentNecklace} style={styling.bearImage} alt='necklace'></img>
                </div>
                <div className='rarityContainer' style={{paddingRight: '30px'}}>
                    <RarityAttributesControls default={filteredOption} onChangeFilter={filterChangeHandler} />
                    <div style={styling.rarityContainer}>
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
            <div className='calculator' style={styling.calculator}>
                <h1>Polana Calculator</h1>
                <p>Done selecting the attributes that your Bear was born with?</p>
                <p>Click the button below <FontAwesomeIcon icon={faHandPointDown}></FontAwesomeIcon> to generate your Bear's total score <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></p>
                <Button style={styling.button} onClick={generateRarityScore}>Generate</Button>
                <div style={{marginTop: '20px'}}>{currentResult}</div>
            </div>

            <div style={styling.faqContainer}>
                <h1 style={{textAlign: 'center'}}>Rarity faq</h1>
                <div style={{marginTop: '30px'}}>
                    <h2>What are rankings?</h2>
                    <p>The Rank you see listed next to your Bear is how high it scores relative to the total score, 100.
                        A top ranking indicates a high overall score.
                    </p>
                </div>
                <div style={{marginTop: '30px'}}>
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