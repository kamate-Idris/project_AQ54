/**
 * Fonction définissant l'URL de base de l'API
 * 
 * @param {string} url 
 * @param {Object} headers 
 * @returns {Promise<any>}
 */
export async function baseURl(url, headers = {}) {
    try {
        const response = await fetch(`https://airqino-api.magentalab.it/${url}`, headers);

        // Vérifier si la réponse a réussi (statut 2xx)
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        // Essayez de traiter la réponse en tant que JSON
        try {
            const data = await response.json();
            return data;
        } catch (jsonError) {
            console.log("La réponse n'est pas JSON, essayez de traiter en tant que texte.");
        }

        // Essayez de traiter la réponse en tant que texte
        try {
            const textData = await response.text();
            return textData;
        } catch (textError) {
            console.log("Impossible de traiter la réponse en tant que texte.");
            throw textError;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
