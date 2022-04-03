/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Deck.css';

/* Component import */

/* Asset imports */
import cardImage1 from '../assets/CardsBlack/d13.jpg'

function Deck(){

    return(
        <div className='Deck'>
            <img 
                className='deck-card'
                id='deckCard'
                src={cardImage1} 
                alt="yo" 
            />
        </div>
    );
}

export default Deck;