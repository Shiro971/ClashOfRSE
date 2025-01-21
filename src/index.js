import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/styles/tailwind.css';

// layouts
import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';

// views without layouts
import Landing from 'views/Landing.js';
import Profile from 'views/Profile/Profile.js';
import Index from 'views/Index.js';
import DefiPage from 'views/Compte Admin/Défis/DefiPage'; // Corrige l'importation ici
import DefiForm from 'views/Compte Admin/Défis/DefiForm'; // Corrige l'importation ici
import RoleAssignmentPage from 'views/Compte Admin/Role/RoleAssignmentForm';
import ProfileCustomizationPage from 'views/Compte Admin/ProfileCustomizationForm/ProfileCustomizationForm';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/defiPage" exact component={DefiPage} /> {/* Corrige la route */}
      <Route path="/defiForm" exact component={DefiForm} /> {/* Corrige la route */}
      <Route path="/RoleAssignmentPage" exact component={RoleAssignmentPage} />
      <Route path="/ProfileCustomizationPage" exact component={ProfileCustomizationPage} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
