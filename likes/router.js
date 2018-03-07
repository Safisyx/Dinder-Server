const Router = require('express').Router
const Like = require('./model')

const router = new Router()

router.get('/likes', (req, res) => {
  Like.findAll({
    attributes: ['userid', 'breedid', 'count']
  })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500)
      res.json({message: 'Something went wrong'})
    })
})

router.post('/likes', (req, res) => {
  //add like to the db
  const like = {
    userid: req.body.userid,
    breedid: req.body.breedid
  }

  //check if userid + breedid exists
  //if yes increment count
  //if not create a new like with count = 1

})

//to create new userid
//   User.create(user)
//     .then(entity => {
//       res.status(201)
//       res.json({
//         id: entity.id,
//         email: entity.email
//       })
//     })
//     .catch(err => {
//       console.error(err)
//       res.status(500).send({
//         message: 'Something went wrong'
//       })
//     })
//
//   })


module.exports = router //ES6 -style module export
