import React, { useState, useEffect } from 'react';

const VILLES_DISPONIBLES = [
  { code: 'Casablanca', nom: 'Casablanca (Anfa Club)' },
  { code: 'Rabat', nom: 'Rabat (Agdal Club)' },
  { code: 'Marrakech', nom: 'Marrakech (Guéliz Club)' }
];

export default function MeteoSalle() {
  const [villeSelectionnee, setVilleSelectionnee] = useState('Casablanca');
  const [donnees, setDonnees] = useState(null);
  const [enChargement, setEnChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controleur = new AbortController();
    const signal = controleur.signal;

    const chargerDonneesMeteo = async () => {
      setEnChargement(true);
      setErreur(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (signal.aborted) {
          return;
        }

        const meteoData = {
          Casablanca: {
            temperature: 22,
            humidite: '68%',
            condition: 'Ensoleillé, brise marine'
          },
          Rabat: {
            temperature: 20,
            humidite: '72%',
            condition: 'Partiellement nuageux'
          },
          Marrakech: {
            temperature: 29,
            humidite: '35%',
            condition: 'Chaud et sec'
          }
        };

        setDonnees(meteoData[villeSelectionnee]);
        setEnChargement(false);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setErreur('Impossible de récupérer les conditions météo.');
          setEnChargement(false);
        }
      }
    };

    chargerDonneesMeteo();

    return () => {
      controleur.abort();
    };
  }, [villeSelectionnee]);

  return (
    <div className="card">
      <h2 className="card-title">Conditions Extérieures des Clubs</h2>

      <div className="form-group">
        <label htmlFor="select-ville">Choisir le club :</label>
        <select
          id="select-ville"
          className="form-select"
          value={villeSelectionnee}
          onChange={(e) => setVilleSelectionnee(e.target.value)}
        >
          {VILLES_DISPONIBLES.map((v) => (
            <option key={v.code} value={v.code}>
              {v.nom}
            </option>
          ))}
        </select>
      </div>

      {enChargement && (
        <div className="weather-loading">Chargement des données météo en cours...</div>
      )}

      {erreur && <div className="weather-error">{erreur}</div>}

      {!enChargement && !erreur && donnees && (
        <div className="weather-results">
          <p>
            <strong>Température :</strong> {donnees.temperature} °C
          </p>
          <p>
            <strong>Humidité de l'air :</strong> {donnees.humidite}
          </p>
          <p>
            <strong>Conditions :</strong> {donnees.condition}
          </p>
        </div>
      )}

      <div className="note">
        Nettoyage : <code>controleur.abort()</code> annule la requête en vol lors d'un changement de club ou d'un démontage.
      </div>
    </div>
  );
}
