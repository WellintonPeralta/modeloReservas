import './Main.css' 
import imgDeportes from '../../assets/Porsche GT.jpg'
import { useNavigate } from 'react-router-dom';

const MainInicio = () => {
    const navigate = useNavigate();
    return(
        <div className='fondoInicio'>
            <img src={imgDeportes} alt="deportes"/>
            <button className='btnReservarInicio' onClick={() => navigate('/canchas')}> Reservar</button>
        </div>
    )
}

export default MainInicio;