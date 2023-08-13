import { useState } from 'react'
import GlobalStyled from "./styles-components/Globalstyle"
import styled from "styled-components"


import CardHolder from './components/Cardholder'
import CardInfo from './components/CardInfo'
function App() {

  const [name , setName] = useState("")
  const [cardNumber, setCardNumber] = useState(null)
  const [month, setMonth] = useState ()
  const [ day, setDay] = useState()
  const [ number, setNumber] = useState()
  const [confirm, setConfirm] = useState()
  




 

  return (
    <>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
<CardInfo  name={name} cardNumber={cardNumber} month={month} day={day} number={number} confirm={confirm}  />
<CardHolder setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setDay={setDay}
 setNumber={setNumber} setConfirm={setConfirm} name={name} 
 cardNumber={cardNumber} month={month} day={day} number={number} confirm={confirm} 
 
 />

     <GlobalStyled/>
    </>
  )
}

export default App
// const Section = styled.section `
//   display: flex;
//    flex-direction: column;


//    @media (min-width: 1440px) {
// 
//    }`
