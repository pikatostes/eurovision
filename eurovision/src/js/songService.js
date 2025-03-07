export const getSongByCountryAndEdition = (db, country, editionId) => {
    const query = `
        SELECT s.title, s.artist, s.information, s.image
        FROM songs s
        JOIN countries c ON s.country_id = c.id
        WHERE c.name = ? AND s.edition_id = ?;
    `;
    
    const result = db.exec(query, [country, editionId]);
    
    if (result.length > 0 && result[0].values.length > 0) {
        return result[0].values[0]; // Devuelve los datos de la canción
    } else {
        return null; // Si no hay resultados
    }
};
