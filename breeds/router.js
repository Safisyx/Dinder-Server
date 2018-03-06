const Router = require('express').Router
const Product = require('./model')

const router = new Router()
module.exports = router

router.get('/breeds', (req, res) => {
  Breed.findAll({
    attributes: ['id', 'name']
  })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500)
      res.json({message: 'Something went wrong'})
    })
})
