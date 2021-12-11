import React from 'react'

const RarityAttributesControls = (props) => {

    const styling = {
        information: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        attribute: {
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        select: {
            width: '35%',
            height: '60px',
            paddingLeft: '15px',
            borderRadius: '5px'
        }
    }

    const card = {
        attribute: {
            display: 'inline-block',
            padding: '0.35em 0.65em',
            textAlign: 'center',
            borderRadius: '0.25rem',
            fontWeight: '700',
        }
    }

    const optionChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div style={styling.information}>
            <select onChange={optionChangeHandler} style={styling.select}>
                <option>Background</option>
                <option>Bear</option>
                <option>Clothing</option>
                <option>Eyes</option>
                <option>Hat</option>
                <option>Mouth</option>
                <option>Necklace</option>
                <option>Weapons</option>
            </select>
            <div style={styling.attribute}>
                <span style={{...card.attribute, backgroundColor:'grey'}}>Common</span>
                <span style={{...card.attribute, backgroundColor: 'red'}}>Rare</span>
                <span style={{...card.attribute, backgroundColor: 'purple'}}>Epic</span>
                <span style={{...card.attribute, backgroundColor: 'gold'}}>Legendary</span>
            </div>
        </div>

    )
}

export default RarityAttributesControls