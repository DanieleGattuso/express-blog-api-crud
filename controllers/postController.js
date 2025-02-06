// Importiamo i dati dei post
const menu = require('../data/posts');

// Funzione per ottenere la lista dei post con un filtro opzionale per i tag
function index(req, res) {
    // Inizialmente, il menu filtrato corrisponde all'array completo dei post
    let filteredMenu = menu;

    // Controlliamo se nella richiesta è presente un filtro per i tag
    if (req.query.tag) {
        filteredMenu = menu.filter(post => post.tags.includes(req.query.tag));
    }

    // Restituiamo la lista filtrata o l'intero elenco in formato JSON
    res.json(filteredMenu);
}

// Funzione per ottenere i dettagli di un singolo post
function show(req, res) {
    // Convertiamo l'id passato come parametro in un numero intero
    const id = parseInt(req.params.id);

    // Cerchiamo il post corrispondente all'id specificato
    const post = menu.find(post => post.id === id);

    // Se il post non esiste, restituiamo un errore 404 con un messaggio JSON
    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Se il post esiste, restituiamolo in formato JSON
    res.json(post);
}

// Funzione per creare un nuovo post (da implementare se necessario)
function store(req, res) {
    res.send('Creazione nuova pizza (da implementare)');
}

// Funzione per aggiornare completamente un post (da implementare se necessario)
function update(req, res) {
    res.send('Modifica integrale della pizza (da implementare)');
}

// Funzione per eliminare un post
function destroy(req, res) {
    // Convertiamo l'id passato come parametro in un numero intero
    const id = parseInt(req.params.id);

    // Troviamo l'indice del post all'interno dell'array
    const postIndex = menu.findIndex(post => post.id === id);

    // Se il post non esiste, restituiamo un errore 404
    if (postIndex === -1) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Rimuoviamo il post dall'array usando il suo indice
    menu.splice(postIndex, 1);

    // Restituiamo una risposta con stato 204 (Nessun contenuto)
    res.sendStatus(204);
}

// Esportiamo tutte le funzioni per essere utilizzate dal router
module.exports = { index, show, store, update, destroy };