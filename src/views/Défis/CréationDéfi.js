import React, { useState } from 'react';
import CréationDéfi from '../components/CréationDéfi';

const CréationDéfi= () => {
  const [defis, setDefis] = useState([
    { id: 1, title: 'Défi 1', description: 'Description du défi 1' },
    { id: 2, title: 'Défi 2', description: 'Description du défi 2' },
    // Ajoute autant de défis que tu veux
  ]);

  const handleParticiper = (id) => {
    alert(`Tu participes au défi ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Liste des Défis</h1>
      {defis.map((defi) => (
        <CréationDéfi
          key={defi.id}
          title={defi.title}
          description={defi.description}
          onParticiper={() => handleParticiper(defi.id)}
        />
      ))}
    </div>
  );
};

export default CréationDéfi;
