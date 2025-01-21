import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Composants
import Login from "views/auth/Login";
import Register from "views/auth/Register";
import Navbar from "components/Navbars/AuthNavbar";
import FooterSmall from "components/Footers/FooterSmall";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>

          {/* Routes pour login et register */}
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* Redirection si tu vas sur /auth */}
            <Route path="/" element={<Navigate to="login" replace />} />
          </Routes>

          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
