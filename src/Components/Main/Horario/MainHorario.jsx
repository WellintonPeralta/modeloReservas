import '../Main.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainHorario({ handleAvailabilityClick }) {
    const navigate = useNavigate();
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const horas = Array.from({ length: 9 }, (_, index) => index + 8);
    const [selected, setSelected] = useState(null);
 
  return (
    <div className="principal">
        <div className="titulo_contenedor">
            <h3>Horario</h3>
        </div>
        <div className = "contenedorCalendario">
        <div className="calendario">
        <div className="dias">
            <div className="celda-vacia">Hora</div>
            {dias.map((dia) => (
            <div key={dia} className="celda-dias">
                {dia}
            </div>
            ))}
        </div>
        {horas.map((hora) => (
            <div key={hora} className="fila-hora">
            <div className="celda-horas">{`${hora}-${hora + 1}`}</div>
            {dias.map((dia) => (
                <div key={`${dia}-${hora}`}
                className={`celda-dia ${selected === `${dia}-${hora}` ? 'seleccionada' : ''}`}
                onClick={() => {
                    // handleAvailabilityClick(`${dia}-${hora}`);
                    setSelected(selected === `${dia}-${hora}` ? null : `${dia}-${hora}`);
                }}
                >
                    {selected === `${dia}-${hora}` ? 'Reservar' : 'Disponible'}
                </div>
            ))}
            </div>
        ))} 
        </div>
        <div className="botones-horario">
            <button onClick= {() => navigate('/')}>Confirmar</button>
            <button onClick= {() => navigate('/')}>Cancelar</button>
        </div>
    </div>
    </div>
    
  );

}

export default MainHorario;
