import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Buddha Bowl', 
        'This buddha bowl recipe is super fresh, delicious and versatile! The rice and veggies and dressing can be made in advance and stored in the refrigerator. Recipe yields 4 meal-sized bowls.', 
        'https://www.drdavidludwig.com/wp-content/uploads/2017/01/vegetables-1947760_1280.jpg',
        [
            new Ingredient('Tomatto', 2),
            new Ingredient('Green chillies', 4) 
        ]),
    new Recipe('Homecoming Ham', 
        'We keep homemade hamburgers simple and use quality meat, salt and pepper.',
        'https://foodimentaryguy.files.wordpress.com/2016/12/hamburger-0.jpg',
        [
            new Ingredient('Ground beef', 1),
            new Ingredient('Ground black pepper', 1) 
        ]),
    new Recipe('Paneer kathi roll', 
        'Delicious paneer kathi rolls are nothing but tongue tickling spicy paneer tikka wrapped in chapati or paratha.', 
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Fish_fingers.jpg', 
        [
            new Ingredient('Eggs', 4),
            new Ingredient('Paneer tikkas', 3)
        ]),
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
