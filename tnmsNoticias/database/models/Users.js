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
            dataTypes: STRING
        },
        first_name:{
            dataTypes: STRING
        },
        last_name:{
            dataTypes: STRING
        },
        avatar:{
            dataTypes: STRING  
        },

        email:{
            dataTypes: STRING
        },
        password:{
            dataTypes: STRING
        },
        type:{
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
        tableName: "users",
        //timestamps: false;
    };

    const Users = sequelize.define(alias, cols, config);
    return Users;
}