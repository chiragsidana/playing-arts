/* Library import */
import { useState, useEffect } from 'react';

/* Dependency import */
import './css/GameMenu.css';

/* Component import */
import Title from './Title';

/* Asset imports */
import sampleCard1 from '../assets/CardsBlack/c4.jpg';
import sampleCard2 from '../assets/CardsBlack/c9.jpg';
import sampleCard3 from '../assets/CardsBlack/d13.jpg';
import sampleCard4 from '../assets/CardsBlack/h3.jpg';
import sampleCard5 from '../assets/CardsBlack/s8.jpg';
import sampleCard6 from '../assets/CardsBlack/s11.jpg';
import sampleCard7 from '../assets/CardsBlack/s12.jpg';

function GameMenu({
    startGame
}) {

    return (
        <div className='GameMenu'>
            <div className="instructions-mask">
                <Title />
                <div className="instructions-mask-heading">
                    INSTRUCTIONS
                </div>
                <div className='instructions-mask-instructions'>
                    <ul>
                        <li>
                            The game is simple, 5 cards are displayed on top and you have to remember them.
                        </li>
                        <li>
                            A question will be displayed based on the arrangement of the 5 cards
                            Select the right one to proceed or game over
                        </li>
                    </ul>
                </div>


                <button onClick={async () => await startGame()}>
                    Start Game
                </button>
            </div>
            <div className='khali-mask'>

            </div>

            <div className='card-menu'>
                <div className="card-holder">
                    <div className="main-menu-card">
                        <img
                            src={sampleCard1}
                            alt=""
                        />
                    </div>
                    <div className="main-menu-card">
                        <img
                            src={sampleCard2}
                            alt=""
                        />
                    </div>
                    <div className="main-menu-card">
                        <img
                            src={sampleCard3}
                            alt=""
                        />
                    </div>
                    <div className="main-menu-card">
                        <img
                            src={sampleCard4}
                            alt=""
                        />
                    </div>
                    <div className="main-menu-card">
                        <img
                            src={sampleCard5}
                            alt=""
                        />
                    </div>
                    <div className="main-menu-card">
                        <img
                            src={sampleCard6}
                            alt=""
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GameMenu;