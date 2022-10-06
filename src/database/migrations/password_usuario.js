'use strict'
const bcrypt = require('bcryptjs')   //p encriptar password
const { Sequelize } = require('../models')
module.exports = {
    up: (queryInterface, Sequelize) =>{
        return Promise.all([  //nos permite hacer mas de un cambio
            queryInterface.addColumn('usuario','password',{
                type: Sequelize.STRING,
                allowNull: false,
                defaultvalue: bcrypt.hashSync('password',10)  //encripto passw
            }),
            queryInterface.changeColumn('usuario','email',{
                type: Sequelize.STRING,
                allowNull: false
            })
        ])
    },

    down: (queryInterface, Sequelize) =>{
        //si no funciona la migracion, aca se puede revertir cambios o eliminar a tabla, etc.
    }
}