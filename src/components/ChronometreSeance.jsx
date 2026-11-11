import React, { useState, useEffect } from 'react';

export default function ChronometreSeance() {
  const [secondes, setSecondes] = useState(0);
  const [estActif, setEstActif] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (estActif) {
      intervalId = setInterval(() => {
        setSecondes((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [estActif]);

  const formatTemps = (totalSecondes) => {
    const mins = Math.floor(totalSecondes / 60);
    const secs = totalSecondes % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const reinitialiser = () => {
    setEstActif(false);
    setSecondes(0);
  };

  return (
    <div className="card">
      <h2 className="card-title">Chronomètre d'Effort (HIIT)</h2>

      <div className="chrono-display">{formatTemps(secondes)}</div>

      <div className="chrono-actions">
        <button
          type="button"
          className={`btn ${estActif ? 'btn-warning' : 'btn-primary'}`}
          onClick={() => setEstActif(!estActif)}
        >
          {estActif ? 'Mettre en pause' : 'Démarrer la séance'}
        </button>
        <button type="button" className="btn btn-outline" onClick={reinitialiser}>
          Réinitialiser
        </button>
      </div>

      <div className="note">
        Nettoyage : <code>clearInterval()</code> est appelé lors de la pause ou du démontage du composant.
      </div>
    </div>
  );
}
