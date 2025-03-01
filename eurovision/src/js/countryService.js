// countryService.js

// Función para obtener los países de una edición específica
export const getCountriesByEdition = (db, editionId) => {
    const query = `
        SELECT c.name
        FROM countries c
        JOIN edition_countries ec ON c.id = ec.country_id
        WHERE ec.edition_id = ?;
    `;
    const result = db.exec(query, [editionId]); // Ejecutar la consulta con el id de la edición seleccionada

    if (result.length > 0) {
        return result[0].values.map(row => row[0]); // Extraer y retornar los países
    }

    return []; // Si no hay resultados, retornar un array vacío
};
