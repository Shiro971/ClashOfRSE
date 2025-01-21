import React, { useState } from 'react';
import DefiForm from './DefiForm';

const DefiPage = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (name) => {
    setName(name);
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Défi</h1>
      {!submitted ? (
        <div>
          <p>Bienvenue sur la page du défi ! Veuillez entrer votre nom ci-dessous :</p>
          <DefiForm onSubmit={handleSubmit} />
        </div>
      ) : (
        <div>
          <p>Merci pour votre participation, {name}!</p>
          <button onClick={() => setSubmitted(false)}>Recommencer</button>
        </div>
      )}
    </div>
  );
};

export default DefiPage;
