import React, { useContext } from 'react';
import { ThemeProvider } from '../contexts/ThemeProvider';

import Cards from './Cards';

const Dealer = () => {
    const { dealerCards } = useContext(ThemeProvider);
    
    return (
        <section id="dealer" >
            <h1 class="text-white">Dealer</h1>
            <div className="flex flex-wrap justity-between p-20">
                <Cards cards={dealerCards} dealerAction/>
            </div>
        </section>
    );
}
 
export default Dealer;