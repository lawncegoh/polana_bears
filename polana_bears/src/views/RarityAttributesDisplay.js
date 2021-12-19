import React from 'react'

const styling = {
    image: {
        width: '190px',
        height: '190px',
        marginTop: '20px',
        cursor: 'pointer',
        backgroundColor: '#D6CFC7',
    },
    imageContainer: {
        width: '220px',
        height: '200px',
        margin: '20px auto 50px',
    },
    attribute: {
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '0.35em 0.65em',
        textAlign: 'center',
        borderRadius: '0.25rem',
        fontWeight: '700',
        width: 'auto',
        margin: '10px auto 60px'
    },
    captions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
    const RarityAttributesDisplay = (props) => {

    return (
        <div style={styling.imageContainer} >
            <img onClick={props.onSaveImageData} style={styling.image} src={props.image} alt='polana'></img>
            <span style={{fontSize: '18px', color: 'white', marginTop: '10px', display:'block'}}>{props.description}</span>
            <span style={{display: 'none'}}>{props.rarity}</span>
            <span style={{...styling.attribute, ...props.css}}>{props.attribute}</span>
        </div>
    )
}

export default RarityAttributesDisplay