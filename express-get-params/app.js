const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');






// QUERY STRING

// Randerizado de formulario que enviará a 'abrigos' la info mediante GET
app.get('/', (req, res, next) => res.render('abrigos'))

// Obtenemos la información delformulario mediante query string
app.get('/abrigos', (req, res) => {
    console.log('La query string: ', req.query)
    const text = `
        <p>Se esperan visualizar abrigos de color ${req.query.color}</p>
        <p>De talla ${req.query.size}</p>
        <p>Para la temporada ${req.query.season}</p>`
    res.write(text)
})








// URL PARAMS

// http://localhost:3000/usuarios/748558565
app.get('/usuarios/:id_usuario', (req, res) => {

    console.log('Los URL params: ', req.params)

    const text = `<p>El ID de usuario es ${req.params.id_usuario}</p>`
    res.write(text)
})



// http://localhost:3000/viajes/madrid/fuerteventura/3
app.get('/viajes/:origen/:destino/:personas', (req, res) => {

    console.log('Los URL params: ', req.params)

    const text = `
        <p>El origen del viaje es ${req.params.origen}</p>
        <p>El destino del viaje es ${req.params.destino}</p>
        <p>Para un total de ${req.params.personas} adultos</p>`
    res.write(text)
})


















app.listen(3000, () => console.log('App listening on port 3000!'))