const express = require('express')
const app = express()

app.use(express.static('C:/Users/Jesse Castenada Lutz/grocery-prep-practice'))

app.use(express.json())

app.get('/api/recipe', (req, res) => {
    res.status(200)
    res.send('list of recipes requrested')
})

app.get('/api/recipe/:name', (req, res) => {
    const name = req.params.name

    if (typeof name === undefined || name.length === 0) {
        res.status(400)
        res.send('error: no name :(')
    }

    res.status(200)
    res.send(`instructions for ${name}`)
})

app.post('/api/rating', (req, res) => {
    const rating = req.body.rating
    const id = req.body.id

    console.log(rating, id)

    res.status(200)
    res.send(`rating of ${rating} received for recipe ${id}`)
})

app.listen(3000)