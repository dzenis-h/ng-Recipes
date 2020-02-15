import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    if (localStorage.getItem("token")) {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    } else {
      this.router.navigate(["/signin"]);
    }
  }

  onEditRecipe() {
    if (localStorage.getItem("token")) {
      this.router.navigate(["edit"], { relativeTo: this.route });
    } else {
      this.router.navigate(["/signin"]);
    }
  }

  onDeleteRecipe() {
    if (localStorage.getItem("token")) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(["/recipes"]);
    } else {
      this.router.navigate(["/signin"]);
    }
  }
}
