import React, { useState } from 'react';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';

const RoleAssignmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeEmail: '',
    role: '',
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
        Rôle:
        <select name="role" value={formData.role} onChange={handleChange} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md">
          <option value="">Sélectionner un rôle</option>
          <option value="Manager">Manager</option>
          <option value="Développeur">Développeur</option>
          <option value="Designer">Designer</option>
          <option value="Marketing">Marketing</option>
          <option value="Support">Support</option>
        </select>
      </label>
      <input type="submit" value="Attribuer le rôle" className="mt-4 bg-lightBlue-500 hover:bg-lightBlue-600 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-pointer" />
    </form>
  );
};

const RoleAssignmentPage = () => {
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
                "url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjUyOXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fHx8MTY5MjYwMjE3OQ&ixlib=rb-1.2.1&q=80&w=1080')",
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
                    Attribuer des Rôles
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-user-tag mr-2 text-lg text-blueGray-400"></i>{" "}
                    Attribution des rôles aux salariés
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {!submittedData ? (
                        <RoleAssignmentForm onSubmit={handleFormSubmit} />
                      ) : (
                        <div>
                          <h2>Rôle attribué avec succès à {submittedData.employeeName}!</h2>
                          <p>Email: {submittedData.employeeEmail}</p>
                          <p>Rôle: {submittedData.role}</p>
                          <button
                            className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setSubmittedData(null)}
                          >
                            Attribuer un autre rôle
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

export default RoleAssignmentPage; 
