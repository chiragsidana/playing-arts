/* Library import */
import { useState, useEffect } from 'react';

/* Dependency import */
import './css/Qna.css';

/* Component import */

/* Asset imports */

function Qna({
    images,
    randomCards,
    question,
    checkAns,
    level
}) {

    return (
        <div className='Qna'>
            {/* Question Section */}
            {
                (question!==1)?(
                    <div className="questionSection">
                        Level {level} -  Which one is {question}
                        {
                            (question===2)?'nd ':(question===3)?'rd ':'th '
                        }
                        card from top?
                    </div>
                ):(
                    <div className="questionSection"></div>
                )
            }
            {/* answer Cards Section */}
            <div className="answerCardsSection">

                {
                    randomCards ?
                        randomCards.map((item, i) => (

                            <div 
                                className='qnaCard'
                                key={i}
                                onClick={
                                    ()=>{
                                        checkAns(i);
                                    }
                                }
                            >
                                <img
                                    className='card-image'
                                    src={images[item]}
                                    id={item}
                                    alt="yo"
                                    key={i}
                                />
                            </div>
                        )) : ('')
                }

            </div>
        </div>
    );
}

export default Qna;