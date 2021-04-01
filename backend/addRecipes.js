const mongoose = require('mongoose')

const Recipe = require('./models/recipe')

mongoose.connect("mongodb+srv://jecastan:10lng0lst0nm@cluster0.sam2k.mongodb.net/groceryPrepPractice?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'))

const ribeyeRecipe = new Recipe({
    title: "Cast Iron Ribeye",
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

const salsaRecipe = new Recipe({
    title: "Salsa",
    desc:"A tasty and spicy topping",
    picture:"../imgs/Salsa.jpg",
    ratings: [5, 4, 3],
    servings: 1,
    ingredients: [
        {ingredient: "tomatoes, roma", amount: 6},
        {ingredient: "serranos", amount: 6},
        {ingredient: "onion, purple, medium", amount: 1},
        {ingredient: "bunch of cilantro", amount: 1},
        {ingredient: "tbsp salt", amount: 2}
    ],
    instructions: [
        "Chop the stems off the serranos",
        "Combine tomatoes and serranos in a pot of water and boil, covered, for 30 minutes",
        "Allow pot to cool to room temperature",
        "Blend tomatoes and serranos in blender and add to a large bowl",
        "Add salt and mix well",
        "Dice onion and cilantro finely and stir into salsa",
        "Refridgerate immediately"
    ]
})

const omeletteRecipe = new Recipe({
    title: "Chorizo Omelette",
    desc:"Tasty brunch",
    picture:"../imgs/Chorizo Omelette.jpg",
    ratings: [5, 4, 3],
    servings: 1,
    ingredients: [
        {ingredient: "eggs", amount: 4},
        {ingredient: "pack of chorizo", amount: 1},
        {ingredient: "oz of onion", amount: 2},
        {ingredient: "oz of mushrooms", amount: 2},
        {ingredient: "tsp salt", amount: 1},
        {ingredient: "tsp pepper", amount: 1}
    ],
    instructions: [
        "Beat eggs in a bowl and add salt and pepper",
        "Dice onion and mushrooms",
        "Pre-heat skillet on medium heat and add chorizo",
        "Cook chorizo for about 5-10 minutes",
        "Lower heat, add beat eggs and gently mix all ingredients together",
        "Remove cover and gently fold omelette in half",
        "Cook a minute or two more and then serve"
    ]
})

const artichokeRecipe = new Recipe({
    title: "Pressure Cooked Artichoke",
    desc:"Artichokes can be difficult to cook properly due to being so tough. Try pressure cooking to cook them quickly to perfection",
    picture:"../imgs/Artichoke.jpg",
    ratings: [5, 4, 3],
    servings: 1,
    ingredients: [
        {ingredient: "artichoke", amount: 1},
    ],
    instructions: [
        "Pour 1/2 in of water in bottom of pressure cooker with vegtable steamer",
        "Cut artichoke in half and place in pressure cooker",
        "Seal pressure cooker and cook on high until pressure begins to release",
        "Continue to cook for 5 minutes",
        "Turn off burner and leave pressure cooker on burner until pressure safety lock releases",
        "Remove and serve"
    ]
})

artichokeRecipe.save()
omeletteRecipe.save()
salsaRecipe.save()
ribeyeRecipe.save()