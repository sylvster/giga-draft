import { Box } from '@mui/system';
import dictionary from "./dictionary.JSON";
import champions from "./champions.JSON";
import mysteryCard from "../Assets/mystery-card.png"
import selectCard from "../Assets/select-card.png"
import { useState, useEffect } from 'react'

const CARD_NAME = 1;
const CARD_ID = 2;

function Card({ data, name, countFunc, addFunc }) {

  let fetchLink;

  if(name == null) {
    fetchLink = mysteryCard;
  } else {
    fetchLink = `https://raw.githubusercontent.com/RoyaleAPI/cr-api-assets/master/cards-png8/${data[CARD_NAME]}.png`;
  }

  const handleClick = () => {
    countFunc();
    addFunc(data[CARD_ID]);
  }

  return (
    <Box
      component="img"
      sx={{
        width: 25 + "vw",
        height: "auto",
        // bgcolor: "#000000"
      }}
      src= {fetchLink}
      onClick={handleClick}
    />
  )
}

async function getCards() {
  const response = await fetch(dictionary);
  const cardsList = await response.json();
  const championsResponse = await fetch(champions);
  const championsList = await championsResponse.json();

  const arr = [];
  const carr = [];
  const result = []

  for(let i = 0; i < cardsList.length; i++) {
    arr.push([i, cardsList[i].key, cardsList[i].id]);
  }

  for(let i = 0; i < championsList.length; i++) {
    carr.push([i, championsList[i].key, championsList[i].id]);
  }

  for(let i = 0; i < 21; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let selectedCard = arr.splice(randomIndex, 1)[0];
    result.push(selectedCard);
  }

  for(let i = 21; i < 24; i++) {
    let randomIndex = Math.floor(Math.random() * carr.length);
    let selectedCard = carr.splice(randomIndex, 1)[0];
    result.push(selectedCard);
  }

  return result;
}

export default function Board() {

  document.documentElement.style.overflow = 'hidden';

  const [cards, setCards] = useState(Array(24).fill(Array(3).fill(null)));
  const [myCards, setMyCards] = useState(Array(8).fill(null));
  const [cardNumber, setCardNumber] = useState(0);

  useEffect(() => {
    getCards().then(result => setCards(result));
  }, [null]);

  console.log(cards)

  function updateCards() {
    if(cardNumber < 7) {
      setCardNumber(cardNumber + 1);
    }
  }

  function addCard(name) {
    const newCards = myCards.slice();
    newCards[cardNumber] = name;
    console.log(newCards);
    setMyCards(newCards);
    if(cardNumber === 7) {
      window.open(`https://link.clashroyale.com/deck/en/?deck=${myCards[0]};${myCards[1]};${myCards[2]};${myCards[3]};${myCards[4]};${myCards[5]};${myCards[6]};${name}`)
    }
  }

  return (
    <>
      <Cards cardsList={cards} cardNum={cardNumber} countFunc={updateCards} addFunc={addCard}/>
    </>
  );
  
}

function Cards({ cardsList, cardNum, countFunc, addFunc }) {
  
  return(
    <>
      <Box 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: 100 + "vw",
          height: 97 + "vh",
          // bgcolor: "#87CEEB"
        }}
      >
        <Box 
          component="img"
          sx={{
            width: 80 + "vw",
            height: "auto",
            // bgcolor: "#B3EF2A"  
          }}
          src={selectCard}
        />
        <Box sx={{
          width: 80 + "vw",
          // height: 60 + "vh",
          height: "auto",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          // bgcolor: "#FFFFFF",
        }}
        >
          <Card data={cardsList[cardNum * 3 + 0]} name={cardsList[cardNum * 3 + 0][CARD_NAME]} countFunc={() => countFunc()} addFunc={addFunc}/>
          <Card data={cardsList[cardNum * 3 + 1]} name={cardsList[cardNum * 3 + 1][CARD_NAME]} countFunc={() => countFunc()} addFunc={addFunc}/>
          <Card data={cardsList[cardNum * 3 + 2]} name={cardsList[cardNum * 3 + 2][CARD_NAME]} countFunc={() => countFunc()} addFunc={addFunc}/>
        </Box>
        <a>Cards Remaining: {8-cardNum}</a>
      </Box>
    </>
  )
}