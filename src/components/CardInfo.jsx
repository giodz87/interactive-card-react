import styled from "styled-components"
import { useEffect, useState } from 'react'
import cardBack from "../imiges/bg-card-back.png"
import cardFront from "../imiges/bg-card-front.png"
import mainMobile from "../imiges/bg-main-mobile.png"
import mainDesktop from "../imiges/bg-main-desktop.png"
import logo from "../imiges/card-logo.svg"
import icon from "../imiges/icon-complete.svg"


export default function CardInfo({name, cardNumber, month, day, number, confirm}) {
return (
<Section>

     
    <img className="mainMobile" src={mainMobile} alt="" />
    <img className="MainDesktop" src={mainDesktop} alt="" />
    <img className="cardBack" src={cardBack} alt="" />
    {number ? (
        <p className="number">{number.padStart(3, '0')}</p>
      ) : (
        <p className="number">000</p>
      )}
    <img className="cardFront" src={cardFront} alt="" />
    <img className="logo" src={logo} alt="" />
    
    <h3>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h3>
    <div className="info">
    <p > {name ? name : 'JANE APPLESEED'}</p>
   
  <div  className="dayMonth">
  {month ? (
        <p >{month.padStart(2, '0')}</p>
      ) : (
        <p >00</p>
      )}
  <p>/</p>
  {day ? (
        <p >{day.padStart(2, '0')}</p>
      ) : (
        <p >00</p>
      )}
  
  </div>
  </div>
  

</Section>
)
}

const Section = styled.section `
display: flex;
flex-direction: column;
align-items: start;
position: relative;

.mainMobile{
    height: 240px;
    width: 375px;
  
    top: 0;
}
.MainDesktop {
  display: none;
}
.cardBack {
    position: absolute;
    width: 286px;
height: 157px;
top: 32px;
left: 73px;
}
.number {
    position: absolute;
    top: 103px;
    right: 50px;
  
}
.cardFront {
  
    width: 285px;
height: 156.208px;
position: absolute;
top: 120px;
left: 17px;
}
.logo {
    width: 54px;
height: 30px;
    position: absolute;
    top: 138px;
    left: 36px;
}
h3 {
    position: absolute;
    top: 211px;
    left: 36px;
    color: var(--white, #FFF);
font-family: Space Grotesk;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 2.3px;
}
p {
    color: var(--white, #FFF);
font-family: Space Grotesk;
font-size: 9px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1.286px;
text-transform: uppercase;
}
.info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    position: absolute;
    top:242px ;
    left: 36px;
}
.dayMonth {
    display: flex;
    flex-direction: row;
    align-items: center;
 
}
@media (min-width: 1440px) {
flex-direction: row;
align-items: center;
justify-content: space-between;
  .mainMobile {
    display: none;
  }
.MainDesktop {
  display: flex;
 
}

.cardFront {
  Width: 447px;
Height: 245px;
Top: 187px;
Left: 164px;
}

.cardBack {
  Width: 447px;
Height: 245px;
  Top: 469px;
Left: 258px;
}


.logo {
  Width: 84px;
Height: 47px;
Top: 215px;
    Left: 200px;
}
.number {
  Left: 620px;
    top: 580px;
    font-size: 14px;
}

h3 {
  top: 335px;
  left: 200px;
  font-size: 28px;
line-height: 35.73px;
letter-spacing: 3.42px;
width: 100%;
}
.info {
  top: 390px;
  left: 200px;
 width: 370px;

}
p {
  font-size: 14px;
line-height: 17.86px;
letter-spacing: 2px;
}

}

`