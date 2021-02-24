import React from 'react';

const Recipe = ({title, ingredients, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;