// src/services/authService.js
import axios from "axios";

// URL de l'API (à ajuster en fonction de ton environnement)
const API_URL = "http://localhost:3000"; // Remplace par l'URL de ton API si elle est différente

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email: username, password });
    // Sauvegarde le token dans le localStorage
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data; // Renvoie les données récupérées (token ou autres infos utilisateur)
  } catch (error) {
    // Gestion améliorée des erreurs
    if (error.response) {
      throw error.response.data; // Si réponse du serveur avec erreur
    } else if (error.request) {
      throw new Error("Problème de réseau ou serveur non disponible.");
    } else {
      throw new Error(error.message || "Erreur inconnue");
    }
  }
};

const isAuthenticated = () => {
  // Vérifie si le token est stocké dans le localStorage
  return !!localStorage.getItem("token");
};

const logout = () => {
  // Supprime le token du localStorage lors de la déconnexion
  localStorage.removeItem("token");
};

export default { login, isAuthenticated, logout };
