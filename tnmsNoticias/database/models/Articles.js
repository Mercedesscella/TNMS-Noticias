//const config = require("../config/config");

module.exports = (sequelize, dataTypes)=>{
    let alias ="";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            dataTypes: STRING
        },
        excerpt:{
            dataTypes: STRING
        },
        content:{
            dataTypes: STRING
        },
        created_at:{
            dataTypes: TIME
        },
        updated_at:{
            dataTypes: TIME
        }
    };
    config ={
        tableName: "articles",
        //timestamps: false;
    };

    const Article = sequelize.define(alias, cols, config);
    return Article;
}