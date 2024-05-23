import './Main.css' 
import imgDeportes from '../../assets/imgJugando.jpg'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const MainInicio = () => {
    return(
        <div className='fondoInicio'>
            <img src={imgDeportes} alt="deportes"/>
        </div>
    )
}

export default MainInicio;