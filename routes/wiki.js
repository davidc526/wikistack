const express = require('express')
const router = express()
// const addPage = require('../views/addPage')
const { Page } = require("../models");
const { User } = require("../models")
const { addPage } = require("../views");
const wikiPage = require('../views/wikipage')
const mainPage = require('../views/main')

router.get('/', async (req, res, next) => {
    try {
        const allPages = await Page.findAll()
        res.send(mainPage(allPages))
        
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next) => {
        let foundUser = await User.findOne({
            where: {
                name: req.body.authorname
            }
        })
        if(!foundUser) {
            foundUser = new User({
                name: req.body.authorname,
                email: req.body.authoremail
            })
        }
        await foundUser.save()
    const page = new Page({
        title: req.body.pagetitle,
        content: req.body.content,
    });
    try {
        page.setAuthor(foundUser)
        await page.save();
        console.log(page.dataValues)
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) { next(error) }
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

router.get('/:slug', async (req, res, next) => {
    try {
        const foundPage = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        })
        res.send(wikiPage(foundPage));
    } catch (error) {
        next(error)
    }
  });


module.exports = router