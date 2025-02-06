const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/posts');


// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));

// definiamo la rotta home
app.get('/', (req, res) => {
    res.send("Ciao sono la rotta Home, della mia pizzeria!!!");
})

// utilizziamo la rotta delle pizze andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)


// avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})