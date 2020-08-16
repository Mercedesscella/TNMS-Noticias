var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register', userController.create);
router.get('/login', userController.login);
router.get('/editar/:idUser', userController.editar);



module.exports = router;
