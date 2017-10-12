import { Recipe } from './recipe.model';
export class RecipeService {


    recipies: Recipe[] = [

        new Recipe('Test Recipe', 'Simply a test', ''),
        new Recipe('Test Recipe2', 'Simply a test2', '')

    ];



    getRecipe() {
        return this.recipies.slice();
    }


}