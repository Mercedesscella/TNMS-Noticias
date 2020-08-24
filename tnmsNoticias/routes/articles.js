var express = require('express');
var router = express.Router();
var articlesController = require('../controllers/articlesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Articulos o noticias' );
});

router.get('/cargar', articlesController.cargar);
router.post('/cargar', articlesController.create);
router.get ('/comentar', articlesController.comentar);
router.get('/modificar', articlesController.modificar);
router.get('/borrar', articlesController.borrar);
router.get('/listar', articlesController.listar);
//detalle de las noticias.
router.get('/:id', articlesController.detail)

module.exports = router;