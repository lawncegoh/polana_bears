import React, { useEffect, useState } from 'react'
import RarityAttributes from './RarityAttributes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"

import StarryNight from '../assets/img/Rarity/Backgrounds/starrynight.png'
import Solana from '../assets/img/Rarity/Backgrounds/solana.png'
import Epic2 from '../assets/img/Rarity/Backgrounds/epic_2.png'
import GOTWinterFell from '../assets/img/Rarity/Backgrounds/GoTWinterfell.png'
import CPFishingVillage from '../assets/img/Rarity/Backgrounds/clubpenguinfishingvillage.png'
import rare2 from '../assets/img/Rarity/Backgrounds/rare_2.png'
import rare3 from '../assets/img/Rarity/Backgrounds/rare_3.png'
import Common1 from '../assets/img/Rarity/Backgrounds/common1.png'
import Common2 from '../assets/img/Rarity/Backgrounds/common2.png'
import Common3 from '../assets/img/Rarity/Backgrounds/common3.png'
import Common4 from '../assets/img/Rarity/Backgrounds/common4.png'

import EmeraldBear from '../assets/img/Rarity/Bear/emerald.png'
import GoldBear from '../assets/img/Rarity/Bear/gold.png'
import NightBear from '../assets/img/Rarity/Bear/night.png'
import MetallicBear from '../assets/img/Rarity/Bear/metallic.png'
import YellowBear from '../assets/img/Rarity/Bear/yellow.png'
import WhiteBear from '../assets/img/Rarity/Bear/white.png'
import SapphireBear from '../assets/img/Rarity/Bear/sapphire.png'
import RubyBear from '../assets/img/Rarity/Bear/ruby.png'
import RedBear from '../assets/img/Rarity/Bear/red.png'
import RainbowBear from '../assets/img/Rarity/Bear/rainbow.png'
import PurpleBear from '../assets/img/Rarity/Bear/purple.png'
import IridescentBear from '../assets/img/Rarity/Bear/iridescent.png'
import GreyBear from '../assets/img/Rarity/Bear/grey.png'
import GreenBear from '../assets/img/Rarity/Bear/green.png'


import CandyCane from '../assets/img/Rarity/Weapons/candycane.png'
import Spear from '../assets/img/Rarity/Weapons/spear.png'
import Sword from '../assets/img/Rarity/Weapons/sword.png'
import MagicStaff from '../assets/img/Rarity/Weapons/magicstaff.png'
import SpikedMace from '../assets/img/Rarity/Weapons/spikedmace.png'
import Trident from '../assets/img/Rarity/Weapons/trident.png'
import BattleAxe from '../assets/img/Rarity/Weapons/battleaxe.png'

import Vape from '../assets/img/Rarity/Mouth/vape.png'
import Cigar from '../assets/img/Rarity/Mouth/cigar.png'
import BubbleGum from '../assets/img/Rarity/Mouth/bubblegum.png'

import Beret from '../assets/img/Rarity/Hat/beret.png'
import Bandana from '../assets/img/Rarity/Hat/bandana.png'
import CowBoy from '../assets/img/Rarity/Hat/cowboy.png'
import Santa from '../assets/img/Rarity/Hat/santa.png'

import GreyEyes from '../assets/img/Rarity/Eyes/greyeyes.png'
import BlueEyes from '../assets/img/Rarity/Eyes/blueeyes.png'
import DiamondEyes from '../assets/img/Rarity/Eyes/diamondeyes.png'
import Monocle from '../assets/img/Rarity/Eyes/monocle.png'
import PirateEyePatch from '../assets/img/Rarity/Eyes/pirateeyepatch.png'
import YellowEyes from '../assets/img/Rarity/Eyes/yelloweyes.png'

