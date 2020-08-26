var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
let {check, validationResult, body} = require('express-validator');

let db = require('../database/models');
let sequelize = db.sequelize;



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register'),[
    check('name').isLength().withMessage('Este campo debe estar completo'),    
    check('first_name').isLength().withMessage('Este campo debe estar completo'),
    check('last_name').isLength().withMessage('Este campo debe estar completo'),
    check('email').isEmail().withMessage('ingresar un email valido'),
    check('password').isLength({min:6}).withMessage('lo minimo son 6 caracteres'),
    check('type').isLength().withMessage('Este campo debe estar completo'),
    body('email').custom(function (value){
      for(let i=0; i< Users.Length; i++){
        if(db.users.email[i] ==value){
            return false;
        }
      }
    }).withMessage('El usuario ya fue ingresado')
            ],userController.create);

router.get('/login', userController.login);
router.get('/editar/:id', userController.editar);
router.post('/editar/:id', userController.update);

router.post('/borrar/:id', userController.borrar); //verificar boton de borrar usuario


module.exports = router;
