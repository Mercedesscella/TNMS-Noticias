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

//rutas para aceder a diferentes clases de noticias:
router.get('/ultimomomento', articlesController.ultimomomento);
router.get('/politica', articlesController.politica);
router.get('/economia', articlesController.economia);
router.get('/deportes', articlesController.deportes);
router.get('/elclima', articlesController.elclima);

//detalle de las noticias.
router.get('/:id', articlesController.detail)

module.exports = router;