import HoleShirt from '../assets/img/Rarity/Clothing/holeshirt.png'
import BlueLongSleeve from '../assets/img/Rarity/Clothing/bluelongsleeve.png'
import LongSleeve from '../assets/img/Rarity/Clothing/longsleeve.png'
import RedTShirt from '../assets/img/Rarity/Clothing/redtshirt.png'
import Singlet from '../assets/img/Rarity/Clothing/singlet.png'
import TShirt from '../assets/img/Rarity/Clothing/tshirt.png'
import WhiteSinglet from '../assets/img/Rarity/Clothing/whitesinglet.png'

import SilverChain from '../assets/img/Rarity/Necklace/silverchain.png'
import FullPearlPendant from '../assets/img/Rarity/Necklace/fullpearlpendant.png'
import GoldChain from '../assets/img/Rarity/Necklace/goldchain.png'
import GunMetalChain from '../assets/img/Rarity/Necklace/gunmetalchain.png'

const imageData = [
    {
        ig: 'bg1',
        image: Common1,
        description: 'Black Sand',
        category: 'Background',
        attribute: 'Common',
        rarity: '0.05',
        css: {backgroundColor: 'grey'}
    },
    {
        ig: 'bg2',
        image: Common2,
        description: 'Snow',
        category: 'Background',
        attribute: 'Common',
        rarity: '0.03',
        css: {backgroundColor: 'grey'}
    },
    {
        ig: 'bg3',
        image: Common3,
        description: 'Pastel Jesmonite',
        category: 'Background',
        attribute: 'Common',
        rarity: '0.01',
        css: {backgroundColor: 'grey'}
    },
    {
        ig: 'bg4',
        image: Common4,
        description: 'Passion',
        category: 'Background',
        attribute: 'Common',
        rarity: '0.06',
        css: {backgroundColor: 'grey'}
    },
    {
        ig: 'bg5',
        image: CPFishingVillage,
        description: 'CP Fishing Village',
        category: 'Background',
        attribute: 'Rare',
        rarity: '0.10',
        css: {backgroundColor: 'red'}
    },
    {
        ig: 'bg6',
        image: rare2,
        description: 'Aurora Matrix',
        category: 'Background',
        attribute: 'Rare',
        rarity: '0.06',
        css: {backgroundColor: 'red'}
    },
    {
        ig: 'bg7',
        image: rare3,
        description: 'Snowflake Punch',
        category: 'Background',
        attribute: 'Rare',
        rarity: '0.06',
        css: {backgroundColor: 'red'}
    },
    {
        ig: 'bg8',
        image: GOTWinterFell,
        description: 'Winterfell',
        category: 'Background',
        attribute: 'Epic',
        rarity: '0.06',
        css: {backgroundColor: 'purple'}
    },
    {
        ig: 'bg9',
        image: Epic2,
        description: 'Flames',
        category: 'Background',
        attribute: 'Epic',
        rarity: '0.06',
        css: {backgroundColor: 'purple'}
    },
    {
        ig: 'bg10',
        image: Solana,
        description: 'Solana',
        category: 'Background',
        attribute: 'Legendary',
        rarity: '0.06',
        css: {backgroundColor: 'yellow'}
    },
    {
        ig: 'bg11',
        image: StarryNight,
        description: 'Starry Night Matrix',
        category: 'Background',
        attribute: 'Legendary',
        rarity: '0.06',
        css: {backgroundColor: 'yellow'}
    },
    {
        id: 'bear1',
        image: NightBear,
        category: 'Bear',
        description: 'Night',
        attribute: 'Rare',
        rarity: '0.11',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'bear2',
        image: GoldBear,
        category: 'Bear',
        description: 'Gold',
        attribute: 'Epic',
        rarity: '0.17',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'bear3',
        image: EmeraldBear,
        category: 'Bear',
        description: 'Emerald',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear4',
        image: MetallicBear,
        category: 'Bear',
        description: 'Metallic',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear5',
        image: YellowBear,
        category: 'Bear',
        description: 'Yellow',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear6',
        image: WhiteBear,
        category: 'Bear',
        description: 'White',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear7',
        image: SapphireBear,
        category: 'Bear',
        description: 'Sapphire',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear8',
        image: RubyBear,
        category: 'Bear',
        description: 'Ruby',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear9',
        image: RedBear,
        category: 'Bear',
        description: 'Red',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear10',
        image: RainbowBear,
        category: 'Bear',
        description: 'Rainbow',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear11',
        image: PurpleBear,
        category: 'Bear',
        description: 'Purple',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear12',
        image: IridescentBear,
        category: 'Bear',
        description: 'Iridescent',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear13',
        image: GreyBear,
        category: 'Bear',
        description: 'Grey',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'bear14',
        image: GreenBear,
        category: 'Bear',
        description: 'Green',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'weapon1',
        image: CandyCane,
        category: 'Weapons',
        description: 'Candy Cane',
        attribute: 'Rare',
        rarity: '0.08',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'weapon2',
        image: Sword,
        category: 'Weapons',
        description: 'Sword',
        attribute: 'Epic',
        rarity: '0.10',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'weapon3',
        image: Spear,
        category: 'Weapons',
        description: 'Spear',
        attribute: 'Legendary',
        rarity: '0.13',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'weapon4',
        image: BattleAxe,
        category: 'Weapons',
        description: 'Battle Axe',
        attribute: 'Legendary',
        rarity: '0.13',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'weapon5',
        image: MagicStaff,
        category: 'Weapons',
        description: 'Magic Staff',
        attribute: 'Legendary',
        rarity: '0.13',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'weapon6',
        image: SpikedMace,
        category: 'Weapons',
        description: 'Spiked Mace',
        attribute: 'Legendary',
        rarity: '0.13',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'weapon7',
        image: Trident,
        category: 'Weapons',
        description: 'Trident',
        attribute: 'Legendary',
        rarity: '0.13',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'mouth1',
        image: Vape,
        category: 'Mouth',
        description: 'Vape',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'mouth2',
        image: Cigar,
        category: 'Mouth',
        description: 'Cigar',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'mouth3',
        image: BubbleGum,
        category: 'Mouth',
        description: 'Bubble Gum',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'hat1',
        image: Beret,
        category: 'Hat',
        description: 'Beret',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'hat2',
        image: Bandana,
        category: 'Hat',
        description: 'Bandana',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'hat3',
        image: CowBoy,
        category: 'Hat',
        description: 'Cowboy',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'hat4',
        image: Santa,
        category: 'Hat',
        description: 'Santa',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye1',
        image: GreyEyes,
        category: 'Eyes',
        description: 'Grey Eyes',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye2',
        image: BlueEyes,
        category: 'Eyes',
        description: 'Blue Eyes',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye3',
        image: DiamondEyes,
        category: 'Eyes',
        description: 'Diamond Eyes',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye4',
        image: Monocle,
        category: 'Eyes',
        description: 'Monocle',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye5',
        image: PirateEyePatch,
        category: 'Eyes',
        description: 'Pirate Eye Patch',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye6',
        image: YellowEyes,
        category: 'Eyes',
        description: 'Yellow Eyes',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing1',
        image: HoleShirt,
        category: 'Clothing',
        description: 'Hole Shirt',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing2',
        image: WhiteSinglet,
        category: 'Clothing',
        description: 'White Singlet',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing3',
        image: TShirt,
        category: 'Clothing',
        description: 'T-Shirt',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing4',
        image: Singlet,
        category: 'Clothing',
        description: 'Singlet',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing5',
        image: RedTShirt,
        category: 'Clothing',
        description: 'Red T-Shirt',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing6',
        image: LongSleeve,
        category: 'Clothing',
        description: 'Long Sleeve',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing7',
        image: BlueLongSleeve,
        category: 'Clothing',
        description: 'Blue Long Sleeve',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'necklace1',
        image: SilverChain,
        category: 'Necklace',
        description: 'Silver Chain',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'necklace2',
        image: FullPearlPendant,
        category: 'Necklace',
        description: 'Full Pearl Pendant',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'necklace3',
        image: GunMetalChain,
        category: 'Necklace',
        description: 'Gun Metal Chain',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'necklace4',
        image: GoldChain,
        category: 'Necklace',
        description: 'Gold Chain',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
]

const styling = {
    desktopIntroduction: {
        width: '80%',
        height: '300px',
        margin: '150px auto 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        border: 'solid 3px black',
        boxShadow: 'rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px',
    },
    desktopTitle: {
        fontSize: '48px',
        margin: '40px auto 35px'
    },
    desktopDescription: {
        fontSize: '18px',
        width: '50%',
        margin: '0px auto 0px'
    },
    desktopTopBorder: {
        height: '5px',
        width: '80%',
        backgroundColor: '#b5cae1',
        margin: '0px auto 0px'
    },
    desktopDirection: {
        color: 'white',
        width: '80%',
        margin: '150px auto 200px',
        fontSize: '24px',
        textAlign: 'center'
    },
    mobileIntroduction: {
        width: '90%',
        height: 'auto',
        margin: '150px auto 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        border: 'solid 3px black',
        boxShadow: 'rgba(255,255,255, 0.3) 5px 5px, rgba(255,255,255, 0.2) 10px 10px',
    },
    mobileTitle: {
        fontSize: '36px',
        margin: '0px auto 35px'
    },
    mobileDescription: {
        width: '80%',
        margin: '0px auto 30px',
        fontSize: '16px'
    },
    mobileTopBorder: {
        height: '5px',
        width: '80%',
        backgroundColor: '#b5cae1',
        margin: '35px auto 30px'
    },
    mobileDirection: {
        color: 'white',
        width: '80%',
        margin: '130px auto 500px',
        fontSize: '24px',
        textAlign: 'center'
    },
}



const Rarity = () => {

    
    const[state, setState] = useState({
        mobileView: false,
    })

    const { mobileView } = state

    useEffect(() => {
        const resizeHandler = () => {
            return window.innerWidth < 600
            ? setState((prevState) => ({...prevState, mobileView: true}))
            : setState((prevState) => ({...prevState, mobileView: false}))
        }

        resizeHandler()
        window.addEventListener('resize', () => resizeHandler())

        return () => {
            window.removeEventListener('reisze', () => resizeHandler())
        }
    }, [])

    const displayDesktop = () => {
        return (
            <div>
                <div style={styling.desktopIntroduction}>
                    <div style={styling.desktopTopBorder}></div>
                    <h1 style={styling.desktopTitle}>Polana Rarity</h1>
                    <p style={styling.desktopDescription}>We have a total of 55 different attributes that a Polana Bear could have, with each individual attribute displaying it's own rarity
                    </p>
                </div>
                <div>
                    <p style={styling.desktopDirection}>Check out your Bear's rarity down below<FontAwesomeIcon icon={faHandPointDown}></FontAwesomeIcon></p> 

                    <RarityAttributes data={imageData}/>
                </div>
            </div>
        )
    }
    
    const displayMobile = () => {
        return (
            <div>
                <div style={styling.mobileIntroduction}>
                    <div style={styling.mobileTopBorder}></div>
                    <h1 style={styling.mobileTitle}>Polana Rarity</h1>
                    <p style={styling.mobileDescription}>We have a total of 55 different attributes that a Polana Bear could have, with each individual attribute displaying it's own rarity
                    </p>
                </div>
                <div>
                    <p style={styling.mobileDirection}>Check out your Bear's rarity down below<FontAwesomeIcon icon={faHandPointDown}></FontAwesomeIcon></p> 

                    <RarityAttributes data={imageData}/>
                </div>
            </div>
        )
    }

    return (
        <div>{mobileView ? displayMobile() : displayDesktop()}</div>
    )

}

export default Rarity