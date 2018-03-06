const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  name: {
  type: Sequelize.STRING,
  allowNull: false
},
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telephone: {
   type: Sequelize.INTEGER,
   allowNull: false
 },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  breedsLiked: {
    type: Sequelize.INTEGER, ///Sequelize.JSON//Sequelize.ARRAY?
    allowNull: false
  }
}, {
  tableName: 'users',
	timestamps: false
})

module.exports = User
