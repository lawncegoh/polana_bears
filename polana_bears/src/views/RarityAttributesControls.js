import React, { useState, useEffect } from 'react'

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
            backgroundColor: 'white',
            paddingLeft: '15px',
            borderRadius: '5px'
        },
        mobileSelect: {
            width: '30%',
            height: '35px',
            backgroundColor: 'white',
            paddingLeft: '15px',
            borderRadius: '5px'
        },
        mobileInformation: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            margin: 'auto'
        },
        mobileAttribute: {
            width: '65%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    }

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

    const displayMobile = () => {
        return (
            <div style={styling.mobileInformation}>
                <select onChange={optionChangeHandler} style={styling.mobileSelect}>
                    <option>Background</option>
                    <option>Bear</option>
                    <option>Clothing</option>
                    <option>Eyes</option>
                    <option>Hat</option>
                    <option>Mouth</option>
                    <option>Necklace</option>
                    <option>Weapons</option>
                </select>
                <div style={styling.mobileAttribute}>
                    <span style={{...card.mobileAttribute, backgroundColor:'grey'}}>Common</span>
                    <span style={{...card.mobileAttribute, backgroundColor:'red'}}>Rare</span>
                    <span style={{...card.mobileAttribute, backgroundColor:'purple'}}>Epic</span>
                    <span style={{...card.mobileAttribute, backgroundColor:'gold'}}>Legendary</span>
                </div>
            </div>
        )
    }

    const displayDesktop = () => {
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

    return (
        <div>{ mobileView ? displayMobile() : displayDesktop() }</div>
    )
}

export default RarityAttributesControls