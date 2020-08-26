//const config = require("../config/config");
//const { TEXT } = require("sequelize/types");
//const Categories = require("./Categories");

module.exports = (sequelize, dataTypes)=>{
    let alias ="articles";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING
        },
        excerpt:{
            type: dataTypes.STRING
        },
        content:{
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.TIME
        },
        updated_at:{
            type: dataTypes.TIME
        }
    };
    config ={
        tableName: "articles",
        //timestamps: false;
    };

    const Article = sequelize.define(alias, cols, config);

    /*Article.associate = function(models){
        Article.belongsTo(models.Categories, {
            as:"categories",
            foreingKey: "category_id"
        })
    }

    Article.associate = function(models){
        Article.hasMany(models.Photos,{
            as: "photos",
            foreingKey:"articles_id"
        })
    }
    */
    return Article;
}