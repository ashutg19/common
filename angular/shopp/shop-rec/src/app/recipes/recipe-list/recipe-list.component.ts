import { Component, OnInit, Output, EventEmitter, Provider } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipies: Recipe[];

  constructor(private recipe: RecipeService) { }

  ngOnInit() {

    this.recipies = this.recipe.getRecipe();
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
