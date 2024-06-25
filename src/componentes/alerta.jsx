import React from "react";

export default function Alerta({ mensaje, activar, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity  ${
        activar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-purple-800 rounded-lg p-8 z-10 transform transition-transform shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-white">Notificacion</h3>
        <p className="text-white text-2xl">{mensaje}</p>
        <button
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
