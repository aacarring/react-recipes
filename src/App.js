import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "73b56121";
  const APP_KEY = "4b9749a3844e108836114486660a3767";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //useEffect runs once initially, only runs again when query is altered
  useEffect (() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" value={search} 
          onChange={updateSearch}
        />
        <button
          className="search-button" 
          type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
