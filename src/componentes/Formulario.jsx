import React, { useState } from "react";
import { guardarUsuario } from "../api/api";
import Alerta from "./alerta";

export default function Formulario() {
  const [Nombre, setNombre] = useState("");
  const [Correo, SetCorreo] = useState("");
  const [ApellidoP, SetApellidoP] = useState("");
  const [ApellidoM, SetApellidoM] = useState("");
  const [Dia, setDia] = useState("");
  const [Mes, setMes] = useState("");
  const [Año, setAño] = useState("");
  const [error, setError] = useState("");
  const [AlertaActivar, setAlertaActivar] = useState(false);
  const [AlertaMensaje, setAlertaMensaje] = useState("");

  const NombreEscribir = (event) => {
    setNombre(event.target.value);
  };

  const ApellidoPescribir = (event) => {
    SetApellidoP(event.target.value);
  };

  const ApellidoMescribir = (event) => {
    SetApellidoM(event.target.value);
  };

  const CorreoEscribir = (event) => {
    SetCorreo(event.target.value);
  };

  const DiaEscribir = (event) => {
    const value = event.target.value;
    if (value <= 31) {
      // Validar que el día no exceda el máximo de 31
      setDia(value);
    }
  };

  const MesEscribir = (event) => {
    const value = event.target.value;
    if (value <= 12) {
      // Validar que el mes no exceda el máximo de 12
      setMes(value);
    }
  };

  const AñoEscribir = (event) => {
    setAño(event.target.value);
  };

  const handleBlurDia = () => {
    // Añadir cero al día si es menor a 10 y no está vacío
    if (Dia !== "" && Dia < 10 && Dia.length === 1) {
      setDia(`0${Dia}`);
    }
  };

  const handleBlurMes = () => {
    // Añadir cero al mes si es menor a 10 y no está vacío
    if (Mes !== "" && Mes < 10 && Mes.length === 1) {
      setMes(`0${Mes}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const FechaN = `${Dia}/${Mes}/${Año}`;

    const formData = {
      Correo,
      Nombre,
      ApellidoP,
      ApellidoM,
      FechaN,
    };

    try {
      const respuesta = await guardarUsuario(formData);
      SetCorreo("");
      setNombre("");
      SetApellidoP("");
      SetApellidoM("");
      setDia("");
      setMes("");
      setAño("");
      setAlertaActivar(true);
      setAlertaMensaje("¡Datos enviados exitosamente!");
    } catch (error) {
      setError("Los datos son incorrectos. Por favor, inténtalo de nuevo.");
    }
  };

  const closeAlerta = () => {
    setAlertaActivar(false);
  };

  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-purple-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-indigo-950 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Formulario
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Nombre</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              value={Nombre}
              onChange={NombreEscribir}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Apellido Paterno</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              value={ApellidoP}
              onChange={ApellidoPescribir}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Apellido Materno</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              value={ApellidoM}
              onChange={ApellidoMescribir}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Fecha de Nacimiento</label>
            <div className="flex space-x-2">
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 w-1/3 focus:bg-gray-800 focus:outline-none"
                type="number"
                placeholder="Día"
                value={Dia}
                onChange={DiaEscribir}
                onBlur={handleBlurDia}
              />
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 w-1/3 focus:bg-gray-800 focus:outline-none"
                type="number"
                placeholder="Mes"
                value={Mes}
                onChange={MesEscribir}
                onBlur={handleBlurMes}
              />
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 w-1/3 focus:bg-gray-800 focus:outline-none"
                type="number"
                placeholder="Año"
                value={Año}
                onChange={AñoEscribir}
              />
            </div>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Correo</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              value={Correo}
              onChange={CorreoEscribir}
            />
          </div>

          {error && <p className="text-green-500 text-center">{error}</p>}
          <button
            className="w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <Alerta
        mensaje={AlertaMensaje}
        activar={AlertaActivar}
        onClose={closeAlerta}
      />
    </div>
  );
}
