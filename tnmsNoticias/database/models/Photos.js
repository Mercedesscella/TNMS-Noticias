//const config = require("../config/config");

module.exports = (sequelize, dataTypes)=>{
    let alias ="";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        file_path:{
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
        tableName: "photos",
        //timestamps: false;
    };

    const Photo = sequelize.define(alias, cols, config);
    return Photo;
}