import React, {useState} from "react";
import Card from './Card.jsx';
import Barra from '../../assets/barrinhas.png';

export default function Main(){
    return(
        <>
        <Card photo={Barra} alt={"A imagem tem três barras de chocolate, sendo uma amargo, outra ao leite e a terceira é branco."} price={"R$ 15,00"}/>
        </>
    )
}