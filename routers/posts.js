// importiamo express e utlizziamo la parte di routing
const express = require('express')
const router = express.Router();

// Importiamo le funzioni del controller
const postController = require('../controllers/postController');

// rotte di CRUD delle pizze
// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', function (req, res) {
    router.post('/', postController.store);
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    router.put('/:id', postController.update);
});

// destroy
router.delete('/:id', postController.destroy);

// esportiamo il modulo del router
module.exports = router;