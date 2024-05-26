import "./Modal.css";
import imgCancha from "../../../assets/canchaDibujo.jpg";
import { useModal, useSelectedCancha } from "../Modals/useModal";
import CardDeporte from "../CardDeporte";
import ModalHorario from "./ModalHorario";

const canchas = [
  { id: 1, nombre: "Cancha 1", imagen: imgCancha },
  { id: 2, nombre: "Cancha 2", imagen: imgCancha },
  { id: 3, nombre: "Cancha 3", imagen: imgCancha },
  // { id: 4, nombre: "Cancha 4", imagen: imgCancha },
  // { id: 5, nombre: "Cancha 5", imagen: imgCancha },
];

const ModalCanchas = ({ isOpen, closeModal, selectedDeporte }) => {

  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [selectedCancha, setSelectedCancha] = useSelectedCancha();

  const handleCardClick = (cancha) => {
    setSelectedCancha(cancha);
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

  const handleHorarioClick = () => {

    // closeModal();
    openModal2();
  };

  return (
    <div className={`modal ${isOpen ? "is-open":""}`}>
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
        <div className="modal-botones">
          <button className="modal-horario" onClick={handleHorarioClick}>
            Seleccionar Horario
            </button>
          <button className="modal-cancelar" onClick={closeModal}>
            Cancelar
          </button>
        </div>
        <ModalHorario
          isOpen={isOpenModal2}
          closeModal={closeModal2}
          selectedCancha={selectedCancha}
        />
      </div>
    </div>
  );
};

export default ModalCanchas;
