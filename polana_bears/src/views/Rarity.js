import React from 'react'
import RarityAttributes from './RarityAttributes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"

import bg1 from '../assets/img/Rarity/Backgrounds/bg1.png'
import bg2 from '../assets/img/Rarity/Backgrounds/bg2.png'
import bg3 from '../assets/img/Rarity/Backgrounds/bg3.png'
import bg4 from '../assets/img/Rarity/Backgrounds/bg4.png'
import bg5 from '../assets/img/Rarity/Backgrounds/bg5.png'
import bg6 from '../assets/img/Rarity/Backgrounds/bg6.png'
import bg7 from '../assets/img/Rarity/Backgrounds/bg7.png'
import bg8 from '../assets/img/Rarity/Backgrounds/bg8.png'
import Solana from '../assets/img/Rarity/Backgrounds/solana.png'
import Rare2 from '../assets/img/Rarity/Backgrounds/rare2.png'
import GOTWinterFell from '../assets/img/Rarity/Backgrounds/GoTWinterfell.png'
import CPFishingVillage from '../assets/img/Rarity/Backgrounds/clubpenguinfishingvillage.png'
import Epic2 from '../assets/img/Rarity/Backgrounds/epic2.png'
import Epic3 from '../assets/img/Rarity/Backgrounds/epic3.png'
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
        id: 'bg1',
        image: bg1,
        category: 'Background',
        description: 'Background-1',
        attribute: 'Uncommon',
        rarity: '0.1',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bg2',
        image: bg2,
        category: 'Background',
        description: 'Background-2',
        attribute: 'Uncommon',
        rarity: '0.1',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bg3',
        image: bg3,
        category: 'Background',
        description: 'Background-3',
        attribute: 'Rare',
        rarity: '0.15',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'bg4',
        image: bg4,
        category: 'Background',
        description: 'Background-4',
        attribute: 'Rare',
        rarity: '0.17',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'bg5',
        image: bg5,
        category: 'Background',
        description: 'Background-5',
        attribute: 'Epic',
        rarity: '0.23',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'bg6',
        image: bg6,
        category: 'Background',
        description: 'Background-6',
        attribute: 'Epic',
        rarity: '0.26',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'bg7',
        image: bg7,
        category: 'Background',
        description: 'Background-7',
        attribute: 'Legendary',
        rarity: '0.35',
        css: {backgroundColor: 'gold'}
    },
    {
        ig: 'bg8',
        image: bg8,
        category: 'Background'
    },
    {
        ig: 'bg9',
        image: CPFishingVillage,
        category: 'Background'
    },
    {
        ig: 'bg10',
        image: Epic2,
        category: 'Background'
    },
    {
        ig: 'bg11',
        image: Epic3,
        category: 'Background'
    },
    {
        ig: 'bg12',
        image: Solana,
        category: 'Background'
    },
    {
        ig: 'bg13',
        image: GOTWinterFell,
        category: 'Background'
    },
    {
        ig: 'bg14',
        image: Rare2,
        category: 'Background'
    },
    {
        ig: 'bg15',
        image: Common1,
        category: 'Background'
    },
    {
        ig: 'bg16',
        image: Common2,
        category: 'Background'
    },
    {
        ig: 'bg17',
        image: Common3,
        category: 'Background'
    },
    {
        ig: 'bg18',
        image: Common4,
        category: 'Background'
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
        category: 'Bear'
    },
    {
        id: 'bear5',
        image: YellowBear,
        category: 'Bear'
    },
    {
        id: 'bear6',
        image: WhiteBear,
        category: 'Bear'
    },
    {
        id: 'bear7',
        image: SapphireBear,
        category: 'Bear'
    },
    {
        id: 'bear8',
        image: RubyBear,
        category: 'Bear'
    },
    {
        id: 'bear9',
        image: RedBear,
        category: 'Bear'
    },
    {
        id: 'bear10',
        image: RainbowBear,
        category: 'Bear'
    },
    {
        id: 'bear11',
        image: PurpleBear,
        category: 'Bear'
    },
    {
        id: 'bear12',
        image: IridescentBear,
        category: 'Bear'
    },
    {
        id: 'bear13',
        image: GreyBear,
        category: 'Bear'
    },
    {
        id: 'bear14',
        image: GreenBear,
        category: 'Bear'
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
        id: 'mouth1',
        image: Vape,
        category: 'Mouth',
    },
    {
        id: 'mouth2',
        image: Cigar,
        category: 'Mouth'
    },
    {
        id: 'mouth3',
        image: BubbleGum,
        category: 'Mouth'
    },
    {
        id: 'hat1',
        image: Beret,
        category: 'Hat',
    },
    {
        id: 'hat2',
        image: Bandana,
        category: 'Hat',
    },
    {
        id: 'hat3',
        image: CowBoy,
        category: 'Hat',
    },
    {
        id: 'hat4',
        image: Santa,
        category: 'Hat',
    },
    {
        id: 'eye1',
        image: GreyEyes,
        category: 'Eyes',
    },
    {
        id: 'eye2',
        image: BlueEyes,
        category: 'Eyes',
    },
    {
        id: 'eye3',
        image: DiamondEyes,
        category: 'Eyes',
    },
    {
        id: 'eye4',
        image: Monocle,
        category: 'Eyes',
    },
    {
        id: 'eye5',
        image: PirateEyePatch,
        category: 'Eyes',
    },
    {
        id: 'eye6',
        image: YellowEyes,
        category: 'Eyes',
    },
    {
        id: 'clothing1',
        image: HoleShirt,
        category: 'Clothing',
    },
    {
        id: 'clothing2',
        image: WhiteSinglet,
        category: 'Clothing',
    },
    {
        id: 'clothing3',
        image: TShirt,
        category: 'Clothing',
    },
    {
        id: 'clothing4',
        image: Singlet,
        category: 'Clothing',
    },
    {
        id: 'clothing5',
        image: RedTShirt,
        category: 'Clothing',
    },
    {
        id: 'clothing6',
        image: LongSleeve,
        category: 'Clothing',
    },
    {
        id: 'clothing7',
        image: BlueLongSleeve,
        category: 'Clothing',
    },
    {
        id: 'necklace1',
        image: SilverChain,
        category: 'Necklace'
    },
    {
        id: 'necklace2',
        image: FullPearlPendant,
        category: 'Necklace'
    },
    {
        id: 'necklace3',
        image: GunMetalChain,
        category: 'Necklace'
    },
    {
        id: 'necklace4',
        image: GoldChain,
        category: 'Necklace'
    },
]

