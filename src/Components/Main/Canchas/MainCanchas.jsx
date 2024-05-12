import React, { useState } from 'react';
import imagesData from './ImagenesCanchas';
import '../Main.css'
import { useNavigate } from 'react-router-dom';

const MainCanchas = ()=>{
    const navigate = useNavigate();
    // const [selectedImage, setSelectedImage] = useState({fotoCanchas});
    const [selectedSport, setSelectedSport] = useState('Principal');

    const handleSportClick = (sportName) => {
        // setSelectedImage({fotoCanchas});
        setSelectedSport(sportName);
        updateCanchasContent(sportName);
    };
    
    const updateCanchasContent = (sportName) => {
        const content = renderImages(sportName);
        const canchasElement = document.querySelector('.canchas');
        canchasElement.innerHTML = content;
    };

    const renderImages = (sportName) => {
        const images = imagesData[sportName];
        console.log(images)
        
        return (
          <div className="canchas-images">
            {images.map((image) => (
              <div className="cancha-image" key={image.title}>
                <img src={image.src} alt={image.src}/>
                
              </div>
            ))}
          </div>
        );
    };
    


    return(
        <div className="principal">
        <div className="titulo_contenedor">
            <h3>Canchas</h3>
        </div>
        <div className="container">
            <div className="nombre-deportes">
                <div className='deporte' onClick={() => handleSportClick('Basquet')}>Básquet</div>
                <div className='deporte' onClick={() => handleSportClick('Volley')}>Volley</div>
                <div className='deporte' onClick={() => handleSportClick('Futbol')}>Fútbol</div>
                <div className='deporte' onClick={() => handleSportClick('Futbol Sala')}>Fútbol Sala</div>
                <div className='deporte' onClick={() => handleSportClick('Pista')}>Pista</div>
        
            </div>

            <div className="canchas">
                {renderImages(selectedSport)}
            </div>
        </div>
        <div className="botones">
            <button onClick= {() => navigate('/implementos')}>Reservar</button>
            <button onClick= {() => navigate('/')}>Cancelar</button>

        </div>
    </div>

    )
} 

export default MainCanchas;