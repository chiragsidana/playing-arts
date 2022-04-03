/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/DeckndQna.css';

/* Component import */
import Deck from './Deck';
import Qna from './Qna';
import GameMenu from './GameMenu';

/* Asset imports */

function DeckndQna({
    images,
    randomCards,
    gameStarted,
    question,
    checkAns,
    level
}){

    return(
        <div className='DeckndQna'>
            <Deck/>
            {/* Qna */}
            {
                (gameStarted)?(
                    <Qna
                        images = {images}
                        randomCards = {randomCards}
                        question = {question}
                        checkAns = {checkAns}
                        level = {level}
                    />
                ):(
                   ''
                )
            }
            
        </div>
    );
}

export default DeckndQna;