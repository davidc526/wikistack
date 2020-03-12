const models = require('./models/index');
// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })
const express = require('express')
const app = express()
const morgan = require('morgan')
const main = require('./views/main')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
    res.redirect('/wiki')
})
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)

const PORT = 3000
const init = async () => {
    await models.db.sync({force: false})
    // why didnt this work specifying the two models
    // await models.User.sync()
    // await models.Page.sync()
    // was saying User and Page was undefined
    app.listen(PORT, () => {console.log(`app is listening on port: ${PORT}`)})
}
init()