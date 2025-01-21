import React, { useState } from 'react';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';

const ProfileCustomizationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeEmail: '',
    jobTitle: '',
    department: '',
    profilePicture: '',
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
        Nom de l'employé:
        <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Email de l'employé:
        <input type="email" name="employeeEmail" value={formData.employeeEmail} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Titre du poste:
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Département:
        <input type="text" name="department" value={formData.department} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
      </label>
      <label className="block text-lg font-medium text-blueGray-700">
        Photo de profil:
        <input type="url" name="profilePicture" value={formData.profilePicture} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="URL de l'image" />
      </label>
      <input type="submit" value="Personnaliser le profil" className="mt-4 bg-lightBlue-500 hover:bg-lightBlue-600 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-pointer" />
    </form>
  );
};

const ProfileCustomizationPage = () => {
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
                "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjUyOXwwfDF8c2VhcmNofDF8fHByb2ZpbGV8ZW58MHx8fHwxNjAyNTUwMTky&ixlib=rb-1.2.1&q=80&w=1080')",
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
                    Personnaliser le Profil
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-user-edit mr-2 text-lg text-blueGray-400"></i>{" "}
                    Personnalisation des profils des salariés
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {!submittedData ? (
                        <ProfileCustomizationForm onSubmit={handleFormSubmit} />
                      ) : (
                        <div>
                          <h2>Profil personnalisé avec succès pour {submittedData.employeeName}!</h2>
                          <p>Email: {submittedData.employeeEmail}</p>
                          <p>Titre du poste: {submittedData.jobTitle}</p>
                          <p>Département: {submittedData.department}</p>
                          <img src={submittedData.profilePicture} alt="Profil" className="mt-4 max-w-xs rounded-md shadow-md" />
                          <button
                            className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setSubmittedData(null)}
                          >
                            Personnaliser un autre profil
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

export default ProfileCustomizationPage; 
