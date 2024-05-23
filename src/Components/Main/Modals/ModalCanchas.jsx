import "./Modal.css";
import imgCancha from "../../../assets/canchaDibujo.jpg";
import {useSelectedCancha } from "../Modals/useModal";
import CardDeporte from "../CardDeporte";

const canchas = [
  { id: 1, nombre: "Cancha 1", imagen: imgCancha },
  { id: 2, nombre: "Cancha 2", imagen: imgCancha },
  { id: 3, nombre: "Cancha 3", imagen: imgCancha },
  { id: 4, nombre: "Cancha 4", imagen: imgCancha },
  { id: 5, nombre: "Cancha 5", imagen: imgCancha },
];

const ModalCanchas = ({ isOpen, closeModal, selectedDeporte }) => {

  // const [selectedCancha, setSelectedCancha] = useSelectedCancha();

  const handleCardClick = (cancha) => {
      // setSelectedCancha(cancha);
    };

  const renderCards = (canchas) => {
    return (
      <>
        {canchas.map((cancha) => (
          <CardDeporte
            key={cancha.id}
            deporte={cancha}
            onClick={() => handleCardClick(cancha)}
          />
        ))}
      </>
    );
  };


  return (
    <div className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container">
        <div className="modal-titulo">
          <h1>{selectedDeporte ? selectedDeporte.nombre : "Deporte seleccionado"}</h1>
        </div>
        <div className="modal-seleccionar">
          <h2>Seleccione la cancha</h2>
        </div>
        
        <div className="cards-modal">
          {renderCards(canchas)}
        </div>
        <div className="modal-botones-canchas">
        <button className="modal-reservar-implemento">Seleccionar Horario</button>
          <button className="modal-cancelar" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCanchas;
