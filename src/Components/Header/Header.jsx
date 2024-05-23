import epnLogo from "../../assets/EPN_logo_big.png";
import contorno from "../../assets/contorno.png";
import user from "../../assets/perfil.png";
import "./Header.css"
import ModalCanchas from "../Main/Modals/ModalCanchas";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export const Header = ({}) =>{
    const navigate = useNavigate();
    const [enlaceActivo, setEnlaceActivo] = useState('/');
    return(
        <header>
        <div className="encabezado1">
            <a href="#">
                <img src={user} alt="user" />
            </a>
        </div>
        <div className="encabezado2">
            <div className="logoEPN"><img src={epnLogo} alt="epn"/></div>
            <h1>Reservas Deportivas</h1>
            <div className="imgAdorno"><img src={contorno} alt="figura"/></div>
        </div>
        <nav>
            <ModalCanchas></ModalCanchas>
            <a className={`${enlaceActivo === `/` ? 'enlace-seleccionado' : ''}`}
                onClick={() => {navigate('/'); setEnlaceActivo('/');}}> Inicio</a>
            <a className={`${enlaceActivo === `/reservar`? 'enlace-seleccionado' : ''}`}
                onClick={() => {navigate('/reservar'); setEnlaceActivo('/reservar');}}>
                <span>Reservar</span>
                <ul>
                    <li><a href="/">Futbol</a></li>
                    <li><a href="/">Basquet</a></li>
                    <li><a href="/">Volley</a></li>
                </ul>
            </a>
            <a className={`${enlaceActivo === `/eventos` ? 'enlace-seleccionado' : ''}`}
                onClick={() => {navigate('/eventos'); setEnlaceActivo('/eventos');}}> Eventos</a>
            <a className={`${enlaceActivo === `/gestionar` ? 'enlace-seleccionado' : ''}`}
                onClick={() => {navigate('/gestionar'); setEnlaceActivo('/gestionar');}}> Gestionar</a>
        </nav>
        
        </header>
    )
}
