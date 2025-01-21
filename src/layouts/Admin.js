import React from "react";
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

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
         <Routes>
                     <Route path="dashboard" element={<Dashboard />} />
                     <Route path="maps" element={<Maps />} />
                     {/* Redirection si tu vas sur /auth */}
                     <Route path="/admin" element={<Navigate to="dashboard" replace />} />
                   </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
