import React, { useState } from 'react';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';

const DefiForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    name: '',
    email: '',
    activity: '',
    duration: '',
    feedback: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-4 py-8 bg-white shadow-lg rounded-lg">
      <label className="block text-lg font-medium text-blueGray-700">
        Nom de l'auteur du défi:
        <input type="text" name="author" value={formData.author} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Nom du participant:
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Défi à réalisée:
        <input type="text" name="activity" value={formData.activity} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Durée de l'activité (en minutes):
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <input type="submit" value="Envoyer" className="mt-4 bg-lightBlue-500 hover:bg-lightBlue-600 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-pointer" />
    </form>
  );
};

const DefiPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjAwfDB8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTc0OTkxMzJ8&ixlib=rb-4.0.3&q=80&w=1080')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      
                      
                      
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Défi 
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-calendar-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Date de réalisation
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-clock mr-2 text-lg text-blueGray-400"></i>
                    Temps pour le réaliser
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {!submittedData ? (
                        <DefiForm onSubmit={handleFormSubmit} />
                      ) : (
                        <div>
                          <h2>Merci pour votre participation, {submittedData.name}!</h2>
                          <p>Email: {submittedData.email}</p>
                          <p>Activité réalisée: {submittedData.activity}</p>
                          <p>Durée de l'activité: {submittedData.duration} minutes</p>
                          <button
                            className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setSubmittedData(null)}
                          >
                            Recommencer
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DefiPage;
