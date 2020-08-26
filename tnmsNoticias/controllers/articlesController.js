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
        db.Articles.findByPk(req.params.ad)
        .then(function (user){
            res.render("editarArticulo", {article: article})
        })
    },
    //modificar yguardar los cambios En ARTICLE
    'update' : function(req, res){
        db.Articles.update({
            title: req.body.title,
            excerpt: req.body.excerpt,
            content: req.body.content,
            created_at : req.body.created_at,//dia de hoy
            category_id: req.body.category_id
        },{
            where:{
                id: req.params.id
            }
        })
        res.redirect("/articles/modificar" + req.params.id)
    },


    'borrar' : function(req, res){
        db.Articles.destroy({
            where:{
                id: req.params.id
            }
        })

        res.redirect("/article/listar");
    },
    'comentar' : function(req, res){
        res.render('comentar');
    },

    'listar' : function(req, res){
                sequelize.query("SELECT * FROM articles")
                .then(function(resultados){
                    let articulos= resultados[0];
                    res.send(articulos);
                })




           /* db.Articles.findAll({
                /*order: [
                    ["updated_At", "DESC"]
                ],
                include:[{
                    association:"categories",
                    association: "photos"
                }]
                
            }).
                then(function(articles){
                    res.render("listarArt", {articles : articles })
                })
            */
        /*let articles=[
            {id: 1, name:'Resolicion de Fernandez'},
            {id: 2, name:'Animales sueltos'},
            {id: 3, name:'Tormenta de nieve'},
            {id: 4, name:'Comer mas saludable'},
            {id: 5, name:'Vuelve el cine ?'}
        ]
        */
        //res.render('listarArt',{ 'articles': articles});
    },
    //Estoy detallando la noticia que quiero ver a continuacion.
        /*'detail' : function(req, res){
             
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
  */
};
module.exports = articlesController;