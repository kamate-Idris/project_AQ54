/**
 * Fonction definissant URL de base de l'API
 * 
 * @param {string} url 
 * @returns 
 */
export async function baseURl(url) {
    try {
        const res = await fetch(`https://airqino-api.magentalab.it/${url}`)
        return await res.json()
    } catch (error) {
        console.log(error);
    }
}