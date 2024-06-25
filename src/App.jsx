import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Formulario />} />
    </Routes>
  );
}

export default App;
