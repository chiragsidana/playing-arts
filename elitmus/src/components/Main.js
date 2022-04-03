/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Main.css';

/* Component import */
import Title from './Title';
import CardsComponent from './CardsComponent';
import DeckndQna from './DeckndQna';
import GameMenu from './GameMenu';

/* Asset imports */


function Main(){

    const [numOfCards, setNumOfCards] = useState(5);
    const [cards,setCards] = useState([1,2,3,4,5]);
    const [cardSequence, setcardSequence] = useState([]);
    const [numOfShufflesList,setnumOfShufflesList] = useState([2,3,4,5]);
    const [gameStarted, setgameStarted] = useState(false);
    const [level, setLevel] = useState(1);
    const [randomCards, setrandomCards] = useState([]);
    const [images, setimages] = useState({});
    const [selectedCard, setselectedCard] = useState(1);
    const [correctAnswer ,setcorrectAnswer] = useState('parvg');

    const checkAns = async (answer) => {
        await distributeCards();
        if(cardSequence[selectedCard-1] === (answer+1)){
            await setLevel(level+1);
            await startGame();
        }else{
            setLevel(1);
            setgameStarted(false);
        }
       
    }

    function getRandomKey(){
        return Math.floor(Math.random()*52);
    }

    const makeQuestion = () => {
        setselectedCard(numOfShufflesList[Math.floor(Math.random()*4)]);
    }

    const selectRandomCards = () => {
        setrandomCards([]);
        let tempRandomCards = [];
        for(var i=0;i<numOfCards;i++){
            var someRandomKey = getRandomKey();
            if(!tempRandomCards.includes(someRandomKey)){
                tempRandomCards.push(someRandomKey);
                setrandomCards(randomCards=>[...randomCards,someRandomKey])
            }else{
                i--;
            }
        }
    }

    function importAll (r) {
        let images = {};
        let count = 0;
        r.keys().map((item, index) => { 
            images[count] = r(item); 
            count++;
        });
        return images;
    }
      
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const distributeCards = async (time = 100) => {
        var allCards = cards;
        var zIndex = 1;
        setcardSequence([]);
        while(allCards.length!=0){
            var randomElement = allCards[Math.floor((Math.random()*allCards.length))];
            var elementId = "card" + String(randomElement);
            var fromElement = document.getElementById(elementId);
            fromElement.style.zIndex = zIndex;
            var toElement = document.getElementById("deckCard");
            var fromElementRect = fromElement.getBoundingClientRect();
            var toElementRect = toElement.getBoundingClientRect();
            fromElement.style.transform = 'translateY('+(toElementRect.top - fromElementRect.top)+'px)';
            fromElement.style.transform += 'translateX(' +(toElementRect.left - fromElementRect.left)+ 'px)';
            allCards = allCards.filter(item=>item!==randomElement);
            zIndex = zIndex + 1; 
            setcardSequence(cardSequence => [randomElement,...cardSequence]);
            await timeout(time);
        }
    }

    const startGame = async () => {
        setgameStarted(true);
        await timeout(3000);
        if(level == 1){
            await selectRandomCards();
            await timeout(1000);
            await distributeCards(2000);
        }else if(level == 2){
            await selectRandomCards();
            await timeout(1000);
            await distributeCards(1500);
        }else if(level == 3){
            await selectRandomCards();
            await timeout(1000);
            await distributeCards(1000);
        }else if(level == 4){
            await selectRandomCards();
            await timeout(1000);
            await distributeCards(500);
        }else if(level == 5){
            await selectRandomCards();
            await timeout(1000);
            await distributeCards(300);
        }else{
            await selectRandomCards();
            await timeout(1000);
            await distributeCards(300);
        }
        makeQuestion();
        console.log(cardSequence);
    }

    useEffect(async () => {
        const firstDistribute = async ()=>{
            await distributeCards();
        }
        await setimages(importAll(require.context('../assets/CardsBlack', false, /\.(png|jpe?g|svg|gif)$/)));
        await selectRandomCards();
        await firstDistribute();
    }, [])
    


    return(
        <div className='Main'>
        {
            (gameStarted)?(
                <>
                {/* Title */}
                <Title/>
                {/* Cards Compoenent */}
                <CardsComponent
                    distributeCards = {distributeCards}
                    images = {images}
                    randomCards = {randomCards}
                />
                {/* deck and qna component */}
                <DeckndQna
                    images = {images}
                    randomCards = {randomCards}
                    gameStarted = {gameStarted}
                    question = {selectedCard}
                    checkAns= {checkAns}
                    level = {level}
                />
                </>
            ):(   
                <GameMenu
                    startGame={startGame}
                />
            )
        }
        </div>
    );
}

export default Main;