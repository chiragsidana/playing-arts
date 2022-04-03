/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/CardsComponent.css';

/* Component import */

/* Asset imports */

function CardsComponent({
    images,
    randomCards
}){

    return(
        <div className='CardsComponent'>
            <div className='cardContainer'>
                {
                    randomCards?
                    randomCards.map((item,i) => (

                        <div 
                            className='card'
                            id={`card${i+1}`}

                        >
                            <img 
                                className='card-image'
                                src={images[item]} 
                                alt="yo" 
                            />
                        </div>
                    )):('')
                }
            </div>
        </div>
    );
}

export default CardsComponent;