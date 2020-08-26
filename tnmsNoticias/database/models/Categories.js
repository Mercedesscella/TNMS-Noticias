//const config = require("../config/config");

//const { TEXT } = require("sequelize/types");

module.exports = (sequelize, dataTypes)=>{
    let alias ="";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.TEXT
        }
    };
    config ={
        tableName: "categories",
        //timestamps: false;
    };

    const Categorie = sequelize.define(alias, cols, config);
    /*
    Categorie.associate = function(models){
        Categorie.hasMany(models.Article, {
            as:"articles",
            foreingKey: "category_id"
        })
    }
    */
    return Categorie;
}