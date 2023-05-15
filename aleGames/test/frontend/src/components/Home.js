import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="juegito">
      <h1>Juegos de Alejandro Gómez - Monlau </h1>
      <nav>
        <ul>
          <li>
            <Link to="/game01">Piedra Papel Tijera</Link>
          </li>
          <li>
            <Link to="/game02">Tamagotchi</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;