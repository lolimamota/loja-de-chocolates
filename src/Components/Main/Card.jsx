import React, {useState} from "react";

export default function Card({photo, price, alt}){
    const [item, setItem] = useState(0);
    const Add = () => {setItem(prevItem => prevItem < 9 ? prevItem + 1 : prevItem)}
    const Rem = () => {setItem(prevItem => prevItem >0 ? prevItem - 1 : prevItem)}
    const Del = () => {(0)}
    // const Payment(){}
    return(
        <section>
        <img src={photo} alt={alt} width={'150px'}/>
        <h2>{item}</h2>
        <h2>{price}</h2>
        <button onClick={Add}>Adicionar itens</button>
        <button onClick={Rem}>Remover itens</button>
        <button></button>
        </section>
    )
}