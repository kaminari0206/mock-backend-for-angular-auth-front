const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const userSchema = require('../models/User')
const authorize = require('../middlewares/auth')
const { check, validationResult } = require('express-validator')

router.post('/validate-email', (req, res, next) => {
  if(req.body.email == 'admin@admin.com') {
    res.status(200).json({result: 'ok'})
  } else {
    if(req.body.email == 'admin@admin.com') {
      res.status(403).json({result: 'incorrect'})
    } else {
      res.status(403).json({result: 'disable'})
    }
  }
})

router.post('/validate-password', (req, res, next) => {
  if(req.body.password == 'admin') {
    res.status(200).json({result: true})
  } else {
    res.status(200).json({result: false})
  }
})

router.post('/validate-location', (req, res, next) => {
  if(req.body.location == 'remote') {
    res.status(200).json({result: true})
  } else {
    res.status(200).json({result: false})
  }
})

module.exports = router