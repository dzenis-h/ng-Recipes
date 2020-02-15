import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    let token: string;
    this.authService.getIdToken()
      ? (token = this.authService.getIdToken())
      : (token = localStorage.getItem("token"));
    return this.http.put(
      "https://balkan-recipes.firebaseio.com/recipes.json?auth=" + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    let token: string;
    this.authService.getIdToken()
      ? (token = this.authService.getIdToken())
      : (token = localStorage.getItem("token"));

    this.http
      .get("https://balkan-recipes.firebaseio.com/recipes.json?auth=" + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
