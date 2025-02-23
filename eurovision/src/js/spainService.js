const API_URL = "http://localhost:8000/songs";

// Obtener todas las canciones de España
export const getSpainSongs = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Verificar si data es un array
    if (!Array.isArray(data)) {
      console.error("Error: La API no devolvió un array", data);
      return [];
    }

    return data.filter(song => song.country === "Spain");
  } catch (error) {
    console.error("Error al obtener canciones de España:", error);
    return [];
  }
};
