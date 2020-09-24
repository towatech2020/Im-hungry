const fetch = require('node-fetch');

const cache = {};

module.exports = {
  fetchRecipes: (baseUrl) => (ingredients) => {
    if (cache[ingredients]) {
      console.log(`recipe retrieved from cache for ${ingredients}`);
      return cache[ingredients];
    }
    const url = `${baseUrl}/recipes?ingredients=${ingredients}`;
    console.log(`fetching from ${url}`);
    return fetch(url).then((resp) => resp.json()).then(resp => cache[ingredients] = resp);
  },
  pickRandomRecipe: (recipes) => {
    const randomInt = Math.floor(Math.random() * 100);
    const randomIndex = randomInt % recipes.length;
    return recipes[randomIndex];
  },
};
