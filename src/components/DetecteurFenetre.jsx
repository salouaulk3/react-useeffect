import React, { useState, useEffect } from 'react';

export default function DetecteurFenetre() {
  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const estGrandEcran = largeur >= 768;

  return (
    <div className="card">
      <h2 className="card-title">Moniteur d'Affichage Salle</h2>

      <div className="window-info">
        <p className="window-stat">
          Largeur courante de l'écran : <strong>{largeur} px</strong>
        </p>
        <div className="badge-tag">
          {estGrandEcran ? 'Mode Écran Salle (Tablette / TV Murale)' : 'Mode Smartphone Coach'}
        </div>
      </div>

      <div className="note">
        Nettoyage : <code>window.removeEventListener('resize')</code> libère l'écouteur global lors du démontage.
      </div>
    </div>
  );
}
