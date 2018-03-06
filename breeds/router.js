const Router = require('express').Router
const Breed = require('./model')

const router = new Router()

router.get('/breeds', (req, res) => {
  Breed.findAll({
    attributes: ['id', 'type', 'numberOfLikes']
  })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500)
      res.json({message: 'Something went wrong'})
    })
})

router.get('/breeds/:id', (req, res) => {
  Breed.findById(req.params.id)
    .then(result => {
      if (result) {
        res.json(result)
      } else {
        res.status(404)
        res.json({ message: 'Not Found' })
      }
    })
    .catch(err => {
      res.status(500)
      res.json({ message: 'There was an error' })
    })
})

module.exports = router //ES6 -style module export
