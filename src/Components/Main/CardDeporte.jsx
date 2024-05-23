import React from "react";

const CardDeporte = ({ deporte, onClick }) => {
  return (
    <div className="card-Deporte" onClick={() => onClick(deporte)}>
      <img src={deporte.imagen} alt={deporte.nombre} />
      <div>
        {/* <input
          type="radio"
          id={deporte.id}
          name="grupoCardDeportes"
        //   checked={false} // You might need to manage this based on your selection logic
        //   onChange={() => /* Handle radio change if needed 
        /> */}
        <label htmlFor={deporte.id}>{deporte.nombre}</label>
      </div>
    </div>
  );
};

export default CardDeporte;
