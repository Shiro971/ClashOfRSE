import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import authService from "../../services/authService"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await authService.login(username, password);
      localStorage.setItem("token", response.token); 
      navigate("/admin/dashboard"); 
    } catch (err) {
      console.log("Erreur détaillée:", err); 
      setError(err.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Connexion</small>
              </div>
              <form onSubmit={handleLogin}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-center mt-2">{error}</p>
                )}

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-blueGray-200"
              >
                <small>Mot de passe oublié ?</small>
              </a>
            </div>
            <div className="w-1/2 text-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
