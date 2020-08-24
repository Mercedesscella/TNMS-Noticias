let db = require('../database/models');
let sequelize = db.sequelize;

let articlesController = {
    'cargar':function(req, res){
        res.render('cargaArticles');
    },
    'create':function(req, res){  //post de carga de mis noticias desarrollar
        res.send(req.body);
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

            db.Articles.finsAll().
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
    }

};
module.exports = articlesController;