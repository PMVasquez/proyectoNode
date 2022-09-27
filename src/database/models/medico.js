'use strict'
//const medicoController = require("../../controllers/medico.controller")

  //para que no pueda usar variables no definidas

module.exports= (sequelize,DataTypes) => {

    let Medico = sequelize.define('medico',{  //defino la tabla
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        appellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING            
        },
        celular:{
            type: DataTypes.INTEGER
        },
        especialidad:{
            type: DataTypes.STRING            
        },
        createdAt: { // fecha de creacion
            type: DataTypes.DATE, // tipo de dato
            field: 'created_at', // nombre de la columna
            defaultValue: DataTypes.NOW, // valor por defecto
            allowNull: false // no puede ser nulo
          },
          updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
          },
          deletedAt: { // fecha de eliminacion
            type: DataTypes.DATE, // tipo de dato
            field: 'deleted_at' // nombre de la columna
          }
    },
    {
        paranoid: true, // elimina los registros de forma logica
        freezeTableName: true, // no va a modificar el nombre de la tabla a plural
    })  
    
    Medico.associate = models =>{
        //asociaciones con otras tablas
        Medico.hasMany(models.paciente_medico)               
          
        
    }
    
    return Medico


}