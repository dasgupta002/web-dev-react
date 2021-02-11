import React, { useEffect, useState } from "react";
import Recipe from './recipe.js';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = "1c95b4f4";
  const APP_KEY = "3286368efb8fca0799cf01f60d75973f";
  
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getRecipies();  
  }, [query]);
  
  const getRecipies = async () => {
    const response = await fetch(
	    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
	  );
	const data = await response.json();
	setRecipies(data.hits);
  };
  
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  
  const getSearch = e => {
    e.preventDefault();
	setQuery(search);
  };
  
  return (
    <div className = "App">
	<h2>Food Vegas</h2>
	<form className = "search-form" onSubmit = { getSearch }>
	<input className = "search-bar" type = "text" value = { search } onChange = { updateSearch }></input>
	<button className = "search-button" type = "submit">Search</button>
	</form>
	<div className = "recipes">
	{recipies.map(recipe => (
	    <Recipe key = { recipe.recipe.label }
		        title = { recipe.recipe.label }
		        image = { recipe.recipe.image }
				ingredients = { recipe.recipe.ingredients }>
		</Recipe>		
	))}
	</div>
	</div>
  );
};

export default App;