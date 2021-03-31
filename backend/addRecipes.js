const mongoose = require('mongoose')

const Recipe = require('./models/recipe')

mongoose.connect("mongodb+srv://jecastan:10lng0lst0nm@cluster0.sam2k.mongodb.net/groceryPrepPractice?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'))

const ribeyeRecipe = new Recipe({
    name: "Cast Iron Ribeye",
    desc:"Perfect Keto Dinner",
    picture:"../imgs/Ribeye_Steak.jpg",
    ratings: [5, 4, 3],
    servings: 1,
    ingredients: [
        {ingredient: "ribeye, 1 lb each", amount: 1},
        {ingredient: "tbsp salt", amount: 1},
        {ingredient: "tsp pepper", amount: 1},
        {ingredient: "tbsp canola oil", amount: 1}
    ],
    instructions: [
        "Season ribeye with salt and pepper on both sides",
        "Allow ribeye to sit for 30-60 minutes",
        "Pre-heat oven to 350 deg",
        "Heat cast iron with oil on high",
        "Place ribeye on cast iron once oil starts to smoke",
        "Sear for 2 minutes per side",
        "Place cast iron in oven for 6 minutes",
        "Remove from oven and allow to rest in pan for 10 minutes"
    ]
})

ribeyeRecipe.save()