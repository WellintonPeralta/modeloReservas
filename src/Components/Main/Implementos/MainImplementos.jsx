import React, { useState } from 'react';
import '../Main.css' 

const MainImplementos = () => {

    const [selectedImplemento, setSelectedImplemento] = useState('Principal');

    const handleImplementoClick = (implementoName) => {
    setSelectedImplemento(implementoName);
   
  };

  
  return (
    <div className="principal">
      <div className="titulo_contenedor">
        <h3>Implementos Deportivos</h3>
      </div>
      <div className="container">
        <div className="nombre-implementos">
          <div className='implemento' onClick={() => handleImplementoClick('Implemento-Basquet')}>Balón de Básquet</div>
          <div className='implemento' onClick={() => handleImplementoClick('Implemento-Volley')}>Red- Balón de Volley</div>
          <div className='implemento' onClick={() => handleImplementoClick('Implemento-Futbol')}>Balón de Fútbol</div>
          <div className='implemento' onClick={() => handleImplementoClick('Implemento-FutbolSala')}>Balón de Fútbol Sala</div>
          <div className='implemento' onClick={() => handleImplementoClick('Implemento-Tennis')}>Red- Balón de Tennis</div>
         
        </div>

        <div className="implementos">
          
        </div>
      </div>
      <div className="botones">
        <button>Reservar</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
}

export default MainImplementos;
