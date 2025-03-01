// Obtener todas las ediciones desde sql.js
export const getEditions = async (db) => {
    try {
      // Consultar la base de datos para obtener todas las ediciones
      const result = db.exec("SELECT * FROM editions");
  
      // Verificar si la consulta devolvió algún resultado
      if (result.length === 0 || !result[0].values) {
        console.error("Error: No se encontraron ediciones en la base de datos");
        return [];
      }
  
      // Retornar las ediciones (extraemos los valores)
      return result[0].values.map(row => ({
        id: row[0],
        year: row[1]
      }));
    } catch (error) {
      console.error("Error al obtener ediciones:", error);
      return [];
    }
  };
  
