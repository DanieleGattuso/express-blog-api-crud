// Creiamo la funzione per la pagina non trovata

function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

module.exports = notFound;