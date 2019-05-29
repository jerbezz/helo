require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const controller = require('./controller')

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
    // console.log(db.listTables())
})

let hello = () => {
    return console.log('Hello')
    next()
}

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    let badWords = ['jerk', 'knucklehead', 'internet explorer']
    if (req.body.content) {
        for(let i =0; i < badWords.length; i++){
            let regex = new RegExp(badWords[i], 'g')
            req.body.content = req.body.content.replace(regex, '****')
        }
    }
    next()
})

//auth logins:
app.post('/auth/register', controller.register)
app.post('/auth/login', controller.login)
app.get('/logout', controller.logout)
app.get('/auth/user-data', hello, controller.userData)
app.get('/api/posts', controller.getPosts)
app.get('/api/post/:id', controller.getPost)
app.put('/api/posts/:id', controller.edit)
app.get('/api/query', controller.query)