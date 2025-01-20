import React, { useState } from 'react';

const CréationDéfi = ({ title, description, onParticiper }) => {
  return (
    <div className="border p-4 m-4 rounded shadow">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <button onClick={onParticiper} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Participer
      </button>
    </div>
  );
};

export default CréationDéfi;
