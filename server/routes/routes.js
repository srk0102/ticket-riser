//Importing NPM modules.
const { response } = require('express');
const express = require('express');
const USER = require('../scheema/usersScheema');
const TICKET = require('../scheema/ticketSCheema')

//Initializing and declaring app as express
const app = express();

// Initializing and declaring router to create routes
const router = new express.Router();

/**
 * Route "/dummy" to add user to db when it meet all the requirements.
 * @param {Object} body this is the body you can post.
 * @return returns the response if the data posted to db or not.
 */
router.get('/dummy', async (req, res) => {
  res.send("Hello Dummy")
})

router.post('/signup', async (req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    USER.insertMany(data)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(203).send(err)
      })
  } else {
    res.status(500).send("Internal Server Error")
  }
})


router.post('/login', async (req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    await USER.findOne(data[0])
      .then(data => {
        if (data === null) {
          res
            .status(500)
            .send("User Not found")
        }
        else {
          res
            .status(200)
            .send("User Found")
        }
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .send(err)
      })
  } else {
    res
      .status(500)
      .send("Internal server error")
  }
})

router.post('/AddTicket', async (req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    TICKET.insertMany(data)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(203).send(err)
      })
  } else {
    res.status(500).send("Internal Server Error")
  }
})

router.get('/tickets', async (req, res) => {
  TICKET.find()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(203).send(err)
    })
})

//Exporting the routes
module.exports = router;