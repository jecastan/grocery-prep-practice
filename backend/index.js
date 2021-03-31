const express = require('express')
const app = express()

const mongoose = require('mongoose')

const Recipe = require('./models/recipe')

mongoose.connect("mongodb+srv://jecastan:10lng0lst0nm@cluster0.sam2k.mongodb.net/groceryPrepPractice?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'))
    
app.use(express.static('C:/Users/Jesse Castenada Lutz/grocery-prep-practice'))

app.use(express.json())

const getRecipes = async () => {
    return await Recipe.find({})
}

const getRecipe = async name => {
    return await Recipe.find({name: name})
}

const postRating = async (name, rating) => {
    return await Recipe.findOneAndUpdate(
        { name: name },
        { $push: {ratings: rating} }
    )
}

app.get('/api/recipe', async (req, res) => {
    const name = req.query.name

    let recipes
    if (name === undefined)
        recipes = await getRecipes()
    else
        recipes = await getRecipe(name)
    res.json(recipes)
})

app.post('/api/rating', async (req, res) => {
    const name = req.body.name
    const ratings = req.body.ratings

    const rating = await postRating(name, ratings)
    res.send()
})

app.listen(3001)