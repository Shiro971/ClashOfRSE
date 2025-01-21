import React from "react";
import ReactDOM from "react-dom/client"; // Note le changement ici
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

// Utilise createRoot à la place de render pour React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Routes avec layouts */}
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/auth/*" element={<Auth />} />
      {/* Routes sans layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Index />} />
      {/* Redirection pour les chemins non définis */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
