import './Main.css' 
import imgDeportes from '../../assets/imgJugando.jpg'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const MainInicio = () => {
    const navigate = useNavigate();
    const [esenlaceActivo, setEnlaceActivo] = useState('/canchas');
    return(
        
        <div className='fondoInicio'>
            <img src={imgDeportes} alt="deportes"/>
            <button className='btnReservarInicio' onClick={() => {navigate('/canchas'); }}> Reservar</button>
        </div>
    )
}

export default MainInicio;