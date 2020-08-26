var express = require('express');
var router = express.Router();
var articlesController = require('../controllers/articlesController');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('Articulos o noticias' );
});
*/
router.get('/cargar', articlesController.cargar);
router.post('/cargar', articlesController.create);
router.get ('/comentar', articlesController.comentar);
router.get('/modificar/:id', articlesController.modificar);
router.post('/modificar/:id', articlesController.update)

//router.get('/borrar', articlesController.borrar);
router.post('/borrar/:id', articlesController.borrar); //verificar boton de borrar noticia


//rutas para aceder a diferentes clases de noticias:
router.get('/ultimomomento', articlesController.ultimomomento);
router.get('/politica', articlesController.politica);
router.get('/economia', articlesController.economia);
router.get('/deportes', articlesController.deportes);
router.get('/elclima', articlesController.elclima);

//detalle de las noticias.
router.get('/:id', articlesController.detail)

router.get('/listar', articlesController.listar);
module.exports = router;