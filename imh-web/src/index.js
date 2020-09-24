const { RECIPE_FETCH_URL } = process.env;

if (!RECIPE_FETCH_URL) {
  console.error('missing RECIPE_FETCH_URL in env var');
  process.exit(1);
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { fetchRecipes, pickRandomRecipe } = require('./utils');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/recipes', async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients) {
    res.sendStatus(400);
  }

  try {
    const recipes = await fetchRecipes(RECIPE_FETCH_URL)(ingredients);
    res.send(pickRandomRecipe(recipes));
  } catch (error) {
    console.error(`failed to fetch recipe ${error.message}`);
    throw error;
  }
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
