//------------------------ api.js ----------------------------------

const API1 = "http://74.208.70.216:3001/api/usuario";

export const guardarUsuario = async (formData) => {
  try {
    const res = await fetch(API1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convertir el objeto a JSON antes de enviarlo
    });
    return await res.json();
  } catch (error) {
    console.error("Error al guardar el usuario:", error);
    throw error;
  }
};
