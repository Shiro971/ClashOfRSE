import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';
import DefiForm from './DefiForm';

const DefiPage = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  useEffect(() => {
    axios.get('/api/get-defis')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, [submittedData]);

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
                    {/* Contenu optionnel */}
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    {/* Contenu optionnel */}
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      {/* Contenu optionnel */}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Défi
                  </h3>
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
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {data.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Liste des défis soumis :
                          </h3>
                          <ul>
                            {data.map((defi) => (
                              <li key={defi.id} className="my-2">
                                <p>Nom du défi: {defi.name}</p>
                                <p>Activité: {defi.activity}</p>
                                <p>Auteur: {defi.author}</p>
                              </li>
                            ))}
                          </ul>
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
