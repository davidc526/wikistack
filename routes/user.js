const express = require('express')
const router = express()
const { User, Page } = require('../models')
const userList = require('../views/userList')
const userPages = require('../views/userPages')


router.get('/', async (req, res, next) => {
    try {
        const foundUsers = await User.findAll()
        res.send(userList(foundUsers))
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const userPosts = await Page.findAll({
            where: { authorId: req.params.id }
        })
        const author = await User.findByPk(req.params.id)
        res.send(userPages(author.name, userPosts))
    } catch (error) {
        next(error)
    }
})

module.exports = router