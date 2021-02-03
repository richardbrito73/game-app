import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ThemeProvider = createContext();

const ThemeContextProvider = (props) => {

    const [dealerCards, setDealerCards] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);
    const [emptySpaces, setEmptySpaces] = useState([])

    useEffect(() => {
        if ( !Boolean(dealerCards.length) ) {
            fetchCards();
        }
    }, [])

    useEffect(() => {
        // Remove cards from player space
        if ( playerCards.length < 5 ) {
            setEmptySpaces(Array.from(
                Array(Boolean(playerCards.length) ? 4 - playerCards.length : 4).keys()
            ));
        }
    }, [playerCards])

    const fetchCards = () => {
        axios.get('https://svquizz.s3.eu-central-1.amazonaws.com/cards.json')
        .then(res => {
            const cards = res.data.map((card, index) => {
                return {...card, _id: index + 1}
            });
            setDealerCards(shuffle(cards));
        }).catch(err => console.log('Ups! Something went wrong.', err))
    }

    /**
     * Shuffle cards to place them in a random position
     */
    const shuffle = (cards) => {
        return cards.sort(() => 0.5 - Math.random());
    }

    /**
     * Dealer gives a card to the player
     * @param {*} card 
     */
    const setCardOnPLayer = (card) => {
        if ( playerCards.length < 4 ) {
            setDealerCards([...dealerCards.filter(c => c.id !== card.id )])
            setPlayerCards([...playerCards, card]);
        } else {
            setDealerCards([...dealerCards, ...playerCards])
            setPlayerCards([]);
        }
    }

    return (
        <ThemeProvider.Provider value={{
           dealerCards, playerCards, emptySpaces, setCardOnPLayer
        }}>
            {props.children}
        </ThemeProvider.Provider>
    );
}

export default ThemeContextProvider;