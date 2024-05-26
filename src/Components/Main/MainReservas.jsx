import imgDeporte from "../../assets/basquetDibujo.jpg";
import ModalCanchas from "./Modals/ModalCanchas";
import CardDeporte from "./CardDeporte";
import './Main.css' 
import { useModal, useSelectedDeporte } from "./Modals/useModal";

const deportes = [
  { id: 1, nombre: "Basquet", imagen: imgDeporte },
  { id: 2, nombre: "Futbol", imagen: imgDeporte },
  { id: 3, nombre: "Futbol Sala", imagen: imgDeporte },
  { id: 4, nombre: "Volley", imagen: imgDeporte },
  { id: 5, nombre: "Atletismo", imagen: imgDeporte },
  { id: 6, nombre: "Otros deportes", imagen: imgDeporte },
];

const MainReservas = () => {
  const [isOpenModel, openModal, closeModal] = useModal(false);
  const [selectedDeporte, setSelectedDeporte] = useSelectedDeporte();

  const handleCardClick = (deporte) => {
    setSelectedDeporte(deporte);
    openModal();
  };

  const renderCards = (deportes) => {
    return (
      <>
        {deportes.map((deporte) => (
          <CardDeporte
            key={deporte.id}
            deporte={deporte}
            onClick={() => handleCardClick(deporte)}
          />
        ))}
      </>
    );
  };

  return (
    <div className="principal">
      <div className="titulo_contenedor">
        <h3>Reservar</h3>
      </div>
      <div className="cards-deportes">
        {renderCards(deportes)}
      </div>
      <ModalCanchas
        isOpen={isOpenModel}
        closeModal={closeModal}
        selectedDeporte={selectedDeporte} 
      />
    </div>
  );
};

export default MainReservas;
