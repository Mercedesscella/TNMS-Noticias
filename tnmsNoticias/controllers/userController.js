let db = require('../database/models');
let sequelize = db.sequelize;


let userController = {
    'register':function(req, res){
        res.render('register');
    },
    'create':function(req, res){
        db.Users.create({
            name: req.body.name,
            firts_name: req.body.firts_name,
            last_name: req.body.last_name,
            avatar: req.body.avatar,
            email: req.body.email,
            password : req.body.password,
            type : req.body.type,

        })

        res.redirect("/articles");
    },
    'login' : function(req, res){
        res.render('login');
    },
    'editar' : function(req, res){
        db.Users.findByPk(req.params.ad)
        .then(function (user){
            res.render("editarUsuario", {user: user})
        })
    },
    'update': function(req, res){
        db.Users.update({
            name: req.body.name,
            firts_name: req.body.firts_name,
            last_name: req.body.last_name,
            avatar: req.body.avatar,
            email: req.body.email,
            password : req.body.password,
            type : req.body.type,

        },{
            where:{
                id: req.params.id
            }
        })
        res.redirect("/user/editar" + req.params.id)
    },
    
    'borrar' : function(req, res){
        db.Articles.destroy({
            where:{
                id: req.params.id
            }
        })

        res.redirect("/user/editar");
    },
    
    //'editado': function(req, res){
    //    res.send("FUI por PUT");
    //}


};
module.exports = userController;