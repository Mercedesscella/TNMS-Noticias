//const config = require("../config/config");

module.exports = (sequelize, dataTypes)=>{
    let alias ="";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating:{
            type: dataTypes.INTEGER
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
        tableName: "coment",
        //timestamps: false;
    };

    const Coment = sequelize.define(alias, cols, config);
    return Coment;
}