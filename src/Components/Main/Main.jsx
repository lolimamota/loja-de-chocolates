import React, {useState} from "react";
import styled from 'styled-components'
import Card from './Card.jsx';
import Barra from '../../assets/barrinhas.png';
import BarraArt from '../../assets/barras-artesanais.png';
import Pilha from '../../assets/pilha-barras.png';
import Square from '../../assets/quadradinhos.png';

//styled-components

// const Div = styled.div
// `border-radius: 15%;
// border: solid #37231E 1px;
// `;

export default function Main(){

    return(
        <section className="main">
        <h1 className="h1Main">Chocolates</h1>
        <div className="divMain">
        <Card photo={Barra} alt={"A imagem tem três barras de chocolate, sendo uma amargo, outra ao leite e a terceira é branco."} price={15}/>
        <Card photo={BarraArt} alt={"A imagem mostra várias barras de chocolate ao leite com diferentes tipos de produtos para dar sabor, exemplo: laranja, café, hortelã, amendoim, uva passas, avelãs e noz."} price={25}/>
        <Card photo={Pilha} alt={"A imagem mostra 7 barras de chocolate ao leite empilhadas de vários tipos, por exemplo, com uva passa ou amendoim."} price={18}/>
        <Card photo={Square} alt={"A imagem mostra pequenos quadradinhos de chocolate ao leite empilhados."} price={5}/>
        </div>
        </section>
    )
}