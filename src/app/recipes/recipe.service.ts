import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

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
        ])
    ];

    getRecipe() {
    	/*We slice it only to return this Array, 
    	but only a copy of it*/
    	return this.recipes.slice();
    }
}