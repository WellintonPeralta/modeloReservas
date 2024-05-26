import "./Modal.css";
import { useModal,useSelectedHorario } from "../Modals/useModal";
import ModalImplementos from "./ModalImplementos";

const ModalHorario = ({ isOpen, closeModal, selectedCancha }) => {

    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [selectedHorario, setSelectedHorario] = useSelectedHorario();
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const horas = Array.from({ length: 9 }, (_, index) => index + 8);

    return (
        <div className={`modal ${isOpen ? "is-open" : ""}`}>
            <div className="modal-container">
                <div className="modal-titulo">
                    <h1>Horario de {selectedCancha ? selectedCancha.nombre : "Deporte seleccionado"}</h1>
                </div>
                <div className="modal-seleccionar">
                    <h2>Seleccione la hora</h2>
                </div>
                <div className="contenedorCalendario">
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
                                        className={`celda-dia ${selectedHorario === `${dia}-${hora}-${hora+1}` ? 'seleccionada' : ''}`}
                                        onClick={() => {
                                            // handleAvailabilityClick(`${dia}-${hora}`);
                                            setSelectedHorario(selectedHorario === `${dia}-${hora}-${hora+1}` ? null : `${dia}-${hora}-${hora+1}`);
                                        }}
                                    >
                                        {selectedHorario === `${dia}-${hora}-${hora+1}` ? 'Reservar' : 'Disponible'}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="modal-botones">
                    <button className="modal-cancelar" onClick={openModal2}>
                        Confirmar Reserva
                    </button>
                    <button className="modal-cancelar" onClick={openModal2}>
                        Agregar Implementos
                    </button>
                    <button className="modal-cancelar" onClick={closeModal}>
                        Cancelar
                    </button>
                </div>
                <ModalImplementos
                    isOpen={isOpenModal2}
                    closeModal={closeModal2}
                    selectedHorario={selectedHorario}
                />
            </div>
        </div>
 
    );
};

export default ModalHorario;
