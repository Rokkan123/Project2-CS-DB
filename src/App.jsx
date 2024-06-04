import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import GunDetails from "./page/GunDetails";
import EditGunDetails from "./page/EditGunDetails";
import AllGunsPage from "./page/AllGunsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddGunPage from "./page/AddGunPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weapons" element={<AllGunsPage />} />
          <Route path="/weapons/:weaponId" element={<GunDetails />} />
          <Route path="/weapons/:weaponId/edit" element={<EditGunDetails />} />
          <Route path="/addweapon" element={<AddGunPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
