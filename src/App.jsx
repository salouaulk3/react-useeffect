import React, { useState } from 'react';
import ChronometreSeance from './components/ChronometreSeance';
import DetecteurFenetre from './components/DetecteurFenetre';
import MeteoSalle from './components/MeteoSalle';
import './App.css';

export default function App() {
  const [afficherChrono, setAfficherChrono] = useState(true);

  return (
    <div className="container">
      <header className="header">
        <h1>FitnessHub Tracker</h1>
        <p>Atelier Pratique Dédié au Hook useEffect (Cycle de vie &amp; Nettoyage)</p>
      </header>

      <div className="toolbar">
        <div className="toolbar-text">
          État du composant : <strong>{afficherChrono ? 'Monté' : 'Démonté'}</strong>
        </div>
        <button
          type="button"
          className={`btn ${afficherChrono ? 'btn-danger' : 'btn-primary'}`}
          onClick={() => setAfficherChrono(!afficherChrono)}
        >
          {afficherChrono ? 'Masquer le chronomètre (Démonter)' : 'Afficher le chronomètre (Monter)'}
        </button>
      </div>

      <main>
        {afficherChrono && <ChronometreSeance />}
        <DetecteurFenetre />
        <MeteoSalle />
      </main>

      <footer className="footer">
        <p>TP 12 • Gestion des effets avec React useEffect</p>
      </footer>
    </div>
  );
}
