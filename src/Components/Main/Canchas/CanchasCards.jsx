

const CanchaCard = ({ cancha }) => {
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

export default CanchaCard;

