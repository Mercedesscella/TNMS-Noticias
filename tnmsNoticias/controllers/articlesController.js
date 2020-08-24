let db = require('../database/models');
let sequelize = db.sequelize;

let articlesController = {
    'cargar':function(req, res){
        res.render('cargaArticles');
    },
    'create':function(req, res){  //post de carga de mis noticias desarrollar
       db.Articles.create({
           title: req.body.title,
           excerpt: req.body.excerpt,
           content: req.body.content,
           created_at : req.body.created_at,//dia de hoy
           category_id: req.body.category_id
       })
        res.redirect("listarArt.ejs");
    },
    'modificar' : function(req, res){
        res.render('modificar');
    },
    'borrar' : function(req, res){
        res.render('borrar');
    },
    'comentar' : function(req, res){
        res.render('comentar');
    },

    'listar' : function(req, res){

            db.Articles.finsAll({
                order: [
                    ["updated_At", "DESC"]
                ]
            }).
                then(function(articles){
                    res.render("listarArt", {articulos: articulos})
                })

        let articles=[
            {id: 1, name:'Resolicion de Fernandez'},
            {id: 2, name:'Animales sueltos'},
            {id: 3, name:'Tormenta de nieve'},
            {id: 4, name:'Comer mas saludable'},
            {id: 5, name:'Vuelve el cine ?'}
        ]
        //res.render('listarArt',{ 'articles': articles});
    },
    //Estoy detallando la noticia que quiero ver a continuacion.
    'detail' : function(req, res){
        db.Articles.findByPk(req.params.id)
            .then(function(article){
                res.render("detalleArticle", {article: article})
            })
    },
    //acceder a los articulos por categoria:
    'ultimomomento':function(req, res){
        db.Articles.findAll({
            where : {
                category_id: 1
            },
            order: [
                ["updated_At", "DESC"]
            ]
        })
            .then(function(article){
                res.render("articleUltimomomento", {article: article})
            })
    },
    'politica' : function(req, res){
        db.Articles.findAll({
            where : {
                category_id: 2
            },
            order: [
                ["updated_At", "DESC"]
            ]
        })
            .then(function(article){
                res.render("articlePolitica", {article: article})
            })
    },
    'economia' : function(req, res){
        db.Articles.findAll({
            where : {
                category_id: 3
            },
            order: [
                ["updated_At", "DESC"]
            ]
        })
            .then(function(article){
                res.render("articleEconomia", {article: article})
            })
    },
    'deportes': function(req, res){
        db.Articles.findAll({
            where : {
                category_id: 4
            },
            order: [
                ["updated_At", "DESC"]
            ]
        })
            .then(function(article){
                res.render("articleDeportes", {article: article})
            })
    },
    'elclima': function(req, res){
        db.Articles.findAll({
            where : {
                category_id: 5
            },
            order: [
                ["updated_At", "DESC"]
            ]
        })
            .then(function(article){
                res.render("articleElclima", {article: article})
            })
    }

};
module.exports = articlesController;