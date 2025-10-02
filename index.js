// Este es el código del laboratorio del Dominio 1
// ... (puedes usar ese o uno simple como el siguiente)
exports.handler = async (event) => {
    console.log("Evento recibido:", JSON.stringify(event));
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Respuesta desde la API v2" }),
    };
};