import "./Modal.css";
import imgImplemento from "../../../assets/basquetDibujo.jpg";
import { useModal, useSelectedImplemento} from "./useModal";
import ModalResumen from "./ModalResumen";
import CardDeporte from "../CardDeporte";

const implementos = [
  { id: 1, nombre: "Balón de Fútbol", imagen: imgImplemento },
  { id: 2, nombre: "Balón de Básquet", imagen: imgImplemento },
  { id: 3, nombre: "Balón de Fútbol Sala", imagen: imgImplemento },
  { id: 4, nombre: "Balón de Volley y Red", imagen: imgImplemento },
  { id: 5, nombre: "Raqueta y Pelota", imagen: imgImplemento },
];

const ModalImplementos = ({ isOpen, closeModal, selectedHorario }) => {

  const [isOpenModel2, openModal2, closeModal2] = useModal(false);
  const [selectedImplemento, setSelectedImplemento] = useSelectedImplemento();

  const handleCardClick = (implemento) => {
    setSelectedImplemento(implemento);
  };

  const renderCards = (implementos) => {
    return (
      <>
        {implementos.map((implemento) => (
          <CardDeporte
            key={implemento.id}
            deporte={implemento}
            onClick={() => handleCardClick(implemento)}
          />
        ))}
      </>
    );
  };


  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal-container">
        <div className="modal-titulo">
          <h1>Implementos en el Horario: {selectedHorario ? selectedHorario: "Deporte seleccionado"}</h1>
        </div>
        <div className="modal-seleccionar">
          <h2>Seleccione el Implemento</h2>
        </div>

        <div className="cards-modal">
          {renderCards(implementos)}
        </div>
        <div className="modal-botones">
          <button className="modal-reservar" onClick={openModal2}>
            Reservar
          </button>
          <button className="modal-cancelar" onClick={closeModal}>
            Cancelar
          </button>
        </div>
         <ModalResumen 
          isOpen={isOpenModel2}
          closeModal={closeModal2}
          selectedImplemento={selectedImplemento}
        />
      </div>
    </div>
  );
};

export default ModalImplementos;
