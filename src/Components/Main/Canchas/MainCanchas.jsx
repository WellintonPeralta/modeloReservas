import React, { useState } from 'react';
import '../Main.css'

import { useNavigate } from 'react-router-dom';
import imgCanchaTemp from '../../../assets/perfil.png'
import imgReferenciaTemporal from '../../../assets/imgCanchas.jpg'
const MainCanchas = ()=>{

    const canchas = {
        Futbol: [
            {
                id:1,
                etiqueta:'Cancha 1',
                imagen:imgCanchaTemp
            },
            {
                id:2,
                etiqueta:'Cancha 2',
                imagen:imgCanchaTemp
            },
            {
                id:3,
                etiqueta:'Cancha 3',
                imagen:imgCanchaTemp
            },
            {
                id:4,
                etiqueta:'Cancha 4',
                imagen:imgCanchaTemp
            },
        ],
        Basquet: [
            {
                id:1,
                etiqueta:'CanchaB 1',
                imagen:imgCanchaTemp
            },
            {
                id:2,
                etiqueta:'CanchaB 2',
                imagen:imgCanchaTemp
            },
            {
                id:3,
                etiqueta:'CanchaB 3',
                imagen:imgCanchaTemp
            },
            {
                id:4,
                etiqueta:'CanchaB 4',
                imagen:imgCanchaTemp
            },
            {
                id:5,
                etiqueta:'CanchaB 5',
                imagen:imgCanchaTemp
            },
        ],
        Volley: [
            {
                id:1,
                etiqueta:'Canchav 1',
                imagen:imgCanchaTemp
            },
            {
                id:2,
                etiqueta:'Canchav 2',
                imagen:imgCanchaTemp
            },
            
            
        ]
    }
    
    
    const navigate = useNavigate();
    const [selectedSport, setSelectedSport] = useState('Basquet');

    const handleDeporteClick = (sportName) => {
        setSelectedSport(sportName);
    };
    

    const renderCards = (sportName) => {
        return (
          <>
            {canchas[sportName].map(cancha => {
                return(
                    <CanchaCard  key={cancha.id} cancha={cancha}/>
                )
            })
            }
          </>
        );
    };
    
    const CanchaCard = ({ cancha }) => {
        return (
          <div className="card" onClick={() => document.getElementById(cancha.id).click()}>
            <img src={cancha.imagen} alt={cancha.etiqueta} />
            <div>
              <input
                type="radio"
                id={cancha.id}
                name="grupoCanchasCard" 
                // checked={cancha.seleccionada}
                // onChange={() => manejarSeleccion(cancha.id)}
              />
              <label htmlFor={cancha.id}>{cancha.etiqueta}</label>
            </div> 
          </div>
        );
    };
    

    return(
        <div className="principal">
        <div className="titulo_contenedor">
            <h3>Canchas</h3>
        </div>
        <div className="container">
            <div className="nombre-deportes">
                <div className='deporte' onClick={() => handleDeporteClick('Basquet')}>Básquet</div>
                <div className='deporte' onClick={() => handleDeporteClick('Volley')}>Volley</div>
                <div className='deporte' onClick={() => handleDeporteClick('Futbol')}>Fútbol</div>
                <div className='deporte' onClick={() => handleDeporteClick('Futbol Sala')}>Fútbol Sala</div>
                <div className='deporte' onClick={() => handleDeporteClick('Pista')}>Pista</div>
            </div>
            <div className="canchas-cards">
                {renderCards(selectedSport)}
            </div>
            <div className="informacion">
                <h3>Imagen de Referencia</h3>
                <div>
                    <img src={imgReferenciaTemporal} alt="Canchas EPN" />
                </div>
               
            </div>
        </div>
        <div className="botones">
            <button onClick= {() => navigate('/implementos')}>Reservar</button>
            <button onClick= {() => navigate('/')}>Cancelar</button>

        </div>
    </div>

    )
} 

export default MainCanchas;