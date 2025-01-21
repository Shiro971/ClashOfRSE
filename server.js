const express = require("express");
const cors = require("cors");
const path = require("path");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Base de données simulée avec un utilisateur ayant un mot de passe haché
const users = [
    { email: "admin@example.com", password: "$2a$10$uRlHCGjKC1Y.sn0rV4gTPOqZMXgtpcPitiQSlFx.nt424I/PalVSO" }
];
console.log("SECRET_KEY: ", process.env.SECRET_KEY);

// Middleware d'authentification
const authenticateToken = (req, res, next) => {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" });

    if (!token) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide' });
        }

        req.user = user; // Stocke les informations de l'utilisateur dans la requête
        next();
    });
};

// Route de connexion
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Email reçu : ", email); 

    const user = users.find((u) => u.email === email);
    if (user) {
        console.log("Utilisateur trouvé : ", user); 

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) console.error(err);
            else console.log("Haché généré : ", hashedPassword);
        });

        // Comparaison du mot de passe (en clair avec le haché)
        bcrypt.compare(password, user.password, (err, isPasswordCorrect) => {
            if (err) {
                console.log("Erreur bcrypt : ", err);
                return res.status(500).json({ message: "Erreur serveur" });
            }

            console.log("Mot de passe en clair : ", password);
            console.log("Mot de passe haché : ", user.password);
            console.log("Mot de passe valide ? ", isPasswordCorrect); 

            if (isPasswordCorrect) {
                const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: "Mot de passe incorrect" });
            }
        });
    } else {
        res.status(401).json({ message: "Identifiants incorrects" });
    }
});



// Route d'inscription
app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "L'utilisateur existe déjà" });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: "Utilisateur créé avec succès" });
});

// Route protégée par JWT
app.get("/profile", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Accès autorisé", user: req.user });
});

// Servir le frontend React
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
