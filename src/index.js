import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile/Profile.js";
import Index from "views/Index.js";
import DefiForm from "views/Compte Admin/Défis/DefiForm.js";
import Defi from "views/Compte Admin/Défis/Defi";
import RoleAssignmentPage from "views/Compte Admin/Role/RoleAssignmentForm"; // Ajoute cette ligne
import ProfileCustomizationPage from "views/Compte Admin/ProfileCustomizationForm/ProfileCustomizationForm";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/DefiPage" exact component={DefiPage} /> {/* Corrige la route */}
      <Route path="/defiForm" exact component={DefiForm} /> {/* Corrige la route */}
      <Route path="/RoleAssignmentPage" exact component={RoleAssignmentPage} /> {/* Corrige la route */}
      <Route path="/ProfileCustomizationPage" exact component={ProfileCustomizationPage} /> {/* Corrige la route */}

      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
