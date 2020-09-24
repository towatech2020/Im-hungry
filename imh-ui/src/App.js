import './App.css';

import { RaisedButton, TextField } from 'material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
      recipe: null,
    };
  }

  fetchRecipe = () => {
    fetch(
      'http://a362a01d1d8514df484084fedb9a7e0f-1507506251.ca-central-1.elb.amazonaws.com/recipes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: this.state.ingredients }),
      },
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          ...this.state,
          recipe: data,
        }),
      );
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      ingredients: event.target.value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="main">
            <div className="header">
              <img
                src="/911-im-hungry.jpg"
                className="header-image"
                alt="kid hungry"
              />
            </div>
            <div className="search">
              <div className="search-bar">
                <TextField
                  hitText="Type your ingredients"
                  value={this.state.ingredients}
                  onChange={this.handleChange}
                />
              </div>

              <div className="search-buttons">
                <RaisedButton
                  label="Get Recipe"
                  style={{ marginLeft: 12 }}
                  onClick={this.fetchRecipe}
                />
                <RaisedButton
                  label="I'm feeling hungry"
                  style={{ marginLeft: 12 }}
                  onClick={this.fetchRecipe}
                />
              </div>
            </div>
            {this.state.recipe ? (
              <div className="result">
                <h2>{this.state.recipe.title}</h2>
                <img src={this.state.recipe.image} alt="recipe" />
              </div>
            ) : null}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
