import styled from "styled-components"
import { useEffect, useState } from 'react'
import { useForm , Controller} from "react-hook-form"
import InputMask from 'react-input-mask'
import icon from "../imiges/icon-complete.svg"


export default function CardHolder({setName, setCardNumber, setMonth, setDay, setNumber, setConfirm , cardNumber, name, month , number, day , confirm}) {
    
    const {register, handleSubmit , formState: {errors}, } = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
        setConfirm(true)
      
        }

       
    return (
  <Section>
    {confirm ? ( 
      <div className="img">
        <img src={icon} alt="" />
        <div className="CardDetails">
        <h1>THANK YOU!</h1>
        <p >We’ve added your card details</p>
        </div>
        <button onClick={(e) => {setConfirm(false)
        window.location.reload(); 
        }} >Continue</button>
      </div>
    ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <p>Cardholder Name</p>
     <input className="PersonName color" 
     type="text" 
     {...register('name', {required: true })}
     value={name}
     placeholder='e.g. Jane Appleseed' 
       onChange={(e) => setName(e.target.value)}
   />
     </div>
   <p>Card Number</p>
<InputMask {...register ("cardNumber", {required: true , minLength: 22})}

className="PersonName color" cardNumber={cardNumber} onChange={(e)=> setCardNumber(e.target.value)}
placeholder="e.g. 1234 5678 9123 0000"
maskChar={null}
mask="9999  9999  9999  9999" 
/>

<div className="CvcMont">
  <div className="dayMont">
<p>Exp. Date (MM/YY)</p>
     <div className="day">
     
     <input className="MonthDay color" type="number" {...register('month', { required: true })}
    min="1" 
    max="12"
  placeholder='MM'
value={month}
onChange={(e) => {
  const enteredValue = e.target.value;
  if (enteredValue.length <= 2) {
    setMonth(enteredValue);
  }
}}
/>
   <input className="MonthDay color" type="number" {...register('day',{required: true })} 
    value={day}
    placeholder='YY' 
    onChange={(e) => {
      const enteredValue = e.target.value;
      if (enteredValue.length <= 2) {
        setDay(enteredValue);
      }
    }}
   />
</div><p  className="errors">{errors.day ? "Can’t be blank" :  ""}</p>
</div>
<div  className="CvcNumber">
     <p>CVC</p>
     <input className="Cvc color"  type="number"  {...register('number',{required: true} )} 
      value={number}
     placeholder='e.g. 123'
      // onChange={(e) => {
      // if (e.target.value.toString().length <=3)
      //  setNumber(e.target.valueAsNumber)
      // }}
      onChange={(e) => {
        const enteredValue = e.target.value;
        if (enteredValue.length <= 3) {
          setNumber(enteredValue);
        }
      }}
   /> <p className="errors"> {errors.number ? "Can’t be blank" : " "}</p>
   </div>
     </div>
     <button  type='submit'>Confirm</button>
     </form>
     )}
    </Section>)
}


const Section = styled.section `
 padding: 91px 24px 11px 24px;;
  
.img {
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 35px;
 }
 .CardDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 h1 {
  color: var(--deep-violet, #21092F);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Space Grotesk;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 3.422px;
 }
p {
  color: var(--deep-violet, #21092F);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Space Grotesk;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 2px;
text-transform: uppercase;
margin: 20px 0px 9px 0px;;
  
}
.color {
  border: 1px solid var(--light-grey, #DFDEE0);
background: var(--white, #FFF);
}
.PersonName  {
width: 327px;
height: 45px;
padding: 11px 16px 11px 16px;;
}

.CvcMont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.day {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
}
.dayMont {
  display: flex;
  flex-direction: column;
}

.MonthDay {
  width: 72px;
height: 45px;
padding: 11px 16px 11px 16px;;
}
.CvcNumber {
  display: flex;
  flex-direction: column;
}
.Cvc {
  width: 164px;
height: 45px;
padding: 11px 16px 11px 16px;;

}
.errors {
  color: var(--red, #FF5050);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Space Grotesk;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top: 8px;
margin: 0;
height: 20px;
}

button {
  width: 327px;
height: 53px;
border-radius: 8px;
background: var(--deep-violet, #21092F);
color: var(--white, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Space Grotesk;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 28px;
cursor: pointer;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0; 
}
@media (min-width: 1440px) {
 padding: 0;
.PersonName {
  width: 381px;

}
.CvcMont {
  width: 381px;
}
.MonthDay {
  width: 80px;
}

.Cvc {
  width: 191px;
}


button {
  width: 381px;
}




}














`