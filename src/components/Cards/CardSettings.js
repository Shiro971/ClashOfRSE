import React, { useState, useEffect } from "react";
import Papa from "papaparse";

export default function CardSettings() {
  const [transports, setTransports] = useState([]);
  const [chauffages, setChauffages] = useState([]);
  const [aliments, setAliments] = useState([]);

  const [selectedTransport, setSelectedTransport] = useState("");
  const [selectedChauffage, setSelectedChauffage] = useState("");
  const [selectedAliments, setSelectedAliments] = useState([]);

  // Lire les fichiers CSV
  useEffect(() => {
    const fetchCSV = (path, setState) => {
      Papa.parse(path, {
        download: true,
        header: true,
        complete: (result) => {
          const list = result.data.filter((row) => row.nom);
          setState(list);
        },
        error: (err) => console.error(`Erreur lors du parsing du CSV ${path}`, err),
      });
    };

    fetchCSV("/data/Transport.csv", setTransports);
    fetchCSV("/data/Chauffage.csv", setChauffages);
    fetchCSV("/data/Aliment.csv", setAliments);
  }, []);

  // Gestion des changements
  const handleTransportChange = (e) => {
    setSelectedTransport(e.target.value);
  };

  const handleChauffageChange = (e) => {
    setSelectedChauffage(e.target.value);
  };

  const handleAlimentChange = (e) => {
    const value = e.target.value;
    setSelectedAliments((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((a) => a !== value)
    );
  };

  const handleConfirm = () => {
    // Récupérer l'objet complet pour les éléments sélectionnés
    const selectedTransportObj = transports.find((t) => t.nom === selectedTransport);
    const selectedChauffageObj = chauffages.find((c) => c.nom === selectedChauffage);
    const selectedAlimentsObj = aliments.filter((a) => selectedAliments.includes(a.nom));

    console.log("Transport sélectionné:", selectedTransportObj);
    console.log("Chauffage sélectionné:", selectedChauffageObj);
    console.log("Aliments sélectionnés:", selectedAlimentsObj);

    if (!selectedTransport || !selectedChauffage || selectedAliments.length === 0) {
      alert("Veuillez sélectionner toutes les options.");
      return;
    }

    alert("Données confirmées !");
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Suivi quotidien</h6>
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={handleConfirm}
          >
            Confirmer
          </button>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {/* Section Transports */}
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Transports
        </h6>
        <div className="mb-6">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Quel transport avez-vous pris aujourd'hui ?
          </label>
          <select
            value={selectedTransport}
            onChange={handleTransportChange}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          >
            <option value="">Sélectionnez un transport</option>
            {transports.map((transport, index) => (
              <option key={index} value={transport.nom}>
                {transport.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Section Chauffage */}
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Chauffage
        </h6>
        <div className="mb-6">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Quel type de chauffage avez-vous utilisé aujourd'hui ?
          </label>
          <select
            value={selectedChauffage}
            onChange={handleChauffageChange}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          >
            <option value="">Sélectionnez un chauffage</option>
            {chauffages.map((chauffage, index) => (
              <option key={index} value={chauffage.nom}>
                {chauffage.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Section Aliments */}
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Aliments
        </h6>
        <div>
          {aliments.map((aliment, index) => (
            <div key={index} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aliment.nom}
                  onChange={handleAlimentChange}
                  className="form-checkbox text-lightBlue-500 border-blueGray-300 rounded"
                />
                <span className="ml-2 text-blueGray-600">{aliment.nom}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
