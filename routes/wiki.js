const express = require('express')
const router = express()
// const addPage = require('../views/addPage')
const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res, next) => {
    res.send('<h1>wiki get request</h1>')
})

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.pagetitle,
    content: req.body.content
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})



module.exports = router