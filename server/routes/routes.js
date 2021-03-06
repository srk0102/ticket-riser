//Importing NPM modules.
const { response } = require('express');
const express = require('express');

//Initializing and declaring app as express
const app = express();

// Initializing and declaring router to create routes
const router = new express.Router();

//Importing schemas
const USER = require('../scheema/usersScheema');
const TICKET = require('../scheema/ticketSCheema')

//Importing MiddleWares
const { signupMiddleWare } = require('../middleWares/middleware')

/**
 * Route "/dummy" to show back end is working or not.
 */
router.get('/dummy', async (req, res) => {
  res.send("Hello Dummy")
})

/**
 * Route "/signup" to add user to db when it meet all the requirements.
 * @param {Object} body this is the body that will be post to db.
 * @return the response if the data posted to db or not.
 */
router.post('/signup', signupMiddleWare, async (req, res) => {
  const data = req.body
  if (data) {
    USER.insertMany(data)
      .then(data => {
        res.status(201).send(data)
      })
      .catch(err => {
        res.status(203).send(err.message)
      })
  } else {
    res.status(500).send("Internal Server Error")
  }
})

/**
 * Route "/login" to find user in db or not.
 * @param {Object} body this is the body that will be post to db.
 * @return the response if the data posted to db or not.
 */
router.post('/login', async (req, res) => {
  const data = req.body
  if (data) {
    await USER.findOne(data)
      .then(data => {
        if (data === null) {
          res
            .status(404)
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
          .send(err.message)
      })
  } else {
    res
      .status(500)
      .send("Internal server error")
  }
})

/**
 * Route "/AddTicket" to add ticket into db.
 * @param {Object} data this is the body that will be post to db.
 * @return the response if data posted to db or not.
 */
router.post('/AddTicket', async (req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    TICKET.insertMany(data)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(203).send(err.message)
      })
  } else {
    res.status(500).send("Internal Server Error")
  }
})

/**
 * Route "/userTickets" to get all user tickets from db.
 * @returns the response and data if its in db.
 */
router.post('/userTickets', async (req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    TICKET.find(data)
      .then(data => {
        res.status(200).send(data)
        console.log(data)
      })
      .catch(err => {
        res.status(203).send(err.message)
      })
  } else {
    res.status(500).send("Internal Server Error")
  }
})

/**
 * Route "/tickets" to get all tickets from db.
 * @param {Object} data This will send email to db.
 * @return the response from db.
 */
router.get('/tickets', async (req, res) => {
  TICKET.find()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(203).send(err.message)
    })
})

/**
 *ANCHOR dummy
 */
router.get('/id', async (req, res) => {
  TICKET.find({ "Title": { $nin: ['jim'] } })
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(203).send(err.message)
    })
})

//Exporting the routes
module.exports = router;