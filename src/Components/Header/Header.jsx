import React, {useState} from 'react';
import Logo from '../../assets/logo.png'

export default function Header(){
    return(
        <section className='header'>
            <img src={Logo} alt='logo com o nome da loja: "A fantastica loja de chocolates" '/>
            <nav>
                <ul>
                    <li>
                        <a href="#Cookie">
                        Bicoitos
                        </a>
                    </li>
                    <li>
                        <a href="#Chocolate">
                        Chocolates
                        </a>
                    </li>
                    <li>
                        <a href="#Pirulitos">
                        Pirulitos
                        </a>
                    </li>
                    <li>
                        <a href="#Sorvete">
                            Sorvetes
                        </a>
                    </li>
                    <li>
                        <a href="#Bolos">
                        Bolos
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}