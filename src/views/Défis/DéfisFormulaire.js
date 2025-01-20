import React, { useState } from 'react';

const DefiFormulaire = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour gérer la soumission du formulaire
    console.log('Titre:', titre);
    console.log('Description:', description);
    console.log('Date:', date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default DefiFormulaire;
