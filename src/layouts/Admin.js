import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";

// views
import Dashboard from "views/admin/Dashboard";
import Maps from "views/admin/Maps";
import Settings from "views/admin/Settings";
import Tables from "views/admin/Tables";

import Papa from "papaparse";

export default function Admin() {
  const [transportCO2, setTransportCO2] = useState(0);
  const [chauffageCO2, setChauffageCO2] = useState(0);
  const [alimentCO2, setAlimentCO2] = useState(0);

  // Charger les données depuis les fichiers CSV
  useEffect(() => {
    // Charger le CSV Transport et calculer les émissions
    Papa.parse("/data/TransportEmission.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const totalTransportCO2 = result.data.reduce(
          (sum, row) => sum + parseFloat(row.co2parkm || 0),
          0
        );
        setTransportCO2(totalTransportCO2.toFixed(2));
      },
    });

    // Charger le CSV Chauffage et calculer les émissions
    Papa.parse("/data/ChauffageEmission.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const totalChauffageCO2 = result.data.reduce(
          (sum, row) => sum + parseFloat(row.co2parkm || 0),
          0
        );
        setChauffageCO2(totalChauffageCO2.toFixed(2));
      },
    });

    // Charger le CSV Alimentation et calculer les émissions
    Papa.parse("/data/AlimentationEmission.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const totalAlimentCO2 = result.data.reduce(
          (sum, row) => sum + parseFloat(row.co2emisalimentation || 0),
          0
        );
        setAlimentCO2(totalAlimentCO2.toFixed(2));
      },
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header avec statistiques */}
        <HeaderStats
          transportCO2={transportCO2}
          chauffageCO2={chauffageCO2}
          alimentCO2={alimentCO2}
        />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="maps" element={<Maps />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tables" element={<Tables />} />
            <Route path="/admin" element={<Navigate to="dashboard" replace />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
