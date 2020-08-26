//const config = require("../config/config");

module.exports = (sequelize, dataTypes)=>{
    let alias ="";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        avatar:{
            type: dataTypes.STRING  
        },

        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        type:{
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
        tableName: "users",
        //timestamps: false;
    };

    const Users = sequelize.define(alias, cols, config);
    return Users;
}