import React, {  useContext } from 'react';

import { ThemeProvider } from '../contexts/ThemeProvider';

const Cards = ({cards, dealerAction}) => {

    const { setCardOnPLayer } = useContext(ThemeProvider);

    const setCard = (card) => {
        if (dealerAction) {
            setCardOnPLayer(card);
        }
    }

    return (
        <>
            {cards.map((card) => (
                <div className="card-space" key={card.id} onClick={() => setCard(card)}>
                    <img className="card" src={card.url} alt="card" width="115"/>
                </div>
            ))}
        </>
    );
}
 
export default Cards;