import React from 'react'
import './rarityattributescontrols.css'

const RarityAttributesControls = (props) => {

    const card = {
        attribute: {
            display: 'inline-block',
            padding: '0.35em 0.65em',
            textAlign: 'center',
            borderRadius: '0.25rem',
            fontWeight: '700',
        },
        mobileAttribute: {
            display: 'inline-block',
            padding: '0.20em 0.40em',
            textAlign: 'center',
            borderRadius: '0.25rem',
            fontWeight: '700',
        }
    }

    const optionChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };


    return (
        <div className='Information'>
            <select onChange={optionChangeHandler} className='Select'>
                <option>Background</option>
                <option>Bear</option>
                <option>Clothing</option>
                <option>Eyes</option>
                <option>Hat</option>
                <option>Mouth</option>
                <option>Necklace</option>
                <option>Weapons</option>
            </select>
            <div className='Attribute'>
                <span style={{...card.mobileAttribute, backgroundColor:'grey'}}>Common</span>
                <span style={{...card.mobileAttribute, backgroundColor:'red'}}>Rare</span>
                <span style={{...card.mobileAttribute, backgroundColor:'purple'}}>Epic</span>
                <span style={{...card.mobileAttribute, backgroundColor:'gold'}}>Legendary</span>
            </div>
        </div>
    )


}

export default RarityAttributesControls