const styling = {
    introduction: {
        width: '80%',
        height: '300px',
        maxWidth: '1400px',
        margin: '150px auto 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        border: 'solid 3px black',
        boxShadow: 'rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px',
    },
    title: {
        fontSize: '48px',
        margin: '40px auto 35px'
    },
    description: {
        fontSize: '18px',
        width: '50%',
        margin: '0px auto 0px'
    },
    topBorder: {
        height: '5px',
        width: '80%',
        backgroundColor: '#b5cae1',
        margin: '0px auto 0px'
    },
    direction: {
        color: 'white',
        width: '80%',
        margin: '130px auto 190px',
        fontSize: '24px',
        textAlign: 'center'
    },
    animateBG: {
        height: '420px',
        width: '1920px'
    }
}

const Rarity = () => {
    return (
        <div>
            <div style={styling.introduction}>
                <div style={styling.topBorder}></div>
                <h1 style={styling.title}>Polana Rarity</h1>
                <p style={styling.description}>We have a total of 55 different attributes that a Polana Bear could have, with each individual attribute displaying it's own rarity
                </p>
            </div>
            <div>
                <p style={styling.direction}>Check out your Bear's rarity down below<FontAwesomeIcon icon={faHandPointDown}></FontAwesomeIcon></p> 
                <RarityAttributes data={imageData}/>
            </div>
        </div>

    )
}

export default Rarity