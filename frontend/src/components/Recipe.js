import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const id = window.location.hash.substr(1);
        fetch('http://localhost:3001/api/getRecipe/' + id)
        .then(res => res.json())
        .then(recipe => {
            this.setState({...recipe});

            let rating = recipe.ratings.reduce((a, b) => a + b) / recipe.ratings.length;
            rating = rating.toFixed(2);
            this.setState({rating: rating});

            document.title = recipe.title + ' - Grocery Prep'
        })
    }

    render() {
        return (
            <div id='recipe'>
                <div className='headline'>
                    <h1 id='title'>{this.state.title}</h1>
                    <div id='actions'>
                        <div id='ratings'>
                            <span id='rating'>{this.state.rating}</span> &#9734;
                            &nbsp;
                            <button id='add-to-cart'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='showcase'>
                    <div className='info'>
                        <p className='desc'>{this.state.desc}</p>
                    </div>
                </div>

                <h2>Ingredients</h2>
                <ul>
                    {this.state.ingredients && this.state.ingredients.map((item) => {
                            return <li key={item._id}><span className='count'>{item.amount} </span>{item.ingredient}</li>;
                        })
                    }
                </ul>

                <h2>Instructions</h2>
                <ol>
                    {this.state.instructions && this.state.instructions.map((instrction, count) => {
                        return <li key={count}>{instrction}</li>;
                    })}
                </ol>
            </div>
        )
    }
}

export default Recipe;