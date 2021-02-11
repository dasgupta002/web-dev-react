import React from 'react';
import styles from "./recipe.module.css";

const Recipe = ({title, image, ingredients}) => {
   return (
      <div className = { styles.recipe }>
	  <h2>{ title }</h2>
	  <img src = { image }/>
	  <ul>{ ingredients.map(ingredient => (
	    <li>{ ingredient.text }</li>
	  ))}</ul>
	  </div>
	); 
};

export default Recipe;