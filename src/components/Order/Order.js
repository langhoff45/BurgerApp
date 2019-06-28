import React from 'react';

import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for(let IngredientName in props.ingredients) {
        ingredients.push(
            {
            name: IngredientName,
            amount: props.ingredients[IngredientName]
            }
        )
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize', 
            display: 'inline-block',
            border: '1px solid #ccc',
            padding: '5px'
            }} key={ig.name}>{ig.name} ({ig.amount})</span>;
    })

    return (<div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
    );
};

export default order;