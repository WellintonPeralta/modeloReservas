import "./Modal.css";
import { useModal, useSelectedCancha } from "../Modals/useModal";
import ModalHorario from "./ModalHorario";

const ModalResumen = ({ isOpen, closeModal, selectedDeporte }) => {

  const [isOpenModal2, openModal2, closeModal2] = useModal(false);


  const handleHorarioClick = () => {

    // closeModal();
    openModal2();
  };

  return (
    <div className={`modal ${isOpen ? "is-open":""}`}>
      <div className="modal-container">
        <div className="modal-titulo">
          <h1>Resumen de su reserva</h1>
        </div>
        <div className="modal-seleccionar">
          <h2></h2>
        </div>
        <div className="contenedor-informacion">
            <div>
                <h3>Responsable de la reserva : </h3>
                <span>Juan Perez</span>
            </div>
            <div>
                <h3>Deporte seleccionado : </h3>
                <span>Fútbol</span>
            </div>
            <div>
                <h3>Cancha Seleccionada : </h3>
                <span>Cancha 1</span>
            </div>
            <div>
                <h3>Horario Seleccionado : </h3>
                <span>Lunes de 9-10</span>
            </div>
            <div>
                <h3>Implemento Seleccionado : </h3>
                <span>Balón de Fútbol</span>
            </div>

        </div>
        <div className="modal-botones">
          <button className="modal-horario" onClick={handleHorarioClick}>
            Confirmar Reserva
            </button>
          <button className="modal-cancelar" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalResumen;
