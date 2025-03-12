import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaXTwitter, FaLinkedin, FaBluesky, FaTiktok } from 'react-icons/fa6';
import Countdown from 'react-countdown';
import './App.css';
import minhaImagem from './assets/logo.png';

function App() {
  // Função para personalizar o layout da contagem regressiva
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown">
        <div className="countdown-item">
          <span>{days}</span> <span>DIAS</span>
        </div>
        <div className="countdown-item">
          <span>{hours}</span> <span>HORAS</span>
        </div>
        <div className="countdown-item">
          <span>{minutes}</span> <span>MINUTOS</span>
        </div>
        <div className="countdown-item">
          <span>{seconds}</span> <span>SEGUNDOS</span>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <img src={minhaImagem} alt="Logo da Coral Cobra Games" width="450" />
      <div className="overlay">
        <div className="content">
          <div class="video-container">
            <iframe id="youtube-player" width="560" height="315" 
              src="https://www.youtube.com/embed/X2GarMIqTrI?autoplay=0&showinfo=0&rel=0&iv_load_policy=3&fs=0&disablekb=1&mute=0" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen>
            </iframe>
          </div>
          <div>
            <h1>Em breve estaremos de volta!</h1>
          </div>
          <Countdown date={new Date('2025-06-01T00:00:00')} renderer={renderer}/>
          <div className="social-links">
            <a href="https://x.com/coralcobragames" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={40} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/coralcobragames" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@coralcobragames" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={40} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/coral-cobra-games" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@CoralCobraGames" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={40} className="social-icon" />
            </a>
            <a href="https://bsky.app/profile/coralcobragames.bsky.social" target="_blank" rel="noopener noreferrer">
              <FaBluesky size={40} className="social-icon" />
            </a>
            <a href="mailto:contato@coralcobragames.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={40} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <footer class="footer">
        &copy; 2025 Coral Cobra Games. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
