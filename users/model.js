const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  preferredbreed: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
}, {
  tableName: 'users',
	timestamps: false
})

module.exports = User
