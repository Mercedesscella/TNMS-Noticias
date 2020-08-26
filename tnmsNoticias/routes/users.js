var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
let {check, validationResult, body} = require('express-validator');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register', [
  check('email'),
  check('password')
] ,userController.create);
router.get('/login', userController.login);
router.get('/editar/:id', userController.editar);
router.post('/editar/:id', userController.update);

router.post('/borrar/:id', userController.borrar); //verificar boton de borrar usuario


module.exports = router;
