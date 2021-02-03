import React, { useContext } from 'react';
import { ThemeProvider } from '../contexts/ThemeProvider';

import Cards from './Cards';

const Dealer = () => {
    const { playerCards, emptySpaces } = useContext(ThemeProvider);

    return (
        <section id="player">
            <h1 className="text-white">Player</h1>
            <div className="flex flex-wrap justity-center p-20">
                <Cards cards={playerCards} />
                {emptySpaces.map((_) => (
                    <div className="card-space"></div>
                ))}

            </div>
        </section>
    );
}
 
export default Dealer;