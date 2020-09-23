const fetch = require('node-fetch');

module.exports = {
  fetchRecipes: (baseUrl) => (ingredients) => {
    const url = `${baseUrl}/recipes?ingredients=${ingredients}`;
    console.log(`fetching from ${url}`);
    return fetch(url).then((resp) => resp.json());
  },
  pickRandomRecipe: (recipes) => {
    const randomInt = Math.floor(Math.random() * 100);
    const randomIndex = randomInt % recipes.length;
    return recipes[randomIndex];
  },
};
