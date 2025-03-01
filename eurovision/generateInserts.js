import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch'; // Asegúrate de tener node-fetch instalado

// Convertir import.meta.url a una ruta de archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define las rutas a tus archivos JSON
const countriesFilePath = path.join(__dirname, 'countries.json');
const editionsFilePath = path.join(__dirname, 'editions.json');

// Función para cargar los datos de Eurovisión
async function fetchEurovisionData() {
    try {
        // Lee los archivos locales de países y ediciones de forma sincrónica
        const countriesData = fs.readFileSync(countriesFilePath, 'utf-8');
        const editionsData = fs.readFileSync(editionsFilePath, 'utf-8');

        // Parseamos los datos locales de países y ediciones
        const countries = JSON.parse(countriesData);
        const editions = JSON.parse(editionsData);

        // Mapa de los países para obtener su id rápido
        const countryMap = countries.reduce((acc, country) => {
            acc[country.country_code] = country.id;
            return acc;
        }, {});

        let inserts = [];

        // Recorremos las ediciones y realizamos una solicitud por cada año
        for (let edition of editions) {
            const year = edition.year;

            // Usamos fetch para obtener los datos de la API de concursos de Eurovisión por año
            const response = await fetch(`https://eurovisionapi.runasp.net/api/contests/${year}`);
            if (!response.ok) {
                console.warn(`Error al obtener los datos para el año ${year}: ${response.statusText}`);
                continue; // Si hay un error en la API, pasamos al siguiente año
            }

            const contest = await response.json();

            // Verificamos que contest.contestants sea un array antes de iterar
            if (Array.isArray(contest.contestants)) {
                // Acumulamos los valores de país para este año
                const values = [];

                for (let contestant of contest.contestants) {
                    const countryCode = contestant.country;
                    const countryId = countryMap[countryCode];

                    if (!countryId) {
                        console.warn(`No se encontró el ID del país para ${countryCode}`);
                        continue; // Si no encontramos el país en el mapa, lo omitimos
                    }

                    // Añadimos el par (edition_id, country_id) al arreglo de valores para este año
                    values.push(`(${edition.id}, ${countryId})`);
                }

                // Si tenemos valores para este año, generamos un solo INSERT
                if (values.length > 0) {
                    inserts.push(`INSERT INTO edition_countries (edition_id, country_id) VALUES ${values.join(', ')};`);
                }
            } else {
                console.warn(`No hay concursantes para la edición del año ${year}`);
            }
        }

        // Escribimos todos los inserts en un archivo .sql
        if (inserts.length > 0) {
            const sqlFilePath = path.join(__dirname, 'inserts.sql');
            fs.writeFileSync(sqlFilePath, inserts.join('\n'), 'utf-8');
            console.log(`Se generaron los inserts en ${sqlFilePath}`);
        } else {
            console.log('No se generaron inserts');
        }

    } catch (error) {
        console.error('Error leyendo los archivos o procesando los datos:', error);
    }
}

// Llamamos a la función para ejecutar la lógica
fetchEurovisionData();
