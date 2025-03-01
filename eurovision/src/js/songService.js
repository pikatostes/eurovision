export const getSongByCountryAndEdition = (db, country, editionId) => {
    const query = `
        SELECT s.title, s.artist, s.information, s.image
        FROM songs s
        JOIN countries c ON s.country_id = c.id
        JOIN edition_countries ec ON c.id = ec.country_id
        WHERE c.name = ? AND ec.edition_id = ?;
    `;
    
    const result = db.exec(query, [country, editionId]);
    
    if (result.length > 0 && result[0].values.length > 0) {
        return result[0].values[0]; // Devuelve los datos de la canción como un array
    } else {
        return null; // Si no se encuentra la canción, devuelve null
    }
};
