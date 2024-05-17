import React, { useState } from 'react';
import '../Main.css' 

import { useNavigate } from 'react-router-dom';

import imgImplementoTemp from '../../../assets/perfil.png'
import imgReferenciaTemporal from '../../../assets/imgJugando.jpg'

const MainImplementos = () => {

  const implementos = {
    Futbol: [
        {
            id:1,
            etiqueta:'Implemento 1',
            imagen:imgImplementoTemp
        },
        {
            id:2,
            etiqueta:'Implemento 2',
            imagen:imgImplementoTemp
        },
        {
            id:3,
            etiqueta:'Implemento 3',
            imagen:imgImplementoTemp
        },
        {
            id:4,
            etiqueta:'Implemento 4',
            imagen:imgImplementoTemp
        },
    ],
    Basquet: [
        {
            id:1,
            etiqueta:'Implementob 1',
            imagen:imgImplementoTemp
        },
        {
            id:2,
            etiqueta:'Implementob 2',
            imagen:imgImplementoTemp
        },
        {
            id:3,
            etiqueta:'Implementob 3',
            imagen:imgImplementoTemp
        },
        {
            id:4,
            etiqueta:'Implementob 4',
            imagen:imgImplementoTemp
        },
        {
            id:5,
            etiqueta:'Implementob 5',
            imagen:imgImplementoTemp
        },
        {
          id:6,
          etiqueta:'Implementob 6',
          imagen:imgImplementoTemp
      },
    ],
    Volley: [
        {
            id:1,
            etiqueta:'Implementov 1',
            imagen:imgImplementoTemp
        },
        {
            id:2,
            etiqueta:'Implementov 2',
            imagen:imgImplementoTemp
        },
        
        
    ]
  }
    const navigate = useNavigate();
    const [selectedImplemento, setSelectedImplemento] = useState('Basquet');

    const handleImplementoClick = (implementoName) => {
    setSelectedImplemento(implementoName);
    
    };

  const renderCardsImplementos = (implementoName) => {
    return (
      <>
        {implementos[implementoName].map(implemento => {
            return(
                <CanchaCard2  key={implemento.id} cancha={implemento}/>
            )
        })
        }
      </>
    );
  };

  const CanchaCard2 = ({ cancha }) => {
    return (
      <div className="cancha-card">
        <img className="canchaCardImagen" src={cancha.imagen} alt={cancha.etiqueta} />
        <input
          type="radio"
          id={cancha.id}
          name="grupoCanchasCard" 
          // checked={cancha.seleccionada}
          // onChange={() => manejarSeleccion(cancha.id)}
        />
        <label htmlFor={cancha.id}>{cancha.etiqueta}</label>
      </div>
    );
  };
  
  return (
    <div className="principal">
      <div className="titulo_contenedor">
        <h3>Implementos Deportivos</h3>
      </div>
      <div className="container">
        <div className="nombre-implementos">
          <div className='implemento' onClick={() => handleImplementoClick('Basquet')}>Balón de Básquet</div>
          <div className='implemento' onClick={() => handleImplementoClick('Volley')}>Red- Balón de Volley</div>
          <div className='implemento' onClick={() => handleImplementoClick('Futbol')}>Balón de Fútbol</div>
          <div className='implemento' onClick={() => handleImplementoClick('FutbolSala')}>Balón de Fútbol Sala</div>
          <div className='implemento' onClick={() => handleImplementoClick('Tennis')}>Red- Balón de Tennis</div>
         
        </div>

        <div className="canchas-cards">
                {renderCardsImplementos(selectedImplemento)}
            </div>
        <div className="informacion">
                <h3>----</h3>
                <div>
                    <img src={imgReferenciaTemporal} alt="Canchas EPN" />
                </div>
               
            </div>
      </div>
      <div className="botones">
          <button onClick= {() => navigate('/horario')}>Reservar</button>
          <button onClick= {() => navigate('/')}>Cancelar</button>
      </div>
    </div>
  );
}

export default MainImplementos;
