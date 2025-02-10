const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/posts');


// importiamo il middleware di gestione errore server
const errorsHandler = require("./middlewares/errorsHandler");

// importiamo il middleware di gestione errore 404
const notFound = require("./middlewares/notFound");

// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));


app.use(express.json());



// definiamo la rotta home
app.get('/', (req, res) => {
    res.send("Ciao sono la rotta Home, della mia pizzeria!!!");
})

// utilizziamo la rotta delle pizze andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)

// utilizzo middleware di gestione errore server
app.use(errorsHandler);

// utilizzo middleware di gestione not found 404
app.use(notFound);

// avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})