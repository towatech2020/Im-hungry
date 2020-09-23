package com.towatech.imh;

import com.towatech.imh.dto.RecipeDto;

import java.util.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;

@CrossOrigin(origins = "*")
@RestController
public class RecipeController {

  @Value("${apiKey}")
  private String apiKey;

	@GetMapping("/recipes")
	public RecipeDto[] getRecipes(@RequestParam(name="ingredients", required=true) String ingredients) {
    RestTemplate restTemplate = new RestTemplate();
    String urlString = "https://api.spoonacular.com/recipes/findByIngredients?apiKey={apiKey}&ingredients={ingredients}";
    RecipeDto[] recipes = restTemplate.getForObject(
      urlString,
      RecipeDto[].class,
      apiKey,
      ingredients);
		return recipes;
	}

}
