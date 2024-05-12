import '../Main.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainHorario({ handleAvailabilityClick }) {
    const navigate = useNavigate();
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const horas = Array.from({ length: 9 }, (_, index) => index + 8);
    const [selected, setSelected] = useState(null);

  return (
    <div className = "contenedorCalendario">
        <div className="calendario">
        <div className="dias">
            <div className="empty-cell">Hora</div>
            {dias.map((day) => (
            <div key={day} className="days-cells">
                {day}
            </div>
            ))}
        </div>
        {horas.map((hour) => (
            <div key={hour} className="time-slot">
            <div className="hour-cell">{`${hour}-${hour + 1}`}</div>
            {dias.map((day) => (
                <div
                key={`${day}-${hour}`}
                className={`day-cell ${selected === `${day}-${hour}` ? 'selected' : ''}`}
                onClick={() => {
                    // handleAvailabilityClick(`${day}-${hour}`);
                    setSelected(selected === `${day}-${hour}` ? null : `${day}-${hour}`);
                }}
                >
                {selected === `${day}-${hour}` ? 'Reservar' : 'Disponible'}
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
  );

}

export default MainHorario;
