// spainService.js
import initDatabase from '../../database'; // Asumimos que initDatabase está exportado desde la base de datos

export const getSpainSongs = async () => {
  try {
    const db = await initDatabase(); // Inicializamos la base de datos

    // Realizamos la consulta para obtener las canciones de España
    const query = `
      SELECT s.id, s.title, s.artist, s.image, s.information, e.year AS edition_year
      FROM songs s
      JOIN countries c ON s.country_id = c.id
      JOIN editions e ON s.edition_id = e.id
      WHERE c.name = 'Spain';
    `;
    
    const result = db.exec(query); // Ejecutamos la consulta

    // Si la consulta devuelve resultados, los procesamos
    if (result.length > 0) {
      const songs = result[0].values.map((row) => ({
        id: row[0],
        title: row[1],
        artist: row[2],
        image: row[3],
        information: row[4],
        edition_year: row[5],
      }));

      return songs; // Retornamos las canciones filtradas
    } else {
      console.error("No se encontraron canciones de España.");
      return [];
    }
  } catch (error) {
    console.error("Error al obtener canciones de España:", error);
    return [];
  }
};
