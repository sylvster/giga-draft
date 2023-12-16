import { Box } from '@mui/system';
import dictionary from "./dictionary.JSON";
import { useState, useEffect } from 'react'

const CARD_NAME = 1;

function Card({ name }) {

  const [dog, setDog] = useState(0);

  return (
      <>
          <Box
            component="img"
            sx={{
              width: '33%',
              height: 'auto',
            }}
            src= {`https://raw.githubusercontent.com/RoyaleAPI/cr-api-assets/master/cards-png8/${name}.png`}
            onClick={() => setDog(dog + 1)}
          />
      </>
  )
}

async function getCards() {
  const response = await fetch(dictionary);
  const cardsList = await response.json();

  const arr = [];
  const result = []

  for(let i = 0; i < cardsList.length; i++) {
    arr.push([i, cardsList[i].key, cardsList[i].id]);
  }
  
  for(let i = 0; i < 24; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let selectedCard = arr.splice(randomIndex, 1)[0];
    result.push(selectedCard);
  }

  return result;
}

export default function Board() {

  const [cards, setCards] = useState(Array(24).fill(Array(3).fill(null)));

  useEffect(() => {
    getCards().then(result => setCards(result));
  }, [null]);

  return (
    <>
      <Cards cardsList={cards}/>
    </>
  );
  
}

function Cards({ cardsList }) {
  console.log(cardsList);
  return(
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: window.innerWidth + "px",
        height: window.innerHeight + "px",
      }}>
        <p> Select your card!</p>
        <Box sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-evenly",
          width: '95%',
          height: "70%",
          // bgcolor: "#87CEEB"
        }}>
          <Card name={cardsList[0][CARD_NAME]}/>
          <Card name={cardsList[1][CARD_NAME]}/>
          <Card name={cardsList[2][CARD_NAME]}/>
        </Box>
      </Box>
    </>
  )
}