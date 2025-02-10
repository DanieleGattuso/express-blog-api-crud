// Creiamo la funzione per gestire gli errori
function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
    });
};

module.exports = errorsHandler;