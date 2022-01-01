import React from 'react'
import RarityAttributes from './RarityAttributes'
import './rarity.css'
import MyFooter from '../components/Footers/MyFooter'
import RarityHeader from './RarityHeader'

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


import NightBear from '../assets/img/Rarity/Bear/nightbear.png'
import MetallicBear from '../assets/img/Rarity/Bear/metallicbear.png'
import YellowBear from '../assets/img/Rarity/Bear/yellowbear.png'
import WhiteBear from '../assets/img/Rarity/Bear/whitebear.png'
import RedBear from '../assets/img/Rarity/Bear/redbear.png'
import RainbowBear from '../assets/img/Rarity/Bear/rainbowbear.png'
import PurpleBear from '../assets/img/Rarity/Bear/purplebear.png'
import IridescentBear from '../assets/img/Rarity/Bear/iridescentbear.png'
import GreyBear from '../assets/img/Rarity/Bear/greybear.png'
import GreenBear from '../assets/img/Rarity/Bear/greenbear.png'
import BlueBear from '../assets/img/Rarity/Bear/bluebear.png'
import BrownBear from '../assets/img/Rarity/Bear/brownbear.png'


import CandyCane from '../assets/img/Rarity/Weapons/candycane.png'
import Spear from '../assets/img/Rarity/Weapons/spear.png'
import Sword from '../assets/img/Rarity/Weapons/sword.png'
import MagicStaff from '../assets/img/Rarity/Weapons/magicstaff.png'
import SpikedMace from '../assets/img/Rarity/Weapons/spikedmace.png'
import Trident from '../assets/img/Rarity/Weapons/trident.png'
import BattleAxe from '../assets/img/Rarity/Weapons/battleaxe.png'
import Crossbow from '../assets/img/Rarity/Weapons/crossbow.png'
import Gun from '../assets/img/Rarity/Weapons/gun.png'

import Vape from '../assets/img/Rarity/Mouth/vape.png'
import Cigar from '../assets/img/Rarity/Mouth/cigar.png'
import BubbleGum from '../assets/img/Rarity/Mouth/bubblegum.png'
import BitingAFish from '../assets/img/Rarity/Mouth/bitingafish.png'
import DiamondTeethGrills from '../assets/img/Rarity/Mouth/diamondteethgrills.png'

import Beret from '../assets/img/Rarity/Hat/beret.png'
import Bandana from '../assets/img/Rarity/Hat/bandana.png'
import CowBoy from '../assets/img/Rarity/Hat/cowboy.png'
import Santa from '../assets/img/Rarity/Hat/santa.png'
import Crown from '../assets/img/Rarity/Hat/crown.png'
import MilitaryHelmet from '../assets/img/Rarity/Hat/militaryhelmet.png'

import GreyEyes from '../assets/img/Rarity/Eyes/greyeyes.png'
import BlueEyes from '../assets/img/Rarity/Eyes/blueeyes.png'
import DiamondEyes from '../assets/img/Rarity/Eyes/diamondeyes.png'
import Monocle from '../assets/img/Rarity/Eyes/monocle.png'
import PirateEyePatch from '../assets/img/Rarity/Eyes/pirateeyepatch.png'
import YellowEyes from '../assets/img/Rarity/Eyes/yelloweyes.png'
import Sunglasses from '../assets/img/Rarity/Eyes/sunglasses.png'

import HoleShirt from '../assets/img/Rarity/Clothing/holeshirt.png'
import BlueLongSleeve from '../assets/img/Rarity/Clothing/bluelongsleeve.png'
import LongSleeve from '../assets/img/Rarity/Clothing/longsleeve.png'
import RedTShirt from '../assets/img/Rarity/Clothing/redtshirt.png'
import Singlet from '../assets/img/Rarity/Clothing/singlet.png'
import TShirt from '../assets/img/Rarity/Clothing/tshirt.png'
import WhiteSinglet from '../assets/img/Rarity/Clothing/whitesinglet.png'
import SantaOutfit from '../assets/img/Rarity/Clothing/santaoutfit.png'
import RoyalRobes from '../assets/img/Rarity/Clothing/royalrobes.png'
import KnightArmour from '../assets/img/Rarity/Clothing/knightarmour.png'

