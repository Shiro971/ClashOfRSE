const express = require("express");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const Papa = require("papaparse");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Emplacement du fichier CSV
const csvFilePath = path.join(__dirname, "public", "data", "Profil.csv");

// Fonction pour charger les utilisateurs depuis le CSV
const loadUsersFromCSV = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(csvFilePath, "utf8", (err, csvData) => {
      if (err) {
        console.error("Erreur lors de la lecture du fichier CSV :", err);
        return reject("Erreur serveur lors de la lecture du fichier");
      }

      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (parseError) => {
          console.error("Erreur lors du parsing CSV :", parseError);
          reject("Erreur lors de l'analyse des données CSV");
        },
      });
    });
  });
};

// Middleware d'authentification
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token manquant" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalide" });
    }

    req.user = user; // Attach user information to the request
    next();
  });
};

// Route de connexion
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await loadUsersFromCSV(); // Charger les utilisateurs depuis le CSV

    const user = users.find((u) => u.email === email); // Chercher l'utilisateur par son email
    if (!user) {
      return res.status(401).json({ message: "Identifiants incorrects" }); // Email non trouvé
    }

    // Comparer la date de naissance (mot de passe) avec celle stockée dans le CSV
    if (user.datedenaissance === password) {
      const token = jwt.sign({ email: user.email, userId: user.profilid }, process.env.SECRET_KEY, { // Créer un JWT avec l'email et le profil ID
        expiresIn: "1h", // Expiration du token dans 1 heure
      });
      return res.status(200).json({
        token,
        nom: user.nom, // Récupérer le nom de l'utilisateur
        prenom: user.prenom,
        email: user.email,
        role: user.roleid, // Récupérer le rôle de l'utilisateur
        image: user.image, // Récupérer l'image de l'utilisateur
        profileId: user.profilid, // Récupérer l'ID du profil de l'utilisateur
      });
    } else {
      res.status(401).json({ message: "Mot de passe incorrect" }); // Si le mot de passe (date de naissance) est incorrect
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error); // Log en cas d'erreur
    res.status(500).json({ message: "Erreur serveur" }); // Retourner une erreur serveur
  }
});


// Route d'inscription
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await loadUsersFromCSV();

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà" });
    }

    // Ici, le mot de passe est la date de naissance
    const newUser = { email, datedenaissance: password };

    // Ajouter l'utilisateur au fichier CSV
    const updatedUsers = [...users, newUser];
    const csvContent = Papa.unparse(updatedUsers);

    fs.writeFile(csvFilePath, csvContent, "utf8", (err) => {
      if (err) {
        console.error("Erreur lors de l'écriture du fichier CSV :", err);
        return res.status(500).json({ message: "Erreur serveur lors de l'enregistrement de l'utilisateur" });
      }

      res.status(201).json({ message: "Utilisateur créé avec succès" });
    });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route protégée
app.get("/profile", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Accès autorisé", user: req.user });
});

// Route pour récupérer tous les profils
app.get("/api/profiles", async (req, res) => {
  try {
    const users = await loadUsersFromCSV();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération des données" });
  }
});

// Serve React frontend
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
