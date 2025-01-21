import React from 'react';

const DefiPage = ({ data }) => {
  return (
    <div>
      <h1>Données Soumises :</h1>
      <p>Nom: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default DefiPage;
