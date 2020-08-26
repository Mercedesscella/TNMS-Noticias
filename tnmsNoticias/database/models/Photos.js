//const config = require("../config/config");

module.exports = (sequelize, dataTypes)=>{
    let alias ="photos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        file_path:{
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
        tableName: "photos",
        //timestamps: false;
    };

    const Photo = sequelize.define(alias, cols, config);
    /*
    Photo.associate = function(models){
        Photo.belongsTo(models.Articles, {
            as:"articles",
            foreingKey: "articles_id"
        })
    }
    */

    return Photo;
}