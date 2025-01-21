import React from 'react';
import { useForm } from 'react-hook-form';

const DefiForm = ({ onSubmit }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onFormSubmit = (data) => {
    onSubmit(data); // Appelle la fonction de rappel avec les données soumises
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-6 px-4 py-8 bg-white shadow-lg rounded-lg">
      <label className="block text-lg font-medium text-blueGray-700">
        Nom du défi:
        <input type="text" {...register('author', { required: true })} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
        {errors.author && <span className="text-red-500">Ce champ est requis</span>}
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        L'objectif du Defi:
        <input type="text" {...register('name', { required: true })} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
        {errors.name && <span className="text-red-500">Ce champ est requis</span>}
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Défi à réaliser:
        <input type="text" {...register('activity', { required: true })} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
        {errors.activity && <span className="text-red-500">Ce champ est requis</span>}
      </label>
      <input type="submit" value="Envoyer" className="mt-4 bg-lightBlue-500 hover:bg-lightBlue-600 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-pointer" />
    </form>
  );
};

export default DefiForm;
