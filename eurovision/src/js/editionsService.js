const API_URL = "http://localhost:8000/editions";

// Obtener todas las ediciones
export const getEditions = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Verificar si la respuesta ya es un array
    if (!Array.isArray(data)) {
      console.error("Error: La API no devolvió un array", data);
      return [];
    }

    return data; // Retornamos directamente el array de ediciones
  } catch (error) {
    console.error("Error al obtener ediciones:", error);
    return [];
  }
};

