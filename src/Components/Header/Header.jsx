import epnLogo from "../../assets/EPN_logo_big.png";
import contorno from "../../assets/contorno.png";
import "./Header.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export const Header = () =>{
    const navigate = useNavigate();
    const [enlaceActivo, setEnlaceActivo] = useState('/');
    return(
        <header>
        <div className="encabezado1"></div>
        <div className="encabezado2">
            <div className="logo"><img src={epnLogo} alt="epn"/></div>
            <h1>Reservas Deportivas</h1>
            <div className="contorno"><img src={contorno} alt="contorno"/></div>
        </div>
        <nav>
            <a onClick={() => {navigate('/'); setEnlaceActivo('/');console.log('enlaceActivo:', enlaceActivo);}}> Inicio</a>
            <a onClick={() => {navigate('/canchas'); setEnlaceActivo('/canchas');console.log('enlaceActivo:', enlaceActivo);}}> Reservas</a>
            <a onClick={() => {navigate('/eventos'); setEnlaceActivo('/eventos');}}> Eventos</a>
            <a onClick={() => {navigate('/gestionar'); setEnlaceActivo('/gestionar');}}> Gestionar</a>
        </nav>
        
        </header>
    )
}