import SilverChain from '../assets/img/Rarity/Necklace/silverchain.png'
import FullPearlPendant from '../assets/img/Rarity/Necklace/fullpearlpendant.png'
import GoldChain from '../assets/img/Rarity/Necklace/goldchain.png'
import GunMetalChain from '../assets/img/Rarity/Necklace/gunmetalchain.png'
import ArrowHeadPendant from '../assets/img/Rarity/Necklace/arrowheadpendant.png'
import SkullPendant from '../assets/img/Rarity/Necklace/skullpendant.png'
import ToothPendant from '../assets/img/Rarity/Necklace/toothpendant.png'
import KeyPendant from '../assets/img/Rarity/Necklace/keypendant.png'
import RingPendant from '../assets/img/Rarity/Necklace/ringpendant.png'
import DiamondPendant from '../assets/img/Rarity/Necklace/diamondpendant.png'

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
        id: 'bear14',
        image: GreenBear,
        category: 'Bear',
        description: 'Green',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bear9',
        image: RedBear,
        category: 'Bear',
        description: 'Red',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bear6',
        image: WhiteBear,
        category: 'Bear',
        description: 'White',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bear5',
        image: YellowBear,
        category: 'Bear',
        description: 'Yellow',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bear11',
        image: PurpleBear,
        category: 'Bear',
        description: 'Purple',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'bear17',
        image: BlueBear,
        category: 'Bear',
        description: 'Blue',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'bear18',
        image: BrownBear,
        category: 'Bear',
        description: 'Brown',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'bear13',
        image: GreyBear,
        category: 'Bear',
        description: 'Grey',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'bear10',
        image: RainbowBear,
        category: 'Bear',
        description: 'Rainbow',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'bear4',
        image: MetallicBear,
        category: 'Bear',
        description: 'Metallic',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
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
        id: 'bear1',
        image: NightBear,
        category: 'Bear',
        description: 'Night',
        attribute: 'Legendary',
        rarity: '0.11',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'weapon2',
        image: Sword,
        category: 'Weapons',
        description: 'Sword',
        attribute: 'Common',
        rarity: '0.10',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'weapon3',
        image: Spear,
        category: 'Weapons',
        description: 'Arrowhead Spear',
        attribute: 'Common',
        rarity: '0.13',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'weapon6',
        image: SpikedMace,
        category: 'Weapons',
        description: 'Spiked Mace',
        attribute: 'Common',
        rarity: '0.13',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'weapon4',
        image: BattleAxe,
        category: 'Weapons',
        description: 'Battle Axe',
        attribute: 'Rare',
        rarity: '0.13',
        css: {backgroundColor: 'red'}
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
        id: 'weapon5',
        image: MagicStaff,
        category: 'Weapons',
        description: 'Star Wand',
        attribute: 'Epic',
        rarity: '0.13',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'weapon8',
        image: Crossbow,
        category: 'Weapons',
        description: 'Crossbow',
        attribute: 'Epic',
        rarity: '0.13',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'weapon9',
        image: Gun,
        category: 'Weapons',
        description: 'Gun',
        attribute: 'Epic',
        rarity: '0.13',
        css: {backgroundColor: 'purple'}
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
        id: 'mouth2',
        image: Cigar,
        category: 'Mouth',
        description: 'Cigar',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'mouth1',
        image: Vape,
        category: 'Mouth',
        description: 'Vape',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'mouth3',
        image: BubbleGum,
        category: 'Mouth',
        description: 'Bubble Gum',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'mouth5',
        image: DiamondTeethGrills,
        category: 'Mouth',
        description: 'Diamond Teeth Grills',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'mouth4',
        image: BitingAFish,
        category: 'Mouth',
        description: 'Bite-A-Fish',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'hat2',
        image: Bandana,
        category: 'Hat',
        description: 'Bandana',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'hat3',
        image: CowBoy,
        category: 'Hat',
        description: 'Cowboy',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'hat6',
        image: MilitaryHelmet,
        category: 'Hat',
        description: 'Military Helmet',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'hat1',
        image: Beret,
        category: 'Hat',
        description: 'Khaki Beret',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'hat4',
        image: Santa,
        category: 'Hat',
        description: 'Santa',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'hat5',
        image: Crown,
        category: 'Hat',
        description: 'Crown',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'eye2',
        image: BlueEyes,
        category: 'Eyes',
        description: 'Blue Eyes',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'eye6',
        image: YellowEyes,
        category: 'Eyes',
        description: 'Yellow Eyes',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'eye1',
        image: GreyEyes,
        category: 'Eyes',
        description: 'Grey Eyes',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'eye7',
        image: Sunglasses,
        category: 'Eyes',
        description: 'Sunglasses',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'eye4',
        image: Monocle,
        category: 'Eyes',
        description: 'Monocle',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'eye5',
        image: PirateEyePatch,
        category: 'Eyes',
        description: 'Pirate Eye Patch',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
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
        id: 'clothing2',
        image: WhiteSinglet,
        category: 'Clothing',
        description: 'White Singlet',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'clothing3',
        image: TShirt,
        category: 'Clothing',
        description: 'Black T-Shirt',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'clothing4',
        image: Singlet,
        category: 'Clothing',
        description: 'Black Singlet',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'clothing5',
        image: RedTShirt,
        category: 'Clothing',
        description: 'Red T-Shirt',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'clothing6',
        image: LongSleeve,
        category: 'Clothing',
        description: 'Black Long-sleeve',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'clothing7',
        image: BlueLongSleeve,
        category: 'Clothing',
        description: 'Blue Long-sleeve',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'clothing1',
        image: HoleShirt,
        category: 'Clothing',
        description: 'Tattered Shirt',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'clothing8',
        image: SantaOutfit,
        category: 'Clothing',
        description: 'Santa Claus Shirt',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'clothing9',
        image: RoyalRobes,
        category: 'Clothing',
        description: 'Royal Robes',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'clothing11',
        image: KnightArmour,
        category: 'Clothing',
        description: "Knight's Armour",
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'necklace3',
        image: GunMetalChain,
        category: 'Necklace',
        description: 'Gunmetal Chain',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'necklace1',
        image: SilverChain,
        category: 'Necklace',
        description: 'Silver Chain',
        attribute: 'Common',
        rarity: '0.27',
        css: {backgroundColor: 'grey'}
    },
    {
        id: 'necklace4',
        image: GoldChain,
        category: 'Necklace',
        description: 'Gold Chain',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'necklace2',
        image: FullPearlPendant,
        category: 'Necklace',
        description: 'Full Pearls Pendant',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'necklace10',
        image: ToothPendant,
        category: 'Necklace',
        description: 'Tooth Pendant',
        attribute: 'Rare',
        rarity: '0.27',
        css: {backgroundColor: 'red'}
    },
    {
        id: 'necklace5',
        image: ArrowHeadPendant,
        category: 'Necklace',
        description: 'Arrow Head',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'necklace8',
        image: KeyPendant,
        category: 'Necklace',
        description: 'Key Pendant',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'necklace9',
        image: RingPendant,
        category: 'Necklace',
        description: 'Ring Pendant',
        attribute: 'Epic',
        rarity: '0.27',
        css: {backgroundColor: 'purple'}
    },
    {
        id: 'necklace6',
        image: SkullPendant,
        category: 'Necklace',
        description: 'Skull Chain',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
    {
        id: 'necklace7',
        image: DiamondPendant,
        category: 'Necklace',
        description: 'Diamond Pendant',
        attribute: 'Legendary',
        rarity: '0.27',
        css: {backgroundColor: 'gold'}
    },
]

const Rarity = () => { 

    return (
        <div style={{backgroundColor: '#030c25'}}>
            <RarityHeader />
            <div className='Introduction'>
                <div className='TopBorder'></div>
                <h1 className='Title'>Polana Rarity</h1>
                <p className='Description'>We have a total of 55 different attributes that a Polana Bear could have, with each individual attribute displaying it's own rarity
                </p>
            </div>
            <div>
                <p className='Direction'>Check out your Bear's rarity down below<FontAwesomeIcon icon={faHandPointDown}></FontAwesomeIcon></p> 

                <RarityAttributes data={imageData}/>
            </div>
            <MyFooter />
        </div>
    )
}

export default Rarity