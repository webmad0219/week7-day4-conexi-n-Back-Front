const express = require('express');
const router = express.Router();

const Coaster = require('../models/Coaster')


router.get('/coasters', (req, res, next) => {
  Coaster.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/postCoaster", (req, res) => {
  Coaster.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = router;