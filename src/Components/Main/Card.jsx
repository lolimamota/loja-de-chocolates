import React, {useState} from "react";
import styled from 'styled-components'
import More from '../../assets/mais.png'
import Menos from '../../assets/menos.png'

const Section = styled.section
    `border-radius: 5rem;
     border: solid #37231E 1px;
     width: 20vw;
     height: 20vw;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     `;
const Button = styled.button
     `width: 5vw;
     border: none;
     background-color: transparent;
     `;
const Div = styled.div
    `padding-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `;
export default function Card({photo, price, alt}){
    const [item, setItem] = useState(0);
    const Add = () => {setItem(prevItem => prevItem < 9 ? prevItem + 1 : prevItem)}
    const Rem = () => {setItem(prevItem => prevItem >0 ? prevItem - 1 : prevItem)}
    const Del = () => {(0)}
    // const Payment(){}
    return(
        <Section className="cartao">
        <img src={photo} alt={alt} width={'150px'}/>
        <h2>{price}</h2>
        <Div className="buttonCard">
        <Button onClick={Rem}> <img src={Menos} alt="Seta apontando para a esquerda" /> </Button>
        <h2>{item}</h2>
        <Button onClick={Add}> <img src={More} alt="Seta apontando para a direita" /> </Button>
        </Div>
        <Button></Button>
        </Section>
    )
}