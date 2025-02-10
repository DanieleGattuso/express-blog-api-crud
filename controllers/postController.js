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
    // res.send('Creazione nuovo post ')
    // creiamo il nuovo id incrementando l'ultimo presente
    const newId = posts[posts.length - 1].id + 1;

    // Creiamo un nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo il nuovo post ai posts
    posts.push(newPost);

    // controlliamo
    console.log(posts);

    // Restituiamo lo status corretto e il post appena creata
    res.status(201);

    res.json(newPost);

}

// Funzione per aggiornare completamente un post (da implementare se necessario)
function update(req, res) {
    // res.send('Lista dei post ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // controlliamo se il parametro inserito esiste
    if(!post) {
        // ritorno lo stato di errore 404, non trovato
        res.status(404);

        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    //  modifichiamo i dati del post trovato
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // stampiamo in console i posts
    console.log(posts);

    // ritorniamo l'oggetto modificato
    res.json(post);


}

// Funzionee  per eliminarun post
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
module.exports = { index, show, store, update, destroy }