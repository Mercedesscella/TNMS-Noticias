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
            dataTypes: INTEGER
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
        tableName: "coment",
        //timestamps: false;
    };

    const Coment = sequelize.define(alias, cols, config);
    return Coment;
}