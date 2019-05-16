const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


app.use(bodyParser.urlencoded({ extended: true }))












app.use(primerMiddleware)
function primerMiddleware(req, res, next) {
    console.log("Primer MW llamado")
    next()
}


app.use(segundoMiddleware)
function segundoMiddleware(req, res, next) {
    console.log("Segundo MW llamado")
    next()
}

app.use(tercerMiddleware)
function tercerMiddleware(req, res, next) {
    console.log("Tercer MW llamado")
    req.palabraSecreta = "abracadabra"
    next()
}

















// Randerizado del formulario GET
app.get('/login', (req, res) => res.render('login'))

// Procesamiento de información POST (en req.body)
app.post('/login', (req, res) => {
    console.log(req.body)               // sólo accesible tras instalar body-parser

    // let email = req.body.email
    // let password = req.body.password
    const { email, password } = req.body

    res.send(`Email: ${email}, Password: ${password}, Palabra secreta que viene del Middleware 3: ${req.palabraSecreta}`)
})


app.listen(3000, () => console.log('App listening on port 3000!